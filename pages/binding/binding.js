const http = require('../../lib/http.js').http;

Page({
  data: {
    account: "",
    password_digest: "",
    isBinding: true
  },
  watchAccount(event){
    this.setData({ account: event.detail.value })
  },
  watchPassword(event){
    this.setData({ password_digest: event.detail.value })
  },
  submit(){
    http.post('/bindings',{
      account:this.data.account,
      password_digest: this.data.password_digest
    })
    .then(response => {
      wx.setStorageSync('me', response.data.resource)
    })
  },
  goToSignUp(){
    this.setData({ isBinding: false })
  },
  goToBinding(){
    this.setData({ isBinding: true })
  },
  onShow: function (options) {
    
  }
})