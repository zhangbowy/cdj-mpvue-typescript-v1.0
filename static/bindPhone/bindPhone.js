var app = getApp();
var g = app.globalData.g;
var _isValid = false;
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tel: "",
		code: "",
		errTel: "",
		errCode: "",
		timeNum: 0,
		isShowTime: false,
		// bgUrl: g.config.url.staticUrl + "/images/aboutbg.png",
		bgUrl: "",
	},
	onClick_sendMsg()
	{
		var reg =/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(19[0-9]{1})|(16[0-9]{1}))+\d{8})$/;
		if(!reg.test(this.data.tel))
		{
			wx.showToast({
				title: '手机号有误！',
				icon: 'none',
				duration: 1500

			})
			this.setData({
				errTel: "请输入正确的手机号"
			})
			return;
		}
		g.net.call("user/sendCaptcha", {
			telephone: this.data.tel
		}).then(() => {
			wx.showToast({
				title: "发送成功!",
				icon: 'none',
				duration: 1500
			})
			var _time = g.config.param.repeatCodeTime;//应该写到配置里
			this.setData({
				timeNum: _time,
				isShowTime: true
			});
			//验证码倒计时
			var codeTime = setInterval(() => {
				_time--;
				if (_time == 0)
				{
					clearInterval(codeTime);
					this.setData({
						isShowTime: false
					})
					_time = g.config.param.repeatCodeTime;
				}
				this.setData({
					timeNum: _time
				})
			}, 1000)
		},$err =>{
			wx.showToast({
				title: $err.errorMsg,
				icon: 'none',
				duration: 1500

			})
		})

	},
	onClick_sure()
	{
		this.checkVaild();//表单验证是否符合规则
		console.log(_isValid);
		if (_isValid)   //不符合，拜拜了您哪~
		{
			_isValid = false;
			wx.showToast({
				title: '有数据未填写',
				icon: 'none',
				duration: 2000
			})
			return;
		}
		//符合，那就提交验证
		var _params = {};
		_params.telephone = this.data.tel;
		_params.captcha = this.data.code;
		g.net.call("user/bindPhone", _params).then(() => {
			wx.navigateBack({
				success: function () {
					wx.showToast({
						title: '绑定成功',
						icon: 'none',
						duration: 2000
					})
				}
			});
			this.updateUserInfo(this.data.tel)
		}, $err => {
			g.func.dealErr($err);
		})

	},
	updateUserInfo($tel)
	{
		g.data.userInfoPool.update({telephone:$tel});
	},
	onClick_toBindEmail()
	{
// 		wx.navigateTo({
// 			url: '../bindEmail/bindEmail',
// 			success: function () {
// 			},
// 		})
	},
	//拿输入的手机号
	bindTelInput(e)
	{
		this.setData({
			tel: e.detail.value
		})
	},
	//拿输入的验证码
	bindCodeInput(e)
	{
		this.setData({
			code: e.detail.value
		})
	},
	//聚焦清空errData
	onfocus_tel(e)
	{
		var $err = e.currentTarget.dataset.err;
		if ($err == "errTel")
		{
			this.setData({
				errTel: ""
			})
		}
		if ($err == "errCode")
		{
			this.setData({
				errCode: ""
			})
		}

	},
	//失焦验证规则
	onBLur_tel(e)
	{
		var $type = e.currentTarget.dataset.type;
		if ($type == "tel")
		{
			if (this.data.tel.length == 0)
			{
				this.setData({
					errTel: "请输入手机号"
				})
			}
			if (this.data.tel.length < 11 && this.data.tel.length > 0)
			{
				this.setData({
					errTel: "请输入正确的手机号"
				})
			}
		}
		if ($type == "code")
		{
			if (this.data.code.length == 0)
			{
				this.setData({
					errCode: "请输入验证码"
				})
			}
		}
	},
	//点击提交的时候验证规则
	checkVaild()
	{
		if (this.data.tel.length < 11)
		{
			this.setData({
				errTel: "请输入正确的手机号"
			})
			if (this.data.tel.length == "")
			{
				this.setData({
					errTel: "请输入手机号"
				})
			}
			_isValid = true;
		}
		if (this.data.code.length == 0)
		{
			this.setData({
				errCode: "请输入验证码"
			})
			_isValid = true;
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})
