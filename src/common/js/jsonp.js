import originJSONP from "jsonp"

export default function jsonp(url, data, option){   //data属于url后缀
  url += (url.indexOf('?')<0?'?':'&') + param(data)
  return new Promise((resolve, reject) => {
    console.log(url);
    originJSONP(url, option, (err,data) => {
      if(!err){
        resolve(data)
      }else{
        reject()
      }
    })
  })
}

function param(data){
  let url = ''
  for(var k in data){
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
