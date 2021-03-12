module.exports = {
  mode: ["debug","testsData"], //工作模式 //"devData“ 请求假数据(mock) //testData真实数据  //debug 控制台有输出
  url: {    //公共路径配置
    domain: "",
    server: "https://api.51cdj.cn/caidangjia/api/router", //正式
    // server: "https://apitest.51cdj.cn/caidangjia/api/router", //正式
    uploadUrl: "", //图片上传路径
    staticUrl:"",//静态资源路径
    gameUrl:"",//辅助性游戏目录
    ossUrl:"",//oss路径
    // defaultUrl:"http://www.qinkeji.cn/static/1.jpg"//默认图
  },
  // path:"http://localhost:4000",
  path:"http://192.168.31.184:8089",
  http: {
    method: "post",  //请求方式
    credentials: false,
    repeatReqTime: 2000,  //重复请求间隔
    req: {
      result: {
        name: "code",
        type: "string",
        success: '0'
      },
      data: {
        name: "data"
      },
      error: {
        name: "code",
        type: "number"
      },
      errorMsg: {
        name: "msg",
        type: "string"
      },
      mime: "json"
    }
  },
  // file: {
  //   staticData: "{$data}/staticData.data"
  // },

  param: {   //公共参数配置
    defaultLang: "cn",
    imageExp: "\\w+\\.(jpeg|jpg|gif|bmp|png).*",
	  repeatCodeTime:60,//短信验证码请求间隔
    pageSize:10 ,//分页条数,
    timeOut:5000,
    apikey:'f56ab2cea204418585c1feb25db6c6b00d3w6',//接口请求有效标示
    apiSecret:"I0HhGrDfjj2n2voUUeVYYAdBSNPI8DreQju3", //生成签名秘钥
    appId:"wxfee6f252d5465267"
  }
};

