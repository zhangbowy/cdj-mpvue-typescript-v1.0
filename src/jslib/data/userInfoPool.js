
export default  class UserInfoPool {

  constructor()
  {
      this.id = 0;
      this.loginName = "　";
      this.password = "　";
      this.name = "　";
      this.mobile = 0;
      this.email = "　";
      this.address = "　";
      this.idNumber = "　";
      this.avatarUrl = "　";
      this.nickName = "　";
      this.city = "　";
      this.province = "　";
      this.country = "　";
      this.unionId = "";
      this.openId = "";
      this.watermark = {};
      this.user = {};
      this.org = {};
      this.bankCardList = [];

  }
  update($Obj)
  {
      $Obj.hasOwnProperty("id") && (this.id = $Obj.id);
      $Obj.hasOwnProperty("loginName") && (this.loginName = $Obj.loginName);
      $Obj.hasOwnProperty("password") && (this.password = $Obj.password);
      $Obj.hasOwnProperty("name") && (this.name = $Obj.name);
      $Obj.hasOwnProperty("mobile") && (this.mobile = $Obj.mobile);
      $Obj.hasOwnProperty("email") && (this.email = $Obj.email);
      $Obj.hasOwnProperty("address") && (this.address = $Obj.address);
      $Obj.hasOwnProperty("idNumber") && (this.idNumber = $Obj.idNumber);
      $Obj.hasOwnProperty("avatarUrl") && (this.avatarUrl = $Obj.avatarUrl);
      $Obj.hasOwnProperty("nickName") && (this.nickName = $Obj.nickName);
      $Obj.hasOwnProperty("city") && (this.city = $Obj.city);
      $Obj.hasOwnProperty("province") && (this.province = $Obj.province);
      $Obj.hasOwnProperty("gender") && (this.sex = $Obj.gender?"男":"女");
      $Obj.hasOwnProperty("country") && (this.country = $Obj.country);
      $Obj.hasOwnProperty("unionId") && (this.unionId = $Obj.unionId);
      $Obj.hasOwnProperty("openId") && (this.openId = $Obj.openId);
      $Obj.hasOwnProperty("watermark") && (this.watermark = $Obj.watermark);
      $Obj.hasOwnProperty("user") && (this.user = $Obj.user);
      $Obj.hasOwnProperty("org") && (this.org = $Obj.org);
      $Obj.hasOwnProperty("bankCardList") && (this.bankCardList = $Obj.bankCardList);
  }
}
