// imports:
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// MIDDLEWARE
// this is a spot for features/functionality

// Set the 'public' folder as the location for our static files:
app.use(express.static('public'));

// Specify that we are using 'ejs' templates in our app:
app.set('view engine', 'ejs');

// allows collection of data submitted in HTML forms:
app.use(bodyParser.urlencoded({extended:true}));


// ROUTES

// default:
app.get('/', (req, res) => {
  res.render('default-layout', {
    title: "My Home Page",
    content: "<h1>Hello World from Express!</h1>"
  });
});

// host/some-route:
app.get('/some-route', (req, res) => {
  res.send('<h1>This is some route</h1>');
});

// example of a dynamic ROUTE:
app.get("/dynamic-page.html", (req, res) => {
  const currentTime = new Date();
  res.send(`<h1>The current time is: ${currentTime.toString()}</h1>`);
});

// signup:
app.get('/signup', (req, res) => {
  res.render('signup-layout', {
    title: "Sign Up"
  });
});

// signup confirmation:
app.post('/signup-confirmation', (req, res) => {
  res.send("Form data received: " + JSON.stringify(req.body));
});

// start the server:
const port = 8080;
const serveer = app.listen(port, () => {
  console.log("Waiting for requests on port %s", port);
});