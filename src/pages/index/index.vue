<template>
  <div class="contract-warp">
    <div class="userInfo">
      <img  class="avatar" :src="wxInfo.avatarUrl" alt="">
      <div class="name">
        {{wxInfo.nickName}}
      </div>
    </div>
    <div class="empty">

    </div>
    <div class="contract-list">
      <van-cell class="contract-item"
                title="实名认证"
                is-link
                center
                link-type="navigateTo"
                url="/pages/signSuccess/main?id="
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="我的合同"
                is-link
                center
                link-type="navigateTo"
                size="large"
                url="/pages/contract/main">
      </van-cell>
      <van-cell class="contract-item"
                title="任务记录"
                is-link
                center
                link-type="navigateTo"
                @click="onclick_tip"
                size="large">
        <!--        url="/pages/salaryDetail/main?id="-->
      </van-cell>
      <van-cell class="contract-item"
                title="我的收入"
                is-link
                center
                link-type="navigateTo"
                @click="onclick_tip"
                size="large">
        <!--        url="/pages/salaryDetail/main?id="-->
      </van-cell>
<!--      <van-cell class="contract-item"-->
<!--                title="工资条"-->
<!--                is-link-->
<!--                center-->
<!--                link-type="navigateTo"-->
<!--                url="/pages/salary/main"-->
<!--                size="large"-->
<!--                >-->
<!--      </van-cell>-->

<!--      <van-cell class="contract-item"-->
<!--                title="个人资料"-->
<!--                is-link-->
<!--                center-->
<!--                link-type="navigateTo"-->
<!--                url="/pages/userInfo/main"-->
<!--                size="large">-->
<!--      </van-cell>-->

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
      /*width:100%;*/
      height:300rpx;
      display: flex;
      align-items: center;
      padding:10rpx 40rpx;
      margin:20rpx;
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
      margin:20rpx 20rpx;
      border-radius: 30rpx;
      overflow: hidden;
      .contract-item{

      }
      .custom-class{
          background: #fff;
          /*margin-top:35rpx!important;*/
      }
      .van-cell__label{
          /*padding-top:40rpx!important;*/
      }
      .van-cell--large{
        /*margin-top:35rpx;*/
        padding:40rpx 30rpx;
      }
      .van-cell__title{
        /*flex:none;*/
      }
    }
  }
</style>
