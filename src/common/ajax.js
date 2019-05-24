import {getCookie, setCookie} from './cookies.js'
import axios from 'axios';
import qs from 'qs';
export function $ajax(url, data, call, err, methodsType) {
  const ajaxUrl = `http://39.105.229.26:8081${url}`
  const errFunction = function (data) {
    if(data.data.code == 1 && url!='/api/message/announcement' && url!='/api/message/message'){
      window.location.href = '/#/login';
    }else {
      err(data.data.msg)
    }
  };
  var tk = window.localStorage.token
  // var tk = '2';
  data.token = tk
  if (methodsType == 'get') {
    axios.get(ajaxUrl, {
      params: data
    }).then(function (re) {
      if(re.data.code ==0){
        call(re.data)
      }else{
        errFunction(re)
      }
    }).catch(function (error) {
    })
  } else if (methodsType == 'PUT') {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key])
    }
    axios.put(ajaxUrl, formData).then(function (re) {
      if(re.data.code ==0){
        call(re.data)
      }else{
        errFunction(re)
      }
    }).catch(function (error) {
    })
  }else if (methodsType == 'setProduct') {
    axios({
      method: 'PUT',
      url: ajaxUrl,
      data: data,
      headers:{
        token:tk,
        "contentType":'application/json'
      }
    }).then(function (re) {
      if(re.data.code ==0){
        call(re.data)
      }else{
        errFunction(re)
      }
    }).catch(function (error) {

    })
  } else if (methodsType == 'DELETE') {
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key])
    }
    axios.delete(ajaxUrl, {data: formData}).then((res) => {
      if(res.data.code ==0){
        call(res.data)
      }else{
        errFunction(res)
      }
    }).catch((err) => {
    })
  } else if(methodsType == 'post'){
    let postData = qs.stringify(data)
    axios({
      method: methodsType,
      url: ajaxUrl,
      data: postData
    }).then(function (re) {

      if(re.data.code ==0){
        call(re.data)
      }else{
        errFunction(re)
      }
    }).catch(function (error) {

    })
  }else if(methodsType == 'upload'){
    axios({
      method: 'post',
      url: ajaxUrl,
      data: data
    }).then(function (re) {
      if(re.data.code ==0){
        call(re.data)
      }else{
        errFunction(re)
      }
    }).catch(function (error) {

    })
  }else if(methodsType == 'upOrder'){
    axios({
      method: 'post',
      url:`${ajaxUrl}?token=${tk}` ,
      data: data,
    }).then(function (re) {
      if(re.data.code ==0){
        call(re.data)
      }else{
        errFunction(re)
      }
    }).catch(function (error) {

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
