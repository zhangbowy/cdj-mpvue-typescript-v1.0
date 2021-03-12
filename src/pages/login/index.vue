<template>
  <div class="login-warp">
    <div class="logo">
      <img class="logo-img" src="../../../static/images/wkd.jpg" alt="">
    </div>
    <div class="main-app">
      <div class="author-list">
        <div class="item">
          <div class="circle">1</div>
          <div class="cont">
           <div class="c-title">授权微信</div>
           <div class="desc">点击下方微信授权登录按钮</div>
          </div>
        </div>
        <div class="item">
          <div class="circle">2</div>
          <div class="cont">
            <div class="c-title">认证身份</div>
            <div class="desc">输入姓名、身份证号、银行卡号完成认证</div>
          </div>
        </div>
        <div class="item">
          <div class="circle">3</div>
          <div class="cont">
            <div class="c-title">签约合同</div>
            <div class="desc">确认合同后手写签名，验证手机完成签约</div>
          </div>
        </div>
      </div>
      <button class="author" open-type="getUserInfo" @getuserinfo="onClick_GetUserInfo" @click="onclick_author">微信授权登录</button>

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
  .title{
    font-size:40rpx;
  }
  .login-warp{
    .logo{
      height:500rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .logo-img{
        width:400rpx;
        height: 360rpx;

      }
    }
    .main-app{
        .author{
          background:#232389;
          color:#ffffff;
          margin:20rpx 40rpx 0;
        }
        .author-list{
          display: flex;
          flex-direction: column;
          .item{
            &:nth-child(3)
            {
              border-bottom:dashed 1px #fff;
            }
            display: flex;
            padding:45rpx 40rpx;
            border-bottom:dashed 1px #ccc;
            /*justify-content:center;*/
            align-items: center;
            .circle{
              width:50rpx;
              height:50rpx;
              border-radius: 50%;
              text-align: center;
              line-height: 50rpx;
              background: #232389;
              margin-right:25rpx;
              color:#fff;
            }
            .cont{
              .c-title{
                font-size: 35rpx;
                font-weight: bold;
                margin-bottom:10rpx;
              }
              .desc{
                font-size: 25rpx;
                color:#ccc;
              }
            }
          }
        }
    }
  }
</style>
