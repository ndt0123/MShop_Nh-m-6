var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.get('/', function (req, res, next) {

    var phones = [];
    var phoneNumber;

    var queryPhone = "SELECT * FROM dienthoai INNER JOIN hinhanhdienthoai ON dienthoai.MaDienThoai=hinhanhdienthoai.MaDT GROUP BY dienthoai.MaDienThoai ORDER BY dienthoai.MaDienThoai DESC";
    connect_db.con.query(queryPhone, function (err, result, feilds) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            if (result[i].GiaKhuyenMai == null) {
                phones.push({
                    id: result[i].MaDienThoai, hang: result[i].Hang, ten: result[i].TenDienThoai,
                    giaBan: result[i].GiaBan, giaGoc: result[i].GiaBan,
                    hinhAnh: result[i].DuongDan
                });
            } else {
                phones.push({
                    id: result[i].MaDienThoai, hang: result[i].Hang, ten: result[i].TenDienThoai,
                    giaBan: result[i].GiaKhuyenMai, giaGoc: result[i].GiaBan,
                    hinhAnh: result[i].DuongDan
                });
            }
        }
        phoneNumber = result.length;

        res.json({ phones, phoneNumber });

    });

    
});

module.exports = router;
