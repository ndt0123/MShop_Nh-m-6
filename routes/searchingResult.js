var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('searchingResult.ejs');
});

router.get('/dien-thoai', function (req, res, next) {
    var hang = "";
    var gia = "";
    var sapXep = "";

    var account;
    var level;
    if (req.session.username) {
        account = req.session.username;
    }
    if (req.session.level) {
        level = req.session.level;
    }

    if (typeof req.query.hang != "undefined") {
        hang = req.query.hang;
    }

    if (typeof req.query.gia != "undefined" ) {
        gia = req.query.gia;
    }

    if (typeof req.query.sap_xep != "undefined") {
        sapXep = req.query.sap_xep;
    }

    console.log(sapXep);
    console.log(gia);
    console.log(hang);
    res.render('searchingResult.ejs', { sapXep, gia, hang, account, level });
});

router.get('/phu-kien', function (req, res, next) {
    var loai = "";
    var gia = "";
    var sapXep = "";

    var account;
    var level;
    if (req.session.username) {
        account = req.session.username;
    }
    if (req.session.level) {
        level = req.session.level;
    }

    if (typeof req.query.loai != "undefined") {
        loai = req.query.loai;
    }

    if (typeof req.query.gia != "undefined") {
        gia = req.query.gia;
    }

    if (typeof req.query.sap_xep != "undefined") {
        sapXep = req.query.sap_xep;
    }

    console.log(sapXep);
    console.log(gia);
    console.log(loai);
    res.render('searchingResult.ejs', { sapXep, gia, loai, account, level });
});

module.exports = router;
