<template>
  <div >
    <web-view :src="flowUrl"></web-view>
<!--    <web-view src="http://www.wangyu18.cn/callBack.html">1111</web-view>-->

  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts">
</script>

<style lang="less">
  @import "./index";

  /*.counter-warp {*/
  /*  text-align: center;*/
  /*  margin-top: 100px;*/
  /*}*/

  .home {
    display: block;
    margin: 10px auto;
    padding: 5px 10px;
    color: blue;
    border: 1px solid blue;
  }
  .detail-warp{
    position: absolute;
    min-height: 100%;
    width:100%;
    /*background: #F0F0F0;*/
    .detail{
      padding:25rpx 30rpx;
      box-shadow:0px 3px 10px 0px rgba(152, 152, 152, 0.35);
      margin-bottom:10px;
    }
    .btn-wrap{
      display: flex;
      justify-content: center;
      margin-top:30rpx;
      bottom-top:1px solid #ccc;
      button{
        width:220rpx;
        height:70rpx;
        line-height: 70rpx;
      }
      .sign-btn{
        background: deeppink;
      }
      .save-btn{
          background: #fff;
      }
    }


  }
  .swiper {
    /*height: 600rpx !important;*/
  }
  image {
    height: 100%;
    width: 100%;
  }
</style>
