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
  mounted() { // vue hook
    // debug('mounted')
    this.wxInfo = this.globalData;
    console.log(this.globalData);
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
    // @ts-ignore
    mpvue.showToast({
      title:"success",
    });
    let _params:any = {};
    _params.service = "userService";
    _params.method = "querySalary";
    _params.data = {
      userId:userId,
      userType:"1",
      pageNum:1,
      pageSize:10
    };
    this.g.func.call(_params).then(($data)=>
    {
        this.g.data.salaryListPool.update($data.salarys);
        this.salaryList = this.g.data.salaryListPool.list;
        debugger
    })


    // this.g.net.call("salaryList",{},"","mock").then(($data)=>
    // {
    //   this.salaryList = $data.data;
    // },$err=>
    // {
    //   this.g.func.dealErr($err);
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
