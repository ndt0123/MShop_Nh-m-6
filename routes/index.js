var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.get('/', function (req, res, next) {

    var phones = [];
    var accessories = [];
    var saleOff = [];

    var queryPhone = "SELECT * FROM dienthoai INNER JOIN hinhanhdienthoai ON dienthoai.MaDienThoai=hinhanhdienthoai.MaDT GROUP BY dienthoai.MaDienThoai ORDER BY dienthoai.MaDienThoai DESC";

    connect_db.con.query(queryPhone, function (err, result, fields) {
        if (err) throw err;
            
        for (var i = 0; i < 12; i++) {

            phones.push({
                id: result[i].MaDienThoai, hang: result[i].Hang, ten: result[i].TenDienThoai,
                giaBan: result[i].GiaBan, giaGoc: result[i].KhuyenMai + result[i].GiaBan,
                hinhAnh: result[i].DuongDan
            });

        }
        var queryAccessories = "SELECT * FROM phukien INNER JOIN hinhanhphukien ON phukien.MaPhuKien=hinhanhphukien.MaPhuKien GROUP BY phukien.MaPhuKien ORDER BY phukien.MaPhuKien DESC";
        connect_db.con.query(queryAccessories, function (err1, result1, fields1) {
            if (err1) throw err1;

            for (var i = 0; i < 8; i++) {

                accessories.push({
                    id: result1[i].MaPhuKien, loaiPhuKien: result1[i].LoaiPhuKien, ten: result1[i].TenPhuKien,
                    giaBan: result1[i].GiaBan, giaGoc: result1[i].KhuyenMai + result1[i].GiaBan,
                    hinhAnh: result1[i].DuongDan
                });

            }

            var querySaleOff = "SELECT * FROM dienthoai INNER JOIN hinhanhdienthoai ON dienthoai.MaDienThoai=hinhanhdienthoai.MaDT GROUP BY dienthoai.MaDienThoai ORDER BY KhuyenMai DESC";
            connect_db.con.query(querySaleOff, function (err2, result2, fields2) {
                if (err2) throw err2;

                for (var i = 0; i < 8; i++) {

                    saleOff.push({
                        id: result2[i].MaDienThoai, hang: result2[i].Hang, ten: result2[i].TenDienThoai,
                        giaBan: result2[i].GiaBan, giaGoc: result2[i].KhuyenMai + result2[i].GiaBan,
                        hinhAnh: result2[i].DuongDan
                    });

                }
                console.log(saleOff);
                console.log(phones);
                console.log(accessories);
                res.render('index.ejs', { phones, accessories, saleOff });
            });
                
                
        });
    });
    
});



module.exports = router;
