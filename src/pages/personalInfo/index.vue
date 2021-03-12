<template>
  <div class="counter-warp">
    <div class="title-wrap">
      <div @click="onclick_tab('person')" :class="infoType=='person'?'title title-active':'title'">个人</div>
      <div class="line"></div>
      <div @click="onclick_tab('business')"  :class="infoType=='business'?'title title-active':'title'">个体工商户</div>
    </div>
    <div class="desc">财当加全程保障您的身份信息安全</div>
    <div class="personForm" v-if="infoType==='person'">
      <van-cell-group>
        <van-field
          :value="person.name"
          required
          clearable
          label="姓名"
          placeholder="请输入姓名"
          data-type="name"
          maxlength="20"
          @input="onchangeInput"
          @click-icon="onClickIcon">
        </van-field>
        <van-field
          :value="person.mobile"
          label="手机号"
          placeholder="请输入手机号"
          required
          data-type="mobile"
          maxlength="19"
          @input="onchangeInput"
          border="false">
          <van-button  slot="button"  class="upBtn" @click="onClick_sms" id="blank" size="small" type="primary" v-if="!isShowTime">获取验证码</van-button>
          <van-button  slot="button" style="color:#ccc"  class="upBtn" disable  id="blank" size="small" type="primary" v-if="isShowTime">{{timeNum}}秒后重新获取</van-button>
        </van-field>
                <van-field
                  :value="person.verifyCode"
                  label="验证码"
                  placeholder="请输入验证码"
                  required
                  data-type="verifyCode"
                  maxlength="30"
                  @input="onchangeInput"
                  border="false"></van-field>
        <van-field
          :value="person.idNumber"
          label="身份证号"
          placeholder="请输入身份证号"
          required
          data-type="idNumber"
          maxlength="18"
          @input="onchangeInput"
          border="false"></van-field>
        <van-field
          :value="person.cardNo"
          label="银行卡号"
          placeholder="请输入银行卡号"
          required
          data-type="cardNo"
          maxlength="19"
          @input="onchangeInput"
          border="false">
          <ocr-navigator slot="button" style="z-index:999" @onSuccess="onClick_getCardNumber" certificateType="bankCard"  :selectedOptions="['number']">
            <van-button  slot="button"  @click="onclick_BackCard" id="blank" size="small" class="upBtn" type="primary">拍照识别</van-button>
          </ocr-navigator>
        </van-field>
<!--        <van-field-->
<!--          :value="person.email"-->
<!--          label="邮箱"-->
<!--          placeholder="请输入邮箱地址"-->
<!--          data-type="email"-->
<!--          maxlength="30"-->
<!--          @input="onchangeInput"-->
<!--          border="false"></van-field>-->

<!--        <van-field-->
<!--          :value="pcode"-->
<!--          label="验证码"-->
<!--          placeholder="请输入验证码"-->
<!--          required-->
<!--          data-type="pcode"-->
<!--          maxlength="30"-->
<!--          @input="onchangeInput"-->
<!--          border="false"></van-field>-->
      </van-cell-group>

    </div>
    <div class="businessInfo" v-if="infoType==='business'">
      <van-cell-group>
        <van-field
          :value="name"
          required
          clearable
          label="工商户名称"
          icon="question-o"
          placeholder="请输入个体工商户名称"
          data-type="userName"
          maxlength="20"
          @input="onchangeInputb"
          @click-icon="onClickIcon">
        </van-field>
        <van-field
          :value="idNumber"
          label="企业证件号"
          placeholder="请输入企业证件号"
          required
          data-type="idCard"
          maxlength="18"
          @input="onchangeInputb"
          border="false"></van-field>
        <van-field
          :value="orgLegalName"
          label="法人姓名"
          placeholder="请输入法人姓名"
          required
          data-type="email"
          maxlength="30"
          @input="onchangeInputb"
          border="false"></van-field>
        <van-field
          :value="orgLegalIdNumber"
          label="法人身份证"
          placeholder="请输入法人身份证"
          required
          data-type="email"
          maxlength="30"
          @input="onchangeInputb"
          border="false"></van-field>
        <van-field
          :value="mobile"
          label="手机号"
          placeholder="请输入手机号"
          required
          data-type="bankCard"
          maxlength="19"
          @input="onchangeInputb"
          border="false">
          <!--        <ocr-navigator slot="button" style="z-index:999" @onSuccess="onClick_getCardNumber" certificateType="bankCard"  :selectedOptions="['number']">-->
<!--          <van-button  slot="button"  @click="onclick_BackCard" id="blank" size="small" type="primary">发送验证码</van-button>-->
          <!--        </ocr-navigator>-->
        </van-field>
<!--        <van-field-->
<!--          :value="pcode"-->
<!--          label="验证码"-->
<!--          placeholder="请输入验证码"-->
<!--          required-->
<!--          data-type="pcode"-->
<!--          maxlength="30"-->
<!--          @input="onchangeInput"-->
<!--          border="false"></van-field>-->
      </van-cell-group>

    </div>
<!--    <van-button class="info-btn" type="primary" size="large">提交</van-button>-->
    <button class="info-btn" @click="onclick_saveInfo">提交</button>
<!--    <button class="reset-btn" @click="onclick_reset">重置</button>-->

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
  .title-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:80rpx;
    height:60rpx;

    .line{
      height: 100%;
      width:2px;
      background: #000;
      border-radius: 6rpx;
    }
  }
  .title{
    font-size: 40rpx;
    margin:0rpx 40rpx 15rpx;
    color:#cccccc;
  }
  .title-active{
    font-size:50rpx;
    font-weight: bold;
    color:#000;
  }
  .desc{
    font-size:30rpx;
    color:#ccc;
    text-align: center;
    margin: 40rpx 0;
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
  .upBtn .van-button{
    background:#232389!important;
    border-color:#232389!important ;
    color:#fff!important;
  }
</style>
