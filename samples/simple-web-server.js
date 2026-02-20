// import http module
const http=require('http');

// callback function whenever the app recieves an http requests
// req is the incoming http request; res is the response 
const app = http.createServer((req, res) =>{
  console.log("Handling request on server.....");
  res.end("Hello world!");
});

// listen starts the web server and listens for requests on port 8080
app.listen(8080);
console.log("Listening for requests on port 8080");