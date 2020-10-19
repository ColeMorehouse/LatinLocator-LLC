/*
const express = require("express");
const app = express();
const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_51HIgElI4yDgTbJ8QiMXHt5ILSVGjiyK1fhQE850hwZ29lGYryMQuQbvFUST9wgNOA1fTwjjaOqts605wUUv4yx4Z00WkI05i61");

app.use(express.static("."));
app.use(express.json());

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.listen(4242, ("0.0.0.0") => console.log('Node server listening on port 4242!'));
*/
/*
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/etc/ssl/latinlocator.com.key', 'utf8');
var certificate = fs.readFileSync('/etc/ssl/99908e9a57695da6.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here
const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("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");

app.use(express.static("."));
app.use(express.json());

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});



var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
*/
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('/etc/ssl/latinlocator.com.key', 'utf8');
var certificate = fs.readFileSync('/etc/ssl/99908e9a57695da6.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

const bodyParser = require('body-parser');
const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("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");

app.use(express.static("."));
app.use(express.json());

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });

  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

var first = "a";
var last = "b";
app.post('/example', (req, res) => {
  res.send(`<script>
    var obj =
    {
      email: "${req.body.fname}",
      amount: "${req.body.amount}"

    };
    var jString = JSON.stringify(obj);
    localStorage.setItem("key", jString);
    location.replace('checkout.html');
    </script>`);
  //res.send();
});



var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
