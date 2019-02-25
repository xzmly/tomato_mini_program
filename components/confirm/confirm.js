Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    }
  },
  data: {
    value: ""
  },
  methods: {
    confirm(){
      this.triggerEvent('confirm', this.data.value)
    },
    cancel(){
      this.triggerEvent('cancel', this.data.value)
    },
    watchValue(event){
      this.data.value = event.detail.value
    }
  }
})