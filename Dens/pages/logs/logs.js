// logs.js
const util = require('../../utils/util.js')
const app=getApp()

Page({
  data: {
    list:[],
    value:"",
    item:{
      id:'',
      from:'',
      avatar:'',
      nickname:'',
      type:0,
      content:''
    },
    logs: [],
    username:'',
    active:0,
    hasUserInfo:true,
    isLoading:true,
    noMore:false,
    currentPage:0,
    systemMessage:[],
    chatMessage:[],
  },
  onLoad(options) {
    app.globalData.loginPromise.then(()=>{
      console.log(app.globalData);
      if(app.globalData.isLogin){
        const userInfo = app.globalData.userInfo;
        console.log(this);
        this.username = userInfo.loginname;
        this.setData({
          username:this.username
        })
        this.groupId = "Web16"+options.id;
        this.nickname = userInfo.avatar;
        this.avatar = userInfo.avatar;
        this.connectSocket();
        this.onSocketOpen();
        this.onSocketMessage();
      }else{
        wx.reLaunch({
          url: 'url',
        })
      }
    })
  },
  connectSocket(){
    const url = 'ws://';
    wx.connectSocket({
      url,
    })
  },
  onSocketOpen(){
    wx.onSocketOpen((result) => {
      console.log("链接已经打开");
      this.setData({
        isLoading:false
      })
      this.getHistory()
      this.intervalled=setInterval(()=>{
        wx.sendSocketMessage({
          data: JSON.stringify({
            "cmd":13,
            "hbbyte":"-127"
          }),
        })
      },5000)
    })
  },
  onSocketMessage(){
    wx.onSocketMessage((result)=>{
      const data = JSON.parse(result.data)
      console.log(data)

      if(data.command==11){
        this.data.list.push(data.data)
        this.setData({
          list:this.data.list
        })
      }
      else if(data.command==20&&data.code==10018){
        this.setData({
          list:data.data.groups[this.groupId]
        })
      }
    })
  },
  getHistory(){
    const historyBody={
      cmd:19,
      type:1,
      groupId:this.groupId,
      userId:this.username
    }
    wx.sendSocketMessage({
      data: JSON.stringify(historyBody),
    })
  },
  sendSocketMsg(content,type){
    console.log(new Date().getTime())
    const msgBody = new Date()
  },
  sendImg() {

  },
  sendMsg() {

  },
  // onShow: async function() {
  //   this.setData({
  //     hasUserInfo:app.globalData.hasUserInfo
  //   })
  //   if(!this.data.hasUserInfo){
  //     wx.showToast({
  //       title:'您未登录'
  //     })
  //     setTimeout(function(){
  //       wx.switchTab({
  //         url: '../index/index',
  //         success:function(res){},
  //         fail:function(res){},
  //         complete:function(res){}
  //       })
  //     },1000)
  //   }
  //   await this.loadMessage(1)
  // },
  // onPullDownRefresh:async function(){
  //   if(!this.data.isLoading){
  //     await this.loadMessage(null)
  //   }
  // },
  loadMessage:async function(page){
    this.setData({
      isLoading:true
    })
    if(page != null){
      this.data.currentPage=page
      this.data.systemMessage=[]
      this.data.chatMessage=[]
    }else{
      this.data.currentPage++
    }
    const res = await server.request('GET','messages',{
      page:this.data.currentPage,
      size:10
    })
    this.setData({
      isLoading:false
    })
    if(res.statusCode!=200){
      this.setData({hasUserInfo:false})
      wx.showToast({
        title: '网络错误',
        icon:'',
        duration:0,
        mask:true,
        success:function(res){},
        fail:function(res){},
        complete:function(res){}
      })
      this.setData({noMore:true})
      return
    }
    if(!res.data.data||res.data.data.length==0){
      this.setData({noMore:true})
      this.data.currentPage--
      return
    }
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
})
