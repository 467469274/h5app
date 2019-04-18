// import {getCookie, setCookie} from './cookies.js'
import axios from 'axios';
import qs from 'qs';
export function $ajax(url, data, call, err, methodsType) {
  const ajaxUrl = `http://39.105.229.26:8081${url}`
  console.log(ajaxUrl)
  data.token = 3
  if (methodsType == 'get') {
    axios.get(ajaxUrl, {
      params: data
    }).then(function (re) {
      call(re.data)
    }).catch(function (error) {
      err(error)
    })
  } else if (methodsType == 'put') {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key])
    }
    axios.put(ajaxUrl, formData).then(function (re) {
      call(re.data)
    }).catch(function (error) {
      err(error)
    })
  } else if (methodsType == 'DELETE') {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key])
    }
    axios.delete(ajaxUrl, {data: formData}).then((res)=>{call(res.data)}).catch((err)=>{})
  } else {
    let postData = qs.stringify(data)
    axios({
      method: methodsType,
      url: ajaxUrl,
      data: postData
    }).then(function (re) {
      call(re.data)
    }).catch(function (error) {
      err(error)
    })
  }

}

function parseQueryString() {
  var url = window.location.hash
  var json = {}
  var arr = url.substr(url.indexOf('?') + 1).split('&')
  arr.forEach(function (item) {
    var tmp = item.split('=')
    json[tmp[0]] = tmp[1]
  })
  return json
}
