<template>
  <div class="contract-warp">
    <div class="userInfo">
<!--      <img  class="avatar" :src="wxInfo.avatarUrl" alt="">-->
      <div class="avatar">
        姓名: {{detail.name}}
      </div>
      <div class="name">
        <div class="salaryTitle">
          ￥{{detail.amount}}
        </div>
        <div class="salarydesc">
<!--          {{detail.year}}年{{detail.month}}月薪资-->
          薪资
        </div>
      </div>
    </div>
    <div class="empty">
    </div>
    <div class="contract-list">

      <van-cell class="contract-item"
                title="状态"
                :value="detail.billStatus"
                center
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="开票日期"
                :value="detail.billDate"
                center
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="支付单号"
                :value="detail.paymentCode"
                center
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="收款单位名称"
                :value="detail.payCompanyName"
                center
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="付款期限"
                :value="detail.payLastTime"
                center
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="收款单位开户行"
                :value="detail.bankName"
                center
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="收款单位银行账号"
                :value="detail.bankAccount"
                center
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="开户名"
                :value="detail.bankAccountName"
                center
                size="large">
      </van-cell>
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
    background: #F0F0F0;
    .userInfo{
      background: #fff;
      /*width:100%;*/
      height:300rpx;
      display: flex;
      align-items: center;
      padding:10rpx 40rpx;
      .avatar {
        width: 156rpx;
        height: 156rpx;
        border-radius:50%;
        margin-right:30rpx;
        margin-left:30rpx;
        line-height:156rpx;
      }
      .name{
        flex:1;
      }
      .salaryTitle{
        font-size: 50rpx;
        text-align: center;
      }
      .salarydesc{
        text-align: center;
        font-size:30rpx;
        color:#ccc;
      }
    }
    .empty{
      width:100%;
      /*height: 35rpx;*/
      background: #F0F0F0;
    }
    .contract-list{
      /*margin-top:40rpx;*/
      margin:40rpx 25rpx 0;
      .contract-item{


      }
      .custom-class{
          background: #fff;
          margin-top:35rpx!important;
      }
      .van-cell__label{
          padding-top:40rpx!important;
      }
      .van-cell--large{
        padding:35rpx;
      }
      .van-cell__title{
        flex:none;
      }
    }
  }
</style>
