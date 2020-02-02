#!/usr/bin/env nodejs
var http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html', 'Comes-From': 'Furkan Ozbek NGINX'});
 var url = req.url;
 console.log(url);
 res.write(url);
 res.write("<br>");
 res.write("<h3>Commit from Mac</h3>")
 res.write("<a href='http://node.furkanozbek.com/app'>Home Page</a>  -  ")
 res.write("<a href='http://node.furkanozbek.com/app/contact'>Contact Page</a>  -  ");
 res.write("<a href='http://node.furkanozbek.com/app/about'>About Page</a>")

 if(url ==='/app/about'){
    res.write('<h1>Abdullah Furkan Ozbek<h1>'); //write a response
    res.end(); //end the response
 }else if(url ==='/app/contact'){
    res.write('<div><h1>Contact Page </h1><a href="mailto:furkanozbek1995@gmail.com">Send Mail To Me</a></div>'); //write a response
    res.end(); //end the response
 }else{
    res.write('<h1>Hello World!</h1>'); //write a response
    res.end(); //end the response
 }
}).listen(8080, 'localhost');
console.log('Server running at http://localhost:8080/');
