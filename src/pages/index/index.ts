import { Vue, Component } from 'vue-property-decorator'
import { AppUrls } from '@/utils/consts.ts'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件

const debug = require('debug')('log:Index');
const  app = getApp()
// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card,
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
  }
})
// @Component({
//   mpType: 'app', // mpvue特定
// } as any)
class Index extends Vue {
  AppUrls = AppUrls;
  ver: number = 123;
  test: string = "testDetail";
  private globalData: any;
  private g: any;

  wxInfo = {};
  salaryList = [];
  onShow() { // 小程序 hook
    debug('onShow');
    if(!this.g.data.userInfoPool.bankCardList)
    {
      // @ts-ignore
      app.onLaunch();
      debugger
    }
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

  }
  onclick_tip()
  {
    wx.showToast({
      icon:"none",
      title:"敬请期待!"
    })
  }
  mounted() {
    // vue hook
    // debug('mounted')
    this.wxInfo = this.g.data.userInfoPool;
    console.log(this.wxInfo);
    // @ts-ignore
    // mpvue.showToast({
    //   title:"success",
    // });
    // debugger;

    // this.g.net.call("").then(($data)=>{
    //     debugger
        // this.salaryList = $data.data;
    // });


  }
  onLoad()
  {

  }
  created()
  {

  }
}


export default Index
