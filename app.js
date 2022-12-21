var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
const router = require('./routes');

app.use(logger('dev'));   // use logger
app.use(express.json());  // use express JSON parser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* CORS: This part is for  */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, sentry-trace, baggage"
    );
    res.header("Access-Control-Allow-Credentials", true)
    next();
});

app.use('/', router);  // import routes (mount all routes to root '/')

module.exports = app;
