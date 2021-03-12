import {Component, Vue} from 'vue-property-decorator'
const debug = require('debug')('log:App');

declare module "vue/types/vue" {
  interface Vue {
    $mp: any;
    test:any
  }
}
// 必须使用装饰器的方式来指定components
@Component({
  mpType: 'app', // mpvue特定

} as any)
class App extends Vue {
  private vue: any;
  private g:any;
  // app hook
  private mpvue:any;
  onLaunch() {
    // let opt = this.$root.$mp.appOptions;
    // debug('onLaunch', opt);
    // Api.login().then(res => {
    //   debug('login', res);
    //   console.log(Api,"--------------------")
    // })
      this.init();
    // this.init()
  }
  init(){
    //每次打开小程序的判断逻辑
    //1、判断是否登录
    //否-跳登录授权页,
    //是-跳身份认证页
    //2、判断是否认证，
    // 是认证了跳首页，
    // 否没认证跳认证页面
    let Othis = this;
    wx.getSetting({
      success: function(res)
      {
        if (res.authSetting['scope.userInfo'])
        {
          wx.getUserInfo({

            success: function(res)
            {
                console.log(this,"this");
                //把个人信息更新至userinfo池
                Othis.g.data.userInfoPool.update(res.userInfo);
                Vue.prototype.globalData = res.userInfo;
                console.log('用户已经授权过');
                // debugger;
                wx.login({
                  success($code) {
                    if ($code.code) {
                      Othis.g.func.wxLogin(res,$code.code,true)
                    }
                  }
                })
              // Othis.g.net.call("/").then(($data)=>
              // {
              //   if(0)
              //   {
              //     wx.reLaunch({
              //       url:"../signInfo/main"
              //     });
              //   }
              // })

            }
          })
        }
        else
        {
          console.log('授权过期');
          wx.showToast({
            title:"授权过期",
            icon:"none"
          });
          wx.reLaunch({
            url:"../login/main"
          });
        }
      }
    })
  }
  mounted()
  { // vue hook
    debug('mounted');
    this.init()
    // let _params:object = {
    //   "service" : "eSignService",
    //   "method":"createPersonAccount",
    //   "data": {
    //     "userId" : "",
    //     "name":"测试用户",
    //     "mobile":"13912989821",
    //     "email":"abcd@163.com",
    //     "idType":"",
    //     "idNumber":"62270013767500*****",
    //   }
    // };
    // this.g.func.call(_params).then(($data)=>
    // {
    //
    // },$err=>
    // {
    //   this.g.func.dealErr($err);
    // })
    // this.getSetting()
  }
  onShow()
  {
    debug('onShow')
  }

  onHide()
  {
    debug('onHide')
  }

  created()
  {

    // this.init()
  }
}

export default App
