import * as https from "https"

https.get('https://192.168.192.1', res => {
  console.log(res.statusCode)
}).on('error', e => {
  console.log(e)
})