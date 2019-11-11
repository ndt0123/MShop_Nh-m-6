var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');


/* GET home page. */

router.get('/', function (req, res, next) {
    var error = ""
    res.render('logIn.ejs', { error });
});

router.post('/login', function (req, res, next) {

    var username_logIn = req.body.username_logIn;
    var password_logIn = req.body.password_logIn;

    console.log(username_logIn);
    console.log(password_logIn);

    var error = "";

    if (username_logIn && password_logIn) {
        var query = "SELECT * FROM nguoidung WHERE TenDangNhap = '" + username_logIn + "' AND Password = '" + password_logIn + "'";
        console.log(query);
        connect_db.con.query(query, function (err, result, feilds) {
            if (err) throw err;


            if (result.length == 1) {
                req.session.username = result[0].TenDangNhap;
                req.session.level = result[0].Level;
                res.redirect('/');
            } else {
                error = "Tài khoản hoặc mật khẩu bị sai!";
                res.render('logIn.ejs', { error });
                
            }

        });

    } else {
        error = "Bạn cần nhập tài khoản, mật khẩu!";
        res.render('logIn.ejs', { error });
    }

    
});

module.exports = router;
