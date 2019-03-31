// pages/home/home.js
const {http} = require('../../lib/http.js');

Page({
  updateId: '',
  updatIndex: '',
  data: {
    lists: [],
    visibleCreateConfirm: false,
    visibleUpdateConfirm: false,
    updateContent: "",
    animationData: {}
  },
  onShow(){
    http.get('/todos?completed=false').then(response=>{
      this.setData({ lists: response.data.resources })
    })
  },
  confirmCreate(event){
    let content = event.detail
    console.log(content)
    if (content) {
      http.post('/todos',{
          completed: false, description: content
      })
      .then(response => {
        let todo = [response.data.resource]
        this.data.lists = todo.concat(this.data.lists)
        this.setData({ lists: this.data.lists })
        this.hideCreateConfirm()
      })
    }
  },
  changeText(event){
    let {content,id,index} = event.currentTarget.dataset
    this.updateId = id
    this.updatIndex = index
    this.setData({ visibleUpdateConfirm: true, updateContent: content})
  },
  confirmUpdate(event){
    let content = event.detail
    http.put(`/todos/${this.updateId}`, {
      description: content
    })
    .then(response => {
      let todo = response.data.resource
      this.data.lists[this.updatIndex] = todo
      this.setData({ lists: this.data.lists })
      this.hideUpdateConfirm()
    })
  },
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    let id = event.currentTarget.dataset.id
    http.put(`/todos/${id}`,{
      completed: true
    })
    .then(response => {
      let todo = response.data.resource
      this.data.lists[index] = todo
      this.setData({ lists: this.data.lists })
    })
  },
  hideCreateConfirm(){
    this.setData({ visibleCreateConfirm: false })
  },
  showCreateConfirm(){
    this.setData({ visibleCreateConfirm: true })
  },
  hideUpdateConfirm(){
    this.setData({ visibleUpdateConfirm: false })
  }
})