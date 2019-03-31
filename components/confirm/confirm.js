Component({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ""
    }
  },
  data: {
    _value: ""
  },
  lifetimes: {
    attached() {
      if (this.properties.value) {
        this.properties.value = this.data._value
      }
    }
  },
  methods: {
    confirm(){
      this.triggerEvent('confirm', this.data._value)
    },
    cancel(){
      this.triggerEvent('cancel', this.data._value)
    },
    watchValue(event){
      this.data._value = event.detail.value
    }
  }
})