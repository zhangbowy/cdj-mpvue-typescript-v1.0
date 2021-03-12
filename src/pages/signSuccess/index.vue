<template>
  <div class="contract-warp">
     <div class="success-wrap">
       <img class="statusImg" src="../../../static/images/success.png" alt="">
       <div class="success-txt">
      认证成功
       </div>
       <van-cell-group>
       <van-cell border=false title="姓名" :value="authInfo.accountName"></van-cell>
       <van-cell border=false title="身份证号":value="authInfo.idNumber"></van-cell>
       <van-cell border=false title="银行卡号" :value="authInfo.accountCode"></van-cell>
       </van-cell-group>
       <van-cell class="lookDetail"></van-cell>
       <van-button type="info" size="large" @click="onclick_complete">返回</van-button>
     </div>
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
  .contract-warp{
    position: absolute;
    min-height: 100%;
    width:100%;
    background: #fff;
    .success-wrap{
      .van-cell:after{
        border-bottom:none!important;
      }

      .lookDetail{
        .van-cell{
          margin:40rpx 0!important;
        }
      }


      margin:100rpx 30rpx 0;
      .statusImg{
        width:250rpx;
        height:250rpx;
        margin:0 auto;
        text-align: center;
        display: block;
      }
      .success-txt{
        text-align: center;
        font-size:38rpx;
        font-weight: bold;
        margin-top:30rpx;
        margin-bottom:60rpx;
      }
    }
  }
</style>
