const http = require('../../lib/http.js').http;

Page({
  data: {
    account: "",
    possword: "",
    isBinding: true
  },
  watchAccount(event){
    
  },
  watchPassword(event){

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