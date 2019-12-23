var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var homeRouter = require('./routes/home');
var accessoriesRouter = require('./routes/accessories');
var phoneRouter = require('./routes/phone');
var logInRouter = require('./routes/logIn');
var productDetailRouter = require('./routes/productDetail');
var searchingResultRouter = require('./routes/searchingResult');
var shoppingRouter = require('./routes/shopping');
var shoppingCartRouter = require('./routes/shoppingCart');

var app = express();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/trang-chu', homeRouter);
app.use('/dien-thoai', phoneRouter);
app.use('/tai-khoan', logInRouter);
app.use('/phu-kien', accessoriesRouter);
app.use('/chi-tiet', productDetailRouter);
app.use('/tim-kiem', searchingResultRouter);
app.use('/mua-hang', shoppingRouter);
app.use('/gio-hang', shoppingCartRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
