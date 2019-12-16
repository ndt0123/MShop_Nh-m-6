var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.get('/', function (req, res, next) {

    var accessories = [];
    var accessoriesNumber;

    //query lấy các sản phẩm là phụ kiện
    var queryPhone = "SELECT * FROM phukien INNER JOIN hinhanhphukien ON phukien.MaPhuKien=hinhanhphukien.MaPhuKien GROUP BY phukien.MaPhuKien ORDER BY phukien.MaPhuKien DESC";
    connect_db.con.query(queryPhone, function (err, result, feilds) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            if (result[i].GiaKhuyenMai == null) {
                accessories.push({
                    id: result[i].MaPhuKien, loai: result[i].LoaiPhuKien, ten: result[i].TenPhuKien,
                    giaBan: result[i].GiaBan, giaGoc: result[i].GiaBan,
                    hinhAnh: result[i].DuongDan
                });
            } else {
                accessories.push({
                    id: result[i].MaPhuKien, loai: result[i].LoaiPhuKien, ten: result[i].TenPhuKien,
                    giaBan: result[i].GiaKhuyenMai, giaGoc: result[i].GiaBan,
                    hinhAnh: result[i].DuongDan
                });
            }
        }
        accessoriesNumber = result.length;
        res.json({ accessories, accessoriesNumber });

    });

});

module.exports = router;
