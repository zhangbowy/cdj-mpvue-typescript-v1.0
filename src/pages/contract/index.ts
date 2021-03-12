import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue'
import {wxLogin} from "@/jslib/func"; // mpvue目前只支持的单文件组件
// const debug = require('debug')('log:Index');
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
  wxInfo = {};
  private globalData: any;
  private g:any;
  contractList:any =[];
  private mpvue: any;
  onShow() { // 小程序 hook
    // debug('onShow')
    // this.onPullDownRefresh();
    wx.startPullDownRefresh();
    this.wxInfo = this.g.data.userInfoPool;
    this.getContactList();
  }
  // @ts-ignore
  get list()
  {

  }
  // @ts-ignore
  get userInfo()
  {

  }
  onclick_BackCard()
  {

    wx.navigateTo({url:"plugin-private://wx4418e3e031e551be/components/formpage/form-page?certificateType=bankCard&opposite=true&selectedOptions=number"})
  }
  onPullDownRefresh()
  {
    wx.showLoading({
      title:"加载中"
    });

    setTimeout(()=>{
      this.getContactList();
      wx.stopPullDownRefresh();
    },1000)
  }
  onclick_getSignUrl($id)
  {
    // @ts-ignore
    wx.showLoading({
      title:"合同拼命加载中...",
      mask:true
    });

    let user = this.g.data.userInfoPool.user;
    let org = this.g.data.userInfoPool.org;
    let userId:string = "";
    if(user.userId)
    {
      userId = user.userId
    }
    else
    {
      if(org.userId)
      {
        userId = org.userId
      }
      else
      {

      }
    }
     var _params:any = {
       service : "eSignService",
       method : 'getSignUrl',
       data:{
        userId:userId,
        flowId:$id
       }
    };
      // @ts-ignore
    this.g.func.call(_params).then(($data)=>
    {
      let url = $data.url;
      this.globalData.flowUrl = url;
      setTimeout(()=>
      {
        wx.hideLoading();
        // @ts-ignore
        mpvue.navigateTo({
          url:`../contractPage/main?flowUrl=${url}`
        });
      },1000)
    },$err=>
    {
        this.g.func.dealErr($err)
    })
  }
  getContactList()
  {
    this.wxInfo = this.globalData;
    // debugger
    let _params:any = {};
    let user = this.g.data.userInfoPool.user;
    let org = this.g.data.userInfoPool.org;
    let userId:string = "";
    if(user.userId)
    {
        userId = user.userId
    }
    else
    {
      if(org.userId)
      {
        userId = org.userId
      }
      else
      {

      }
    }
    let _unionId = wx.getStorageSync("_unionid")?wx.getStorageSync("_unionid"):this.g.data.userInfoPool.unionId;
    _params.service = "eSignService";
    _params.method = "getSignFlowsByUnionId";
    _params.data = {unionId:_unionId};
    this.g.func.call(_params).then(($data)=>
    {
      this.contractList = $data.data;
      wx.hideLoading();
      if(this.contractList.length == 0)
      {
        wx.showToast({
          duration: 1000,
          icon: "none",
          mask: false,
          title: "空空如也!"
        })
      }
    },$err=>
    {
      wx.hideLoading();
      this.g.func.dealErr($err);
    });
  }
  mounted() { // vue hook
    // debugger
    this.getContactList()
    // wx.startPullDownRefresh()
  }
  onLoad()
  {

  }
  created()
  {

  }
}
export default Index
