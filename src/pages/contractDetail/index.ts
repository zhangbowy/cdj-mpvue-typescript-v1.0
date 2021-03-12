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
  windowHeights:number = 1000;
  private globalData: any;
  indicatorDots = true
  autoplay = true
  interval =  3000
  duration =  500
  images =  [
    {
      url:
        "https://img-oss.yunshanmeicai.com/goods/default/31d8dfa4-0d7b-4694-80f9-41b07c9d0a3a.png"
    },
    {
      url:
        "https://img-oss.yunshanmeicai.com/goods/default/e83c8f0f-4acc-4729-bcbb-294f2b314977.jpg"
    },
    {
      url:
        "https://img-oss.yunshanmeicai.com/goods/default/31d8dfa4-0d7b-4694-80f9-41b07c9d0a3a.png"
    },
    {
      url:
        "https://img-oss.yunshanmeicai.com/goods/default/e83c8f0f-4acc-4729-bcbb-294f2b314977.jpg"
    },
    ]

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
  onclick_saveInfo()
  {
    wx.navigateTo({
      url:"../../static/signature/signature"
    })
  }

  onclick_BackCard()
  {
    // let query = wx.createSelectorQuery();
    // let blankBtn = query.select("#blank");
    // query.exec(function (res) {
    //   debugger
    // })
    // debugger
    wx.navigateTo({url:"plugin-private://wx4418e3e031e551be/components/formpage/form-page?certificateType=bankCard&opposite=true&selectedOptions=number"})
  }
  success(e)
  {
      debugger
  }
  mounted() { // vue hook
    // debug('mounted')
    // @ts-ignore

  }
  onLoad()
  {
    let that = this;
    wx.getSystemInfo({
        success:(res: wx.SystemInfo)=>{
          debugger
          that.windowHeights = res.windowHeight-120;
        }
      }
    )
  }
  created()
  {

  }
}


export default Index
