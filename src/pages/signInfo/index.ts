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
  isValid:boolean = true;
  userTypeInfo = "请选择用户类型";
  userType = {};
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
  onclick_chooseUser()
  {
    let _this = this;
    let userInfo = this.g.data.userInfoPool;
    wx.showActionSheet({
      itemList: ['个人', '个体工商户'],
      success (res) {
        if(res.tapIndex === 0)
        {
          if(userInfo.user ==null)
          {
            wx.showToast({
              duration: 1500,
              image: "",
              mask: false,
              title: "未注册个人信息,请重新选择",
              icon:"none"

            })
          }
          else
          {
            _this.userType = userInfo.user;
            _this.userTypeInfo = "个人"
            wx.showToast({
              duration: 1500,
              image: "",
              mask: false,
              title: "选择成功!",
              icon:"none"

            })
          }
        }
        else
        {
          if(userInfo.org==null)
          {
            wx.showToast({
              duration: 1500,
              image: "",
              mask: false,
              title: "未注册个体工商户,请重新选择",
              icon:"none"

            })
          }
          else
          {
            _this.userType = userInfo.org;
            _this.userTypeInfo = "个体工商户"
            wx.showToast({
              duration: 1500,
              image: "",
              mask: false,
              title: "选择成功!",
              icon:"none"

            })
          }
        }
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })

  }
  onchangeInput(e)
  {
    let _type = e.mp.currentTarget.dataset.type;
    this[_type] = e.mp.detail;
  }
  onclick_reset()
  {
    this.g.func.extendou(this.resetInput(),2000)
  }
  resetInput()
  {
    console.log("1")
    this.userName = "";
    this.idCard = null;
    this.bankCard = null;
  }
  onClickIcon()
  {

  }
  valid()
  {
      if((this.idCard+"").length != 18)
      {
        this.isValid = false
      }
      if(this.userName == "")
      {
        this.isValid = false
      }
  }

  onclick_saveInfo()
  {
    debugger;
    // wx.reLaunch({
    //   url:'../contractList/main'
    // })
    this.valid();
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
    let userId:string = "";
    let userType:string = "";
    let userInfo = this.g.data.userInfoPool;
      // if(userInfo.user.userId)
      // {
      //   userId = userInfo.user.userId;
      //   userType = userInfo.user.userType
      // }
      // else
      // {
      //   if(userInfo.org.userId)
      //   {
      //     userId = userInfo.org.userId;
      //     userType = userInfo.org.userType
      //   }
      //   else
      //   {
      //
      //   }
      // }
    if(this.userType =={})
    {
      wx.showToast({
        title:"请选择用户类型"
      })
      return;
    }


    let _params:any = {};
    _params.name = this.userName;
    _params.idNumber = this.idCard;
    _params.cardNo = this.bankCard;
    // @ts-ignore
    _params.userId = this.userType.userId;
    // @ts-ignore
    _params.userType = this.userType.userType;
    let netData:any = {};
    netData.service = "eSignService";
    netData.method  = "bank3Factors";
    netData.data = _params;
    this.g.func.call(netData).then(($data)=>
      {
      wx.switchTab({
        url:'../index/main'
      });
      // @ts-ignore
      mpvue.hideLoading()
    },$err=>
    {
      // @ts-ignore
      mpvue.hideLoading();
      this.g.func.dealErr($err);
    });


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
}


export default Index
