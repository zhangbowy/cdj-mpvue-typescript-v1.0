<template>
  <div class="contract-warp">
    <div class="userInfo">
<!--      <img  class="avatar" :src="wxInfo.avatarUrl" alt="">-->
      <div class="name">
        {{wxInfo.nickName}}
        工资单列表
      </div>
    </div>
    <div class="empty">

    </div>
    <div class="contract-list">
      <van-cell class="contract-item"
                v-for="item in salaryList"
                :key="item"
                :title="item.name"
                :value="item.amount + 'CNY('+(item.billStatus==1?'已生成结算单':'已生成支付单')+')'"
                is-link
                link-type="navigateTo"
                :url="'/pages/salaryDetail/main?id='+item.id"
                size="large"
                >
      </van-cell>
    </div>
  </div>
</template>
<!--必须指定为ts-->
<script lang="ts" src="./index.ts">
</script>

<style lang="less">
  @import "./index";
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
      width:100%;
      height:120rpx;
      display: flex;
      align-items: center;
      padding:10rpx 40rpx;
      .avatar{
        width:156rpx;
        height:156rpx;
        border-radius: 50%;
        margin-right:30rpx;
      }
    }
    .empty{
      width:100%;
      /*height: 35rpx;*/
      background: #F0F0F0;
    }
    .contract-list{
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
        /*margin-top:35rpx;*/
        margin:32rpx 25rpx;
        border-radius:15rpx;
        padding:37rpx 20rpx;
        width:auto;
      }
      .van-cell__value{
        width:220rpx!important;
        /*text-align: center;*/
      }
      .van-cell__title{
        flex: none;
      }
    }
  }
</style>
