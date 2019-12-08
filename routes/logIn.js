var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

router.post('/dang-nhap', function (req, res, next) {

    var username_logIn = req.body.username_logIn;
    var password_logIn = req.body.password_logIn;

    var error = "";

    var query = "SELECT * FROM nguoidung WHERE TenDangNhap = '" + username_logIn + "' AND Password = '" + password_logIn + "'";
    connect_db.con.query(query, function (err, result, feilds) {
        if (err) throw err;

        if (result.length == 1) {
            req.session.username = result[0].TenDangNhap;
            req.session.level = result[0].Level;
            res.redirect('/');
        } else {
            error = "Tài khoản hoặc mật khẩu bị sai!";
            res.json({ error });
        }
    });
    
});

router.post('/dang-ky', function (req, res, next) {

    var username_signIn = req.body.username_signIn;
    var password_signIn = req.body.password_signIn;
    var rePassword_signIn = req.body.rePassword_signIn;

    var error = "";

    var query = "SELECT * FROM nguoidung WHERE TenDangNhap = '" + username_signIn + "'";
    connect_db.con.query(query, function (err, result, feilds) {
        if (err) throw err;

        if (result.length == 0) {            
            var queryInsertAccount = "INSERT INTO `nguoidung` (`MaNguoiDung`, `TenNguoiDung`, `TenDangNhap`, `Email`, `SDT`, `Password`, `Level`) VALUES (NULL, NULL, '" + username_signIn + "', NULL, NULL, '" + password_signIn + "', '1')";
            
            connect_db.con.query(queryInsertAccount, function (err1, result1) {
                if (err1) throw err1;
                req.session.username = username_signIn;
                req.session.level = 1;
                res.redirect('/');
            })
        } else {
            error = "Tên đăng nhập đã tồn tại";
            res.json({ error });
        }
    });

});

router.get('/dang-xuat', function (req, res, next) {

    req.session.username = undefined;
    req.session.level = undefined;
    res.redirect('/');
    res.json({ mes: "Log out" });

});

module.exports = router;
