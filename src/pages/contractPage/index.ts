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
  private g:any;
  flowUrl:string = "";
  onShow() { // 小程序 hook
    debug('onShow');
    debugger
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
      // debugger
  }

  mounted() { // vue hook
    // debug('mounted')
    // @ts-ignore
    var params = this.g.func.getQuery();
    let flowUrl = params.flowUrl;
    this.flowUrl = this.globalData.flowUrl;
  }
  onLoad()
  {
    debugger;
    let that = this;
    wx.getSystemInfo({
        success:(res: wx.SystemInfo)=>{
          // debugger
          that.windowHeights = res.windowHeight-120;
        }
      }
    )
  }
  onUnload() {
    var that = this
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    debugger

  }
  created()
  {

  }
}


export default Index
