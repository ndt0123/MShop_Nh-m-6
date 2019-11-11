var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.get('/', function (req, res, next) {

    var accessories = [];
    var moreAccessoriesNumber;
    var pageNumber;

    var account;
    var level;
    if (req.session.username) {
        account = req.session.username;
    }
    if (req.session.level) {
        level = req.session.level;
    }

    var queryPhone = "SELECT * FROM phukien INNER JOIN hinhanhphukien ON phukien.MaPhuKien=hinhanhphukien.MaPhuKien GROUP BY phukien.MaPhuKien ORDER BY phukien.MaPhuKien DESC";
    connect_db.con.query(queryPhone, function (err, result, feilds) {
        if (err) throw err;

        for (var i = 0; i < 12; i++) {

            accessories.push({
                id: result[i].MaPhuKien, loai: result[i].LoaiPhuKien, ten: result[i].TenPhuKien,
                giaBan: result[i].GiaBan, giaGoc: result[i].KhuyenMai + result[i].GiaBan,
                hinhAnh: result[i].DuongDan
            });

        }
        moreAccessoriesNumber = result.length - 12;
        pageNumber = 1;

        res.render('accessories.ejs', { accessories, moreAccessoriesNumber, pageNumber, account, level });

    });

});

router.get('/:page', function (req, res, next) {

    var accessories = [];
    var moreAccessoriesNumber;
    var pageNumber = parseInt(req.params.page);

    var account;
    var level;
    if (req.session.username) {
        account = req.session.username;
    }
    if (req.session.level) {
        level = req.session.level;
    }

    var queryPhone = "SELECT * FROM phukien INNER JOIN hinhanhphukien ON phukien.MaPhuKien=hinhanhphukien.MaPhuKien GROUP BY phukien.MaPhuKien ORDER BY phukien.MaPhuKien DESC";
    connect_db.con.query(queryPhone, function (err, result, feilds) {
        if (err) throw err;

        if (result.length - 12 * pageNumber >= 0) {
            for (var i = 0; i < 12 * pageNumber; i++) {

                accessories.push({
                    id: result[i].MaPhuKien, loai: result[i].LoaiPhuKien, ten: result[i].TenPhuKien,
                    giaBan: result[i].GiaBan, giaGoc: result[i].KhuyenMai + result[i].GiaBan,
                    hinhAnh: result[i].DuongDan
                });

            }
        } else {
            for (var i = 0; i < result.length; i++) {

                accessories.push({
                    id: result[i].MaPhuKien, loai: result[i].LoaiPhuKien, ten: result[i].TenPhuKien,
                    giaBan: result[i].GiaBan, giaGoc: result[i].KhuyenMai + result[i].GiaBan,
                    hinhAnh: result[i].DuongDan
                });

            }
        }


        if (result.length - 12 * pageNumber > 0) {
            moreAccessoriesNumber = result.length - 12;
        } else {
            moreAccessoriesNumber = 0;
        }

        res.render('accessories.ejs', { accessories, moreAccessoriesNumber, pageNumber, account, level });

    });


});

module.exports = router;
