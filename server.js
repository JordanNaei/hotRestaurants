const express = require("express");
const path = require("path");
const tData = require("./data/table");
const wData = require("./data/wait");






var app = express();
var PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var table = [];
var waitlist = [];

//Routes:

//  Navigate to static pages
app.get(`/tables`, function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get(`/reserve`, function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get(`/`, function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// get json object from server
app.get(`/api/tables`, function (req, res) {
    res.json(tData.customers);
});
app.get(`/api/waitlist`, function (req, res) {
    res.json(tData.waitList);
});

// Post API calls 
app.post("/api/tables", function (req, res) {
    var newClient = req.body;
    if (table.length < 5) {
        res.send(true);
        table.push(newClient);
    } else {
        response.send(false);
        waitlist.push(newClient);
    }
});


app.post("/api/clear", function(req, res) {
    table = [];
    waitlist= [];
  });

    // server listener:
    app.listen(PORT, function () {
        console.log("This server is listening to: " + PORT);
    });


