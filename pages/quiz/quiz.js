// pages/quiz/quiz.js
const app = getApp()


Page({
  data: {
    userInfo: {},
    button: '确认',
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国'},
      {name: 'JPN', value: '日本'}
    ],
    quiz: {
      "q": "问题1：请问……？",
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    choice: '',
  },
  radioChange: function (e) {
    this.setData({
      choice : e.detail.value
    })
  },
  bindButtonConfirm: function () { //确认
    if (this.data.choice != '') {
      wx.showToast({
        title: '你选择了' + this.data.choice,
        icon: 'success',
        duration: 800,
        mask: true
      });
    } else {
      wx.showToast({
        title: '请选择你的答案',
        icon: 'cancel',
        duration: 800,
        mask: true
      });
    }
  },
  onLoad: function () { //载入后动作
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
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
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})