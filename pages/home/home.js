// pages/home/home.js
Page({
  data: {
    lists: [
      {id: 1, text: "我今天干了什么，明天干什么，后天干了什么", finished: true},
      { id: 2, text: "后天噶什么，几天干甚了饿是卡号发给看书看发 ", finished: true },
      { id: 3, text: "我今天干了什么，明天干什么，后天干了什么", finished: false },
      { id: 4, text: "我今天干了什么，明天干什么，后天干了什么", finished: false },
      { id: 5, text: "我今天干了什么，明天干什么，后天干了什么", finished: false }
    ],
    visibleConfirm: false
  },
  confirm(event){
    
  },
  confirmCreate(event){
    let content = event.detail
    if(content){
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.hideConfirm()
    }
  },
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({ lists: this.data.lists })
  },
  hideConfirm(){
    this.setData({ visibleConfirm: false })
  },
  showConfirm(){
    this.setData({ visibleConfirm: true })
  }
})