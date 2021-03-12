<template>
  <div class="counter-warp">
    <div class="title">个人体工商户认证</div>
    <div class="desc">千盟网络全程保障您的身份信息安全</div>
    <van-cell-group>
      <van-field
        :value="userName"
        required
        clearable
        label="姓名"
        icon="question-o"
        placeholder="请输入姓名"
        data-type="userName"
        maxlength="20"
        @input="onchangeInput"
        @click-icon="onClickIcon">
      </van-field>
      <van-field
        :value="idCard"
        label="身份证号"
        placeholder="请输入身份证号"
        required
        data-type="idCard"
        maxlength="18"
        @input="onchangeInput"
        border="false"></van-field>
      <van-field
        :value="email"
        label="邮箱"
        placeholder="请输入邮箱地址"
        required
        data-type="email"
        maxlength="30"
        @input="onchangeInput"
        border="false"></van-field>
      <van-field
        :value="bankCard"
        label="手机号"
        placeholder="请输入手机号"
        required
        data-type="bankCard"
        maxlength="19"
        @input="onchangeInput"
        border="false">
<!--        <ocr-navigator slot="button" style="z-index:999" @onSuccess="onClick_getCardNumber" certificateType="bankCard"  :selectedOptions="['number']">-->
          <van-button  slot="button"  @click="onclick_BackCard" id="blank" size="small" type="primary">发送验证码</van-button>
<!--        </ocr-navigator>-->
      </van-field>
      <van-field
        :value="pcode"
        label="验证码"
        placeholder="请输入验证码"
        required
        data-type="pcode"
        maxlength="30"
        @input="onchangeInput"
        border="false"></van-field>
    </van-cell-group>

<!--    <van-button class="info-btn" type="primary" size="large">提交</van-button>-->
    <button class="info-btn" @click="onclick_saveInfo">提交</button>
    <button class="reset-btn" @click="onclick_reset">重置</button>
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
    margin:60rpx 40rpx 15rpx;
  }

  .desc{
    font-size:30rpx;
     margin-left:40rpx;
    color:#ccc;
  }
  .ocr-wrapper {
    margin: 40rpx auto;
    width: 375rpx;
  }
  .intro {
    margin: 40rpx;
  }

  .counter-warp .van-cell{
    padding:40rpx 40rpx!important;
  }
  .info-btn{
    background:#232389;
    color:#ffffff;
    margin:25rpx 40rpx 20rpx;
  }
  .reset-btn{
    margin:0 40rpx;
    background:#fff;

  }
</style>
