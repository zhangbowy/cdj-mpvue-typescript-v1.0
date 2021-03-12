/**
 * Created by zhangbo on 2019/10/2 0002.
 * @公共方法页面
 */
import g from "./utils/global.js";
import app from "./../app.ts"
import md5 from 'crypto-js/md5';
import Base64 from 'crypto-js/enc-base64';

let dayList = ["日", "一", "二", "三", "四", "五", "六"];

export function getDay($stamp)
{

	if (!$stamp || $stamp.toString().length != 10 && $stamp.toString().length != 13)
	{
		return 0;
	}
	let date = new Date($stamp);
	let day = date.getDay();
	return dayList[day]
}

/**
 * @获取路由u后面全部参数
 */
export function getQuery()
{
	/* 获取当前路由栈数组 */
	const pages = getCurrentPages();
	const currentPage = pages[pages.length - 1];
  return currentPage.options;
}
/**
 * 合并两个对象（将第二个对象合并到第一个对象），也可用于深度复制
 * @param d 要输出的对象
 * @param b 要合并的对象
 * @param cover 是否覆盖属性
 * @private
 */
export function mergeObject(d,b,cover) {
  if(b)
  {
    for(var k in b)
    {
      if(typeof b[k] == "object" && (!d[k] || typeof d[k] == "object"))
      {
          if(Array.isArray(b[k]))
          {
            d[k] = d[k] || []
          }
          else
          {
            d[k] = d[k] || {}
          }
        mergeObject(d[k],b[k],cover)
      }
      else
      {
        (!(!cover && d.hasOwnProperty(k))) && (d[k] = b[k])
      }
    }
  }
}
export function __merge(d, b, cover)
{
	if (b)
	{
		for (var k in b)
		{
			if (typeof b[k] == "object" && (!d[k] || typeof d[k] == "object"))
			{
				if (Array.isArray(b[k]))
				{
					d[k] = d[k] || [];
				}
				else
				{
					d[k] = d[k] || {};
				}
				__merge(d[k], b[k], cover);
			}
			else
			{
				(!(!cover && d.hasOwnProperty(k))) && (d[k] = b[k])
			}
		}
	}
	return d;
}

/*

 * params
 * $res:用户信息
 * $code： code
 * $isStamp:是否需要跳转
 * */
export function wxLogin($data, $code, $isStamp)
{
  wx.showLoading({
    title:"拼命加载中..."
  });
	var data = {};
	// if ($data.rawData)
	// {
	// 	data = JSON.parse($data.rawData)
	// }
	var netData = g.util.__merge({}, data);
	netData.code = $code;
	netData.encryptedData =$data.encryptedData;
	// netData.iv = encodeURIComponent($data.iv);
	netData.iv = $data.iv;
  netData.appId = g.configs.param.appId;
	// netData.signature = $res.signature;
	// netData.rawData = $res.rawData;
  let _params = {};
  _params.service = "wxService";
  _params.method = "parseEncryptedData";
  _params.data = netData;
	g.func.call(_params).then($res =>
	{
	  console.log($res);
	  if($res.unionId)
    {
      wx.setStorageSync("_unionid",$res.unionId);
      g.data.userInfoPool.update($res);
    }
    let local_uid = wx.getStorageSync("_unionid");
    let _unionid = local_uid?local_uid:$res.unionId;
    let checkParams = {};
    checkParams.service = "userService";
    checkParams.method = "queryByWxUnionid";
    checkParams.data = {unionid:_unionid};
    //判断用户是否存在我们的系统里
    g.func.call(checkParams).then(($data2)=>
    {
      g.data.userInfoPool.update($data2);
      if($data2.exists)
      {
        let isBlank = $data2.bankCardList.length;
        //是否三要素
        if(isBlank>0)
        {
          wx.hideLoading();
          wx.reLaunch({
            url: '../index/main'
          })
        }
        else
        {
          wx.hideLoading();
          wx.reLaunch({
            url: '../personalInfo/main'
          })
        }
      }
      else
      {
        wx.hideLoading();
        wx.reLaunch({
          url: '../personalInfo/main'
        })
      }
    },$err=>
    {
      g.func.dealErr($err)
    });
    // if ($isStamp)
    // {
    //   wx.reLaunch({
    //     url: '../index/main'
    //   })
    // }
		// g.data.userInfoPool.update($data);
	},$err=>
  {
    wx.hideLoading();
    g.func.dealErr($err)
  })
}
function getUserInfo()
{
  return new Promise((resolve, reject) =>
  {
    g.net.call("user/getInfo").then($data =>
    {
      g.data.userInfoPool.update($data);
      resolve()
    }, $err =>
    {
      reject($err)
    })
  })
}



/*
   对接客户的api  add on 2019/10/21
   * $data
   * service //服务名
   * method //服务方法
   * data //参数
 * */
export function call($data)
{
  return new Promise((resolve, reject) =>
  {
    let _params = {
      // "apikey": "f56ab2cea204418585c1feb25db6c6b00d3w6", //已写在配置里
      "timestamp": new Date().getTime(),//时间戳
      "sign": "",//约定的签名值
      "service": $data.service,//api类型
      "method": $data.method,//具体api
      "data": $data.data //数据
    };
      //获取签名
    _params.sign = getSign(_params);
      //请求接口
    g.net.call("",_params).then(($data)=>
    {
        resolve($data);
    },$err=>
    {
        reject($err)
    })
  })

}

/**
 * 生成签名
 *$data --生成签名的数据
 *
 */
function getSign($data)
{
  let apisecret =  g.configs.param.apiSecret;
  let signStr = JSON.stringify($data.data)  + $data.timestamp + apisecret;
  // let sign = crypto.createHash('md5').update(encodeURIComponent(append), 'utf-8').digest().toString("base64");
  let sign = Base64.stringify(md5(encodeURIComponent(signStr)));
  console.log(sign);
  return sign;
}

/**
 * Created by zhangbo on 2019/8/7 0002.@
 * 错误处理
 * @param 接口返回值
 *
 */
export function dealErr($errObj)
{
  if($errObj.code == -2)  //没有数据
  {
    wx.navigateBack();
		return;
  }
  wx.showToast({
		title: $errObj.errorMsg,
		duration: 2000,
		icon: "none",
		mask: true
	})
}

export function extendou(func,wait)
{
    let timeout;
    return function () {
      let context = this;
      let args = arguments;
      debugger
      if (timeout) clearTimeout(timeout);
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args)
    }
}
