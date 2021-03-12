import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件
const debug = require('debug')('log:Index');
// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card,
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
  }
})
class Index extends Vue {
  AppUrls = AppUrls;
  ver: number = 123;
  test: string = "testDetail";
  globalData:any;
  wxInfo:any;
  private g: any;
  bankCard:number = null;
  userName:string = "";
  idCard:number = null;
  email:string = "";
  isValid:boolean = true;
  infoType:string = "person";
  person:any ={
    name:"",
    mobile:"",
    email:"",
    idNumber:"",
    cardNo:"",
    verifyCode:""
  };
  business:any = {
    name:"" ,//工商户名称,
    idNumber:"", //企业证件号
    orgLegalIdNumber:"",//法人身份证
    orgLegalName:"", //法人姓名
    mobile:"" //手机号
  };
  timeNum = 60;
  isShowTime:boolean = false;
  onShow() { // 小程序 hook
    debug('onShow');
    // @ts-ignore
    wx.hideHomeButton()
  }
  // @ts-ignore
  get list()
  {

  }
  // @ts-ignore
  get userInfo()
  {

  }
  onclick_tab($tab)
  {
    if($tab == "business")
    {
      wx.showToast({
        title:"暂未开放",
        icon:"none"
      });
      return
    }
    this.infoType = $tab
  }
  onchangeInput(e)
  {
    let _type = e.mp.currentTarget.dataset.type;
    this.person[_type] = e.mp.detail;
    // debugger
  }
  onchangeInputb(e)
  {
    let _type = e.mp.currentTarget.dataset.type;
    this.business[_type] = e.mp.detail;
    // debugger
  }
  onclick_reset()
  {
    this.g.func.extendou(this.resetInput(),2000)
  }
  resetInput()
  {
    console.log("1");
    this.userName = "";
    this.idCard = null;
    this.bankCard = null;
  }
  onClickIcon()
  {

  }
  validPerson()
  {
      if((this.person.idNumber).length != 18)
      {
        this.isValid = false
      }
      if(this.person.name == "")
      {
        this.isValid = false
      }
      if(this.person.verifyCode == "")
      {
        this.isValid = false
      }
      if(this.person.mobile.length != 11)
      {
        this.isValid = false
      }
  }
  validBus()
  {
    if((this.business.idNumber+"").length < 15)
    {
      this.isValid = false
    }
    if(this.business.name == "")
    {
      this.isValid = false
    }
    if(this.business.orgLegalName == "")
    {
      this.isValid = false
    }
    if(this.business.orgLegalIdNumber.length!=18)
    {
      this.isValid = false
    }
    if(this.business.mobile.length!=11)
    {
      this.isValid = false
    }
  }
  onclick_saveInfo()
  {
    // debugger
    // wx.reLaunch({
    //   url:'../contractList/main'
    // })
    let _unionId = wx.getStorageSync("_unionid")?wx.getStorageSync("_unionid"):this.g.data.userInfoPool.unionId;
    // let _unionId = this.g.data.userInfoPool.unionId;
    if(this.infoType ==="person")
    {
      this.validPerson();
      if(!this.isValid)
      {
        debugger;
        // @ts-ignore
        mpvue.showToast({
          icon:"fail",
          title:"请输入完整有效信息",
          duration:1000
        });
        this.isValid = true;
        return
      }
      // @ts-ignore
      mpvue.showLoading({
        title:"加载中...",
      });

      let netData = this.person;
      netData.unionId = _unionId;
      // netData.
      let params:any = {};
      params.service = "eSignService";
      params.method = "authentication";
      params.data = netData;
      this.g.func.call(params).then(($data)=>
      {
        debugger;
        wx.hideLoading();
        let blackList = this.g.data.userInfoPool.bankCardList;
        let user = {
          userId:$data.userId
        };
        this.g.data.userInfoPool.update({user:user});
        // if(blackList!=null)
        // {
          wx.reLaunch({
            url:"../index/main"
          });
        // }
        // else
        // {
        //   wx.reLaunch({
        //     url:"../signInfo/main"
        //   });
        // }

      },$err=>
      {
        wx.hideLoading();
        this.g.func.dealErr($err);
      })
    }
    else
    {
      this.validBus();
      if(!this.isValid)
      {
        // @ts-ignore
        mpvue.showToast({
          icon:"fail",
          title:"请输入完整有效信息",
          duration:1000
        });
        this.isValid = true;
        return
      }
      let netData = this.business;
      netData.unionId = _unionId;
      // netData.
      let params:any = {};
      params.service = "eSignService";
      params.method = "createOrgAccount";
      params.data = netData;
      this.g.func.call(params).then(($data)=>
      {
        wx.hideLoading();
        let blackList = this.g.data.userInfoPool.bankCardList;
        let org:object ={
          userId:$data.userId
        };
        this.g.data.userInfoPool.update({org:org});
        if(blackList!=null)
        {

          wx.reLaunch({
            url:"../index/main"
          });
        }
        else
        {
          wx.reLaunch({
            url:"../signInfo/main"
          });
        }

      },$err=>
      {
        wx.hideLoading()
        this.g.func.dealErr($err);
      })
    }

    // this.g.net.call("getTopicByfgid").then(($data)=>{
    //   wx.switchTab({
    //     url:'../index/main'
    //   });
      // @ts-ignore
      // mpvue.hideLoading()
    // });


  }
  onclick_BackCard()
  {
    // let query = wx.createSelectorQuery();
    // let blankBtn = query.select("#blank");
    // query.exec(function (res) {
    //   debugger
    // })
    // debugger
    // wx.navigateTo({url:"plugin-private://wx4418e3e031e551be/components/formpage/form-page?certificateType=bankCard&opposite=true&selectedOptions=number"})
  }
  onClick_getCardNumber(e)
  {
    // @ts-ignore
    mpvue.showLoading({
      title:'拼命加载中'
    });
    setTimeout(()=>{
      // @ts-ignore
      mpvue.hideLoading();
    },500);

    this.bankCard = e.mp.detail.number
  }
  mounted() { // vue hook
    // debug('mounted')
    // this.g.net.call("getTopicByfgid").then((res)=>{
    // })

  }
  onClick_sms()
  {
    var reg =/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(19[0-9]{1})|(16[0-9]{1}))+\d{8})$/;
    if(!reg.test(this.person.mobile))
    {
      wx.showToast({
        title: '手机号不正确！',
        icon: 'none',
        duration: 1500

      });
      return;
    }
    let _unionId = wx.getStorageSync("_unionid");
    let params:any = {};
    params.service = "userService";
    params.method = "sendVerifyCode";
    params.data = {
      mobile:this.person.mobile,
      unionId:_unionId
    };
    this.g.func.call(params).then(($data)=>
    {
      wx.showToast({
        title: "发送成功!",
        icon: 'none',
        duration: 1500
      });
      let _time = this.g.config.param.repeatCodeTime;//应该写到配置里
      this.timeNum = _time;
      this.isShowTime = true
      //验证码倒计时
      var codeTime = setInterval(() =>
      {
        // @ts-ignore
        _time--;
        if (_time == 0)
        {
          clearInterval(codeTime);
          this.isShowTime = false;
          _time = this.g.config.param.repeatCodeTime;
        }
        this.timeNum = _time;
      }, 1000)
    },$err=>
    {

    })
  }
}


export default Index
