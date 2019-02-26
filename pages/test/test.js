// pages/test/test.js
Page({
  xxx: 123,
  data: {
    message: "我是第一条信息",
    number: 1,
    condition: true,
    arr: [{
      id: 1,
      text: 1
    },
    {
      id: 2,
      text: 2
    },
      {
        id: 3,
        text: 3
      }
    ],
    propValue: 1,
    str: "我是一条信息",
    arr: [1,2,3,4],
    obj: {id: 1, text: "我是信息1"},
    xx: true
  },
  onLoad: function (options) {
    function fn(str) {
      var minutes = Math.floor(str / 60)
      var seconds = Math.floor(str % 60)
      if (seconds === 0) {
        seconds = "00"
      }
      if ((seconds + "").length === 1) {
        seconds = "0" + seconds
      }
      if ((minutes + "").length === 1) {
        minutes = "0" + minutes
      }
      console.log(`${minutes}:${seconds}`)
    }
  },
  changeColoe(){
    this.setData({ xx: !this.data.xx })
  },
  testClick(e){
    console.log(e)
  },
  pushItem(){
    // xxx push
    let last = this.data.arr[this.data.arr.length-1] + 1
    let newArr = [last]
    this.data.arr = newArr.concat(this.data.arr)
    this.setData({arr: this.data.arr})
  },
  changeObjText(){
    this.setData({ "obj.text": "我是信息2" })
  },
  reverseStr(){
    this.setData({ str: this.data.str.split('').reverse().join('') })
  },
  onReady: function () {

  },
  onShow: function () {
    
  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})