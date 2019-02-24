const app = getApp()
const host = app.globalData.host


const errors = {
  401: {
    action(){
      wx.setStorageSync('jwt', '')
      
    }
  }
}

const _http = (method,url,data)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      data,
      method,
      header: { Authorization: `Bearer ${wx.getStorageSync('jwt')}` },
      dataType: 'json',
      success: (response) => {
        let statusCode = response.statusCode
        if (statusCode >= 400){
          if (!!errors[statusCode]) { errors[statusCode].action() }
          reject({ statusCode, response })
        } else {
          resolve(response)
        }
      },
      fail: (errors) => {
        wx.showToast({ title: '请求失败', icon: 'none' })
        reject(errors)
      }
    })
  })
}

const http = {
  get: (url, params) => { _http('GET', url, params) },
  post: (url, data) => { _http('POST',url, data) },
  put: (url,data) => { _http('PUT',url, data) },
  delete: (url, data) => { _http('DELETE', url, data) }
}

module.exports = {
  http
}