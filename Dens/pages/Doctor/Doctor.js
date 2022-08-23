// pages/Doctor/Doctor.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    biaoji: 0,
    url: ''
    //url2:'../image/'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(this.data.url)
    //this.sure()
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
    this.sure()
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

  sure: function(){
    var s = app.data.flag
    this.setData({
      biaoji: s
    })
    this.setData({
      url: app.data.image
    })
    //console.log(this.data.biaoji)
    console.log(this.data.url)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})