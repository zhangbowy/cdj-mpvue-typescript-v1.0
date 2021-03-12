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
  private globalData: any;
  private g: any;
  wxInfo = {};
  salaryList = [];
  detail = {};

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

  }
  success(e)
  {
  }
  mounted(e)
  { // vue hook
    // debug('mounted')
    var id  = this.g.func.getQuery().id;
    this.wxInfo = this.globalData;
    console.log(this.globalData);
    this.detail = this.g.data.salaryListPool.getDataById(id);
    // this.g.net.call("salaryList",{},"","mock").then(($data)=>
    // {
    //   for(var item of $data.data)
    //   {
    //     if(id == item.id)
    //     {
    //       this.detail = item;
    //     }
    //   }
    // })
  }
  onLoad()
  {

  }
  created()
  {

  }
}





export default Index
