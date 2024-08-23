var http = require('http');
var fs = require('fs')
var url = require('url')

http.createServer((req, res) => {
   let actualUrl = url.parse(req.url,true)
   
   let file = 'index';
   
   console.log(actualUrl.pathname)
   switch(actualUrl.pathname) {
      case '/':
         file = 'index';
         break
      case '/about':
         file = 'about'
         break
      case '/contact-me':
         file = 'contact-me'
         break
      default:
         file = '404'
         break;
   }
   
   fs.readFile('./views/' + file + '.html' ,(err, data) => {
      if (err) {
         res.writeHead(404, {'Content-Type': 'text/html'})
         return res.end("404 not found")
      }
      else {
         res.writeHead(200, {'Content-Type': 'text/html'})
         res.write(data)
         return res.end()
      }
   })
}).listen(8080)
