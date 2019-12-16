var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.get('/', function (req, res, next) {

    var phones = [];
    var accessories = [];
    var saleOff = [];

    var account;
    var level;
    var idAccount;
    if (req.session.username) {
        account = req.session.username;
    }
    if (req.session.level) {
        level = req.session.level;
    }
    if (req.session.idAccount) {
        idAccount = req.session.idAccount;
    }

    var queryPhone = "SELECT * FROM dienthoai INNER JOIN hinhanhdienthoai ON dienthoai.MaDienThoai=hinhanhdienthoai.MaDT GROUP BY dienthoai.MaDienThoai ORDER BY dienthoai.MaDienThoai DESC";

    connect_db.con.query(queryPhone, function (err, result) {
        if (err) throw err;
            
        for (var i = 0; i < 12; i++) {
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

        var queryAccessories = "SELECT * FROM phukien INNER JOIN hinhanhphukien ON phukien.MaPhuKien=hinhanhphukien.MaPhuKien GROUP BY phukien.MaPhuKien ORDER BY phukien.MaPhuKien DESC";
        connect_db.con.query(queryAccessories, function (err1, result1) {
            if (err1) throw err1;

            for (var i = 0; i < 8; i++) {
                if (result1[i].GiaKhuyenMai == null) {
                    accessories.push({
                        id: result1[i].MaPhuKien, loaiPhuKien: result1[i].LoaiPhuKien, ten: result1[i].TenPhuKien,
                        giaBan: result1[i].GiaBan, giaGoc: result1[i].GiaBan,
                        hinhAnh: result1[i].DuongDan
                    });
                } else {
                    accessories.push({
                        id: result1[i].MaPhuKien, loaiPhuKien: result1[i].LoaiPhuKien, ten: result1[i].TenPhuKien,
                        giaBan: result1[i].GiaKhuyenMai, giaGoc: result1[i].GiaBan,
                        hinhAnh: result1[i].DuongDan
                    });
                }
            }

            var querySaleOff = "SELECT * FROM dienthoai INNER JOIN hinhanhdienthoai ON dienthoai.MaDienThoai=hinhanhdienthoai.MaDT GROUP BY dienthoai.MaDienThoai ORDER BY GiaKhuyenMai DESC";
            connect_db.con.query(querySaleOff, function (err2, result2) {
                if (err2) throw err2;

                for (var i = 0; i < 8; i++) {
                    if (result2[i].GiaKhuyenMai == null) {
                        saleOff.push({
                            id: result2[i].MaDienThoai, hang: result2[i].Hang, ten: result2[i].TenDienThoai,
                            giaBan: result2[i].GiaBan, giaGoc: result2[i].GiaBan,
                            hinhAnh: result2[i].DuongDan
                        });
                    } else {
                        saleOff.push({
                            id: result2[i].MaDienThoai, hang: result2[i].Hang, ten: result2[i].TenDienThoai,
                            giaBan: result2[i].GiaKhuyenMai, giaGoc: result2[i].GiaBan,
                            hinhAnh: result2[i].DuongDan
                        });
                    }
                }
                res.json({ phones, accessories, saleOff, account, level, idAccount });
            });
        });
    });
    
});



module.exports = router;
