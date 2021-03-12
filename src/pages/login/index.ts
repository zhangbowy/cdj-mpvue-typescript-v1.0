import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件
const app = getApp();

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
  g: any;
  app = app;
  onShow() { // 小程序 hook
    debug('onShow');
    wx.showLoading({
      title:"用戶信息校验中．．．"
    });
    setTimeout(()=>
    {
      wx.hideLoading();
      // @ts-ignore
      // this.app.onLaunch()
    },1000)
  }
  // @ts-ignore
  get list()
  {


  }
  // @ts-ignore
  get userInfo()
  {

  }
  success()
  {

  }

  onclick_author()
  {
    // console.log('click事件首先触发')
    // console.log(wx.canIUse('button.open-type.getUserInfo'))
    if(wx.canIUse('button.open-type.getUserInfo')){
      // 用户版本可用
      // console.log('用户版本可用')
    }else{
      // console.log('请升级微信版本')
    }
  }

  onClick_GetUserInfo(e)
  {
    // console.log(e.mp.detail.rawData)
    if (e.mp.detail.rawData)
    {
      //用户按了允许授权按钮
      let userData = e.mp.detail;
      console.log('用户按了允许授权按钮');
      let that = this;
      Vue.prototype.globalData = e.mp.detail.userInfo;
      this.g.data.userInfoPool.update(e.mp.detail.userInfo);
      wx.login({
        success (res) {
          if (res.code)
          {
            let code = res.code;
            that.g.func.wxLogin(userData,code,true);
            // wx.showToast({
            //   title:"登录成功！",
            //   icon:"success",
            //   duration:1000
            // });
            // wx.reLaunch({
            //   url: '../signInfo/main'
            // })
          } else
          {
            console.log('登录失败！' + res.errMsg);
          }
        }
      })

    } else {
      //用户按了拒绝按钮
      console.log('用户按了拒绝按钮')
    }
  }

  mounted() { // vue hook
    debug('mounted');
    console.log(app);
  }
}
export default Index
