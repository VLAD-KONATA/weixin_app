// pages/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
        url: '../../images/hero1.jpg'
      },
      {
        url: '../../images/hero2.jpg'
      },
      {
        url: '../../images/hero3.jpg'
      },
      {
        url: '../../images/hero4.jpg'
      },
      {
        url: '../../images/hero5.jpg'
      }
    ],
    herolist: [{
        Id: 1,
        Img: '../../images/KDA1.jpg',
        Name: 'maka',
        Position: 'sing',
        Introduce: 'see what canyou see'
      },
      {
        Id: 2,
        Img: '../../images/see.jpg',
        Name: 'sewada',
        Position: 'base',
        Introduce: 'see what canyou see'
      },
      {
        Id: 3,
        Img: '../../images/dark.jpg',
        Name: 'judi',
        Position: 'pio',
        Introduce: 'see what canyou see'
      }
    ]
  },
  moreknow() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange(event) {
    wx.showToast({
      title: `切换到 ${event.detail.name + 1}页`,
      icon: 'none',
    });
  },
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