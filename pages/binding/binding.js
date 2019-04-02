const http = require('../../lib/http.js').http;

Page({
  data: {
    account: "",
    password_digest: "",
  },
  watchAccount(event){
    this.setData({ account: event.detail.value })
  },
  watchPassword(event){
    this.setData({ password_digest: event.detail.value })
  },
  submit(){
    http.post('/bindings',{
      account: this.data.account, 
      password_digest: this.data.password_digest
    })
    .then(response => {
      wx.setStorageSync('me', response.data.resource)
      wx.reLaunch({ url: "/pages/home/home" })
    })
  },
})