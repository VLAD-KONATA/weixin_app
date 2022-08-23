// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperList: [{
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.uKi7vGiTJnl3mFtjeAQBfQHaE8?w=287&h=191&c=7&r=0&o=5&dpr=1.25&pid=1.7'
      },
      {
        url: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.eEH4-v_ZY91gkmcTwfAGIAHaE7?w=284&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7'
      },
      {
        url: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.KBM3GlR8OyKnfrWNCqqBPwHaC7?w=314&h=138&c=7&r=0&o=5&dpr=1.25&pid=1.7'
      },
      {
        url: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.9K59vdglpayvk3BvheGNxQHaE2?w=252&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
      }
    ],
    herolist: [{
        Id: 1,
        Name: 'moris',
        Img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.3_xXv9G4qftQC9T1CUP_bgHaE8?w=245&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7',
        Position: 'NewYork queen street113',
        Introduce: 'see what can you see'
      },
      {
        Id: 2,
        Name: 'moris',
        Img: 'data:image/jpeg;base64,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',
        Position: 'NewYork queen street113',
        Introduce: 'see what can you see'
      }
    ],
    date: '1',
    show: false,
    pshow: false,
    active: 0,
    signNum: 0, //签到数
    signState: false, //签到状态
    min: 1, //默认值日期第一天1
    max: 7, //默认值日期最后一天7
    be: 0, //默认倍数
    list: [{
        "pagePath": "/pages/index/index",
        "text": "首页",
        iconPath: "home-o",
        selectedIconPath: "home"
      },
      {
        "pagePath": "/pages/first/first",
        "text": "科普",
        iconPath: "logistics-o",
        selectedIconPath: "first"
      }
    ],
    'bannerCurrentSwiper': 0,
    'imgHost': '', //用于存放图片的主机名前缀
    'searchVal': '', //搜索
    'doctorArr': []
  },
  onChange() {

  },
  //签到
  bindSignIn(e) {
    var that = this,
      num = e.currentTarget.dataset.num;
    num++
    wx.showToast({
      icon: 'success',
      title: '签到成功',
    })
    that.setData({
      signNum: num,
      //signState: true
    })

    var min = e.currentTarget.dataset.min,
      max = e.currentTarget.dataset.max,
      be = e.currentTarget.dataset.be;

    if (num % 7 == 0) {
      be += 1;
      that.setData({
        be: be
      })
    }

    if (num == 7 * be + 1) {
      that.setData({
        min: 7 * be + 1,
        max: 7 * be + 7
      })
    }

  },
  onDisplay() {
    this.setData({
      show: true
    });
  },
  onClose() {
    this.setData({
      show: false
    });
  },
  doctorto(){
    wx.navigateTo({
      url: '../reserve/reserve',
    })
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  showPopup() {
    this.setData({
      show: true
    });
  },
  //获取搜索输入框值
  getSearchVal: function (e) {
    this.setData({
      'searchVal': e.detail.value
    });
  },
  //点击搜索进行搜索操作
  searchFun: function (e) {
    wx.navigateTo({
      url: '../doctorList/doctorList?searchval=' + e.detail.value
    })
  },
  //轮播图滚动事件

  //跳转至预约页面
  click: function () {
    wx.request({
      method: 'GET',
      url: 'http://127.0.0.1:3000/getUser',
      // header:{
      //   'content-type':'application/json',
      // },
      // data: {
      //   "openid": "12"
      // },
      success: function (res) {
        console.log(res.data);
      },
      fail: function () {
        console.log("获取失败")
      }
    })
    wx.navigateTo({
      url: '../reserve/reserve',
    })
  },


  onLoad: function () {
    var that = this;
    wx.setNavigationBarTitle({
      title: '首页'
    });

    that.setData({
      'imgHost': app.globalData.apiConfig.imgHost
    })
  },
  goDoctorList: function () {
    wx.navigateTo({
      'url': '../doctorList/doctorList?type=' + 0
    })
  },
  goDoctorDetail: function (ev) {
    var id = ev.currentTarget.dataset.id;
    wx.navigateTo({
      'url': '../doctorDetail/doctorDetail?id=' + id
    })
  }
})