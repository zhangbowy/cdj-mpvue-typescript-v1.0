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
  wxInfo = {};
  private g:any;
  private globalData: any;
  authInfo:any = {};

  onShow() { // 小程序 hook
    debug('onShow');
    let authInfo =  this.g.data.userInfoPool.bankCardList[0];
    authInfo.idNumber =  authInfo.idNumber.replace(/^(.{6})(?:\d+)(.{4})$/,"$1********$2");
    let cardLen =  authInfo.accountCode.length-8;
    let _start = Math.ceil(cardLen/2);
    let _endc = cardLen - _start;
    let reg = `/^(.{${_start}})(?:\\d+)(.{${_endc}})$/`;
    authInfo.accountCode =  authInfo.accountCode.replace(/^(.{4})(?:\d+)(.{4})$/,"$1********$2");

    this.authInfo = authInfo;
  }
  // @ts-ignore
  get list()
  {

  }
  // @ts-ignore
  get userInfo()
  {

  }
  onclick_complete()
  {
    debugger;
    wx.reLaunch({
      url:"../index/main"
    })
  }
  onclick_contractDetail()
  {
    wx.navigateTo({
      url:"../contractDetail/main"
    })
  }



  mounted() { // vue hook
    // debug('mounted')
    this.wxInfo = this.globalData;
    debugger
    console.log(this.globalData);
  }
  onLoad()
  {

  }
  created()
  {

  }
}


export default Index
