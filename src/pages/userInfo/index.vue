<template>
  <div class="contract-warp">

    <div class="empty">

    </div>
    <div class="contract-list">

      <van-cell class="contract-item"
                title="用户名"
                :value="user.nickName"
                is-link
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="姓名"
                is-link
                :value="user.name"
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="身份证号"
                is-link
                :value="user.idNumber"
                right
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="手机号"
                is-link
                :value="user.mobile"
                @click="onclick_bindPhone"
                size="large">
      </van-cell>
      <van-cell class="contract-item"
                title="邮箱地址"
                is-link
                :value="user.email"
                size="large">
      </van-cell>

      <van-cell class="contract-item"
                title="联系地址"
                is-link
                center
                value=""
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
      height:220rpx;
      display: flex;
      align-items: center;
      padding:10rpx 40rpx;
      .avatar {
        width: 156rpx;
        height: 156rpx;
        border-radius:50%;
        margin-right:30rpx;
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
