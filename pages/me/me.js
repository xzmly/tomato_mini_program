// pages/me/me.js
Page({
  data: {
    tab: "tomato",
    lists: {
      "本周四":[
        {time: "14:00", text: "阿含经开发你看看书法课", id: 1},
        { time: "14:00", text: "阿含经开发你看看书法课", id: 4 }
      ],
      "本周五": [{ time: "14:00", text: "阿含经开发你看看书法课", id: 2 }],
      "本周天": [{ time: "14:00", text: "阿含经开发你看看书法课", id: 3 }],
      "本周一": [{ time: "14:00", text: "阿含经开发你看看书法课", id: 3 }],
      "本周二": [{ time: "14:00", text: "阿含经开发你看看书法课", id: 3 }],
      "本周三": [{ time: "14:00", text: "阿含经开发你看看书法课", id: 3 }],
    }
  },
  onShow: function () {

  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({ tab: name })
  }
})