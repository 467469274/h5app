// import {getCookie, setCookie} from './cookies.js'
import axios from 'axios';
export function $ajax (url, data, call, err, methodsType) {
  if(methodsType  == 'get'){
    axios.get(`http://39.105.229.26:8081${url}`, {
      params: data
    }).then(function (re) {
      call(re.data)
    }).catch(function (error) {
      err(error)
    })
  }else{
    axios({
      method:'post',
      url: `http://39.105.229.26:8081${url}`,
      data: data
    }).then(function (re) {
      call(re.data)
    }).catch(function (error) {
      err(error)
    })
  }

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
