var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.get('/', function (req, res, next) {

    var phones = [];
    var morePhoneNumber;
    var pageNumber;

    var account;
    var level;
    if (req.session.username) {
        account = req.session.username;
    }
    if (req.session.level) {
        level = req.session.level;
    }

    var queryPhone = "SELECT * FROM dienthoai INNER JOIN hinhanhdienthoai ON dienthoai.MaDienThoai=hinhanhdienthoai.MaDT GROUP BY dienthoai.MaDienThoai ORDER BY dienthoai.MaDienThoai DESC";
    connect_db.con.query(queryPhone, function (err, result, feilds) {
        if (err) throw err;

        for (var i = 0; i < 12; i++) {

            phones.push({
                id: result[i].MaDienThoai, hang: result[i].Hang, ten: result[i].TenDienThoai,
                giaBan: result[i].GiaBan, giaGoc: result[i].KhuyenMai + result[i].GiaBan,
                hinhAnh: result[i].DuongDan
            });

        }
        morePhoneNumber = result.length - 12;
        pageNumber = 1;

        res.render('phone.ejs', { phones, morePhoneNumber, pageNumber, account, level });

    });

    
});

router.get('/:page', function (req, res, next) {

    var phones = [];
    var morePhoneNumber;
    var pageNumber = parseInt(req.params.page);

    var account;
    var level;
    if (req.session.username) {
        account = req.session.username;
    }
    if (req.session.level) {
        level = req.session.level;
    }

    var queryPhone = "SELECT * FROM dienthoai INNER JOIN hinhanhdienthoai ON dienthoai.MaDienThoai=hinhanhdienthoai.MaDT GROUP BY dienthoai.MaDienThoai ORDER BY dienthoai.MaDienThoai DESC";
    connect_db.con.query(queryPhone, function (err, result, feilds) {
        if (err) throw err;

        if (result.length - 12 * pageNumber >= 0) {
            for (var i = 0; i < 12 * pageNumber; i++) {

                phones.push({
                    id: result[i].MaDienThoai, hang: result[i].Hang, ten: result[i].TenDienThoai,
                    giaBan: result[i].GiaBan, giaGoc: result[i].KhuyenMai + result[i].GiaBan,
                    hinhAnh: result[i].DuongDan
                });

            }
        } else {
            for (var i = 0; i < result.length; i++) {

                phones.push({
                    id: result[i].MaDienThoai, hang: result[i].Hang, ten: result[i].TenDienThoai,
                    giaBan: result[i].GiaBan, giaGoc: result[i].KhuyenMai + result[i].GiaBan,
                    hinhAnh: result[i].DuongDan
                });

            }
        }


        if (result.length - 12 * pageNumber > 0) {
            morePhoneNumber = result.length - 12;
        } else {
            morePhoneNumber = 0;
        }

        res.render('phone.ejs', { phones, morePhoneNumber, pageNumber, account, level });

    });


});

module.exports = router;
