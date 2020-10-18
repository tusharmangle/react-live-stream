"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var PORT = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send("ok");
});
app.listen(PORT, function () {
    console.log("Listening on server \"http://localhost/" + PORT + "\"");
});
