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

  onShow() { // 小程序 hook
    debug('onShow')
  }
  // @ts-ignore
  get list()
  {

  }

  // @ts-ignore
  get userInfo()
  {

  }
  onchangeInput(e)
  {
    let _type = e.mp.currentTarget.dataset.type;
    this[_type] = e.mp.detail;
  }
  onchangeInputb(e)
  {

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
      if((this.bankCard+"").length !=19)
      {
        this.isValid = false
      }
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
    debugger
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
    let _params:any = {};
    _params.userName = this.userName;
    _params.idCard = this.idCard;
    _params.bankCard = this.bankCard;
    console.log(_params);
    // this.g.net.call("getTopicByfgid").then(($data)=>{
      wx.switchTab({
        url:'../index/main'
      });
      // @ts-ignore
      mpvue.hideLoading()
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
}


export default Index
