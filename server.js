"use strict";
exports.__esModule = true;
var loopback = require('loopback');
var express = require('express');
var boot = require('loopback-boot');
exports.app = loopback();
var bodyParser = require('body-parser');
exports.app.use('/public', express.static('./public'));
var path = require('path');
//IMPORT ROUTER
exports.app.use(bodyParser.urlencoded({
    extended: true
}));
exports.app.use(bodyParser.json());
exports.app.set('views', './views');
exports.app.set('view engine', 'pug');
//USER ROUTER
boot(exports.app, path.join(__dirname, '../server'), function () {
    exports.app.listen(process.env.PORT, function () {
        console.log("Server started \r\nlisten " + process.env.PORT);
    });
});
