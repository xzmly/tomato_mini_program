// pages/me/me.js
const { http } = require('../../lib/http.js');

Page({
  data: {
    tab: "tomato",
    tomatoes: {},
    todos: {}
  },
  onShow: function () {
    this.fetchTomatoes()
    this.fetchTodos()
  },
  fetchTomatoes(){
    http.get('/tomatoes', { is_group: "yes" })
    .then(response => {
      this.setData({ tomatoes: response.data.resources })
    })
  },
  fetchTodos(){
    http.get('/todos', { is_group: "yes" })
    .then(response => {
      this.setData({ todos: response.data.resources })
    })
  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({ tab: name })
  }
})