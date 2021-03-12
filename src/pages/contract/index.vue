<template>
  <div class="contract-warp">
    <div class="userInfo">
      <img  class="avatar" :src="wxInfo.avatarUrl" alt="">
      <div class="name">
<!--        {{wxInfo.nickName}}(合同列表)-->
        {{wxInfo.nickName}}
      </div>
    </div>
    <div class="empty">
    </div>
    <div class="contract-list">
      <div class="empty" style="height: 150rpx;line-height: 150rpx;text-align: center" v-show="contractList.length==0">
        没有查询到合同,如网络错误,请下拉刷新...
      </div>
      <van-cell :class="item.flowStatus==1?'contract-item':'contract contract-list-active'"
                v-for="item in contractList"
                :key="i"
                title="共享经济合作伙伴协议"
                :value="item.flowStatus==1?'立即签约':'查看详情'"
                center
                is-link
                size="large"
                @click="onclick_getSignUrl(item.flowId)"
                :label="item.flowStatus==1?'未签约':'已签约'+'('+item.flowId+')'">
      </van-cell>



<!--      <van-cell class="contract-item"-->
<!--                v-for="item in 5"-->
<!--                :key="i"-->
<!--                title="1"-->
<!--                value="11111"-->
<!--                center-->
<!--                size="large"-->
<!--                @click="onclick_getSignUrl(1)"-->
<!--                >-->
<!--      </van-cell>-->
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
page{
  background: #000!important;
  min-height: 100%;
}
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
      height:220rpx;
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
    .contract-list-active {
      .van-cell__value{
        color:#000!important;
    }
      .van-cell__label{
        color:red!important;
      }
    }
    .contract-list{
      margin-bottom:35rpx;
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
        margin:35rpx 20rpx 0;
        border-radius:10rpx;
        width:auto;

      }
      .van-cell__title{
        flex:none;
      }
    }
  }
</style>
