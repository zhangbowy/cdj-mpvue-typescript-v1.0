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
  private globalData: any;
  private g: any;
  wxInfo = {};
  user:any = {};

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
  onclick_BackCard()
  {
    // let query = wx.createSelectorQuery();
    // let blankBtn = query.select("#blank");
    // query.exec(function (res) {
    //   debugger
    // })
    // debugger
  }

  onclick_bindPhone()
  {

    wx.navigateTo({url:"../../static/bindPhone/bindPhone"})
  }
  mounted(e)
  { // vue hook
    // debug('mounted')
    var id  = this.g.func.getQuery().id;
    this.user = this.g.data.userInfoPool;

    debugger
  }
  onLoad()
  {

  }
  created()
  {

  }
}


export default Index
