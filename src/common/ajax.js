// import {getCookie, setCookie} from './cookies.js'
import axios from 'axios'
export function $ajax (url, data, call, err, methodsType) { /*
  var token = '',
    header = {}
  try {
    token = JSON.parse(getCookie('userInfo')).token
    if (!token) {
      window.location = '/index'
      return
    } else {
      setCookie('token', token, 1)
    }
  } catch (err) {
  }
  // token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI2MTQyMjcxNEU2OEY0Q0IxQkNBMDhCMjBERDEzRUQzNyJ9.oW0XuSvy_0aPXgKk-7ufIjByPAtUqBw2Jz3CDQeXzX0'
  if (url != '/api/account/login') {
    header = {
      'x-access-token': token
    }
  }
  if (data.imgStr) {
    var formData = new FormData()
    formData.append('imgStr', data.imgStr)
    data = formData
  }
  axios({
    method: 'post',
    url: `http://www.absign.cn:8080${url}`,
    headers: header,
    data: data
  }).then(function (re) {
    if (re.data.msg == '用户登录过期') {
      window.location = '/#/login'
    } else {
      call(re.data)
    }
  }).catch(function (error) {
    err(error)
  }) */
  axios({
    method: methodsType || 'post',
    url: `http://39.97.187.181:8081${url}`,
    data: data
  }).then(function (re) {
    call(re.data)
  }).catch(function (error) {
    err(error)
  })
}

function parseQueryString () {
  var url = window.location.hash
  var json = {}
  var arr = url.substr(url.indexOf('?') + 1).split('&')
  arr.forEach(function (item) {
    var tmp = item.split('=')
    json[tmp[0]] = tmp[1]
  })
  return json
}
