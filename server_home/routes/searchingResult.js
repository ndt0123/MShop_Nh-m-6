var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* ------ Router tìm kiếm điện thoại -------- */
router.get('/dien-thoai', function (req, res, next) {

    /*Các biến xử lý câu truy vấn và kết quả trả về*/
    var phones = [];
    var phoneNumber;
    var query = "SELECT * FROM dienthoai P INNER JOIN hinhanhdienthoai PI ON P.MaDienThoai = PI.MaDT ";

    /* ----- Xử lý câu lệnh query khi url có biến hang ------ */
    if (typeof req.query.hang != "undefined") {
        var hang = req.query.hang.split(",");
        query += "WHERE ( P.Hang = '" + hang[0] + "' ";
        for (var i = 1; i < hang.length; i++) {
            query += "OR P.Hang = '" + hang[i] + "' ";
        }
        query += ")";
    }

    /* ----- Xử lý câu lệnh query khi url có biến gia ------ */
    if (typeof req.query.gia != "undefined") {
        var gia = req.query.gia.split(",");
        if (typeof req.query.hang == "undefined") {
            query += "WHERE ( ";
        } else {
            query += "AND ( ";
        }

        for (var i = 0; i < gia.length; i++) {
            switch (gia[i]) {
                case "duoi1":
                    if (i == 0) {
                        query += "P.GiaBan < 1000000 ";
                    } else {
                        query += "OR P.GiaBan < 1000000 ";
                    }
                    break;
                case "1-3":
                    if (i == 0) {
                        query += "P.GiaBan > 1000000 AND P.GiaBan < 3000000 ";
                    } else {
                        query += "OR P.GiaBan > 1000000 AND P.GiaBan < 3000000 ";
                    }
                    break;
                case "3-6":
                    if (i == 0) {
                        query += "P.GiaBan > 3000000 AND P.GiaBan < 6000000 ";
                    } else {
                        query += "OR P.GiaBan > 3000000 AND P.GiaBan < 6000000 ";
                    }
                    break;
                case "6-10":
                    if (i == 0) {
                        query += "P.GiaBan > 6000000 AND P.GiaBan < 10000000 ";
                    } else {
                        query += "OR P.GiaBan > 6000000 AND P.GiaBan < 10000000 ";
                    }
                    break;
                case "10-15":
                    if (i == 0) {
                        query += "P.GiaBan > 10000000 AND P.GiaBan < 15000000 ";
                    } else {
                        query += "OR P.GiaBan > 10000000 AND P.GiaBan < 15000000";
                    }
                    break;
                case "15-25":
                    if (i == 0) {
                        query += "P.GiaBan > 15000000 AND P.GiaBan < 25000000 ";
                    } else {
                        query += "OR P.GiaBan > 15000000 AND P.GiaBan < 25000000 ";
                    }
                    break;
                case "tren25":
                    if (i == 0) {
                        query += "P.GiaBan > 25000000 ";
                    } else {
                        query += "OR P.GiaBan > 25000000 ";
                    }
                    break;
            }
        }
        query += ") "
    }

    query += "GROUP BY P.MaDienThoai "; /*Thêm lệnh gruop by vào câu query để chỉ lấy một hình ảnh cho mỗi sản phẩm*/

    /* ----- Xử lý câu lệnh query khi url có biến sap_xep ------ */
    if (typeof req.query.sap_xep != "undefined") {
        if (req.query.sap_xep == "cao den thap") {
            query += "ORDER BY P.GiaBan DESC";
        } else if (req.query.sap_xep == "thap den cao") {
            query += "ORDER BY P.GiaBan ASC";
        }
    }
    
    /* ----- Kết nối tới database và lấy data ------ */
    connect_db.con.query(query, function (err, result, feilds) {
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

/*Router tìm kiếm phụ kiện*/
router.get('/phu-kien', function (req, res, next) {

    /*Các biến xử lý câu truy vấn và kết quả trả về*/
    var accessories = [];
    var accessoriesNumber;
    var query = "SELECT * FROM phukien A INNER JOIN hinhanhphukien AI ON A.MaPhuKien = AI.MaPhuKien ";

    /* ----- Xử lý câu lệnh query khi url có biến loai ------ */
    if (typeof req.query.loai != "undefined") {
        var loai = req.query.loai.split(",");
        query += "WHERE ( A.LoaiPhuKien = '" + loai[0] + "' ";
        for (var i = 1; i < loai.length; i++) {
            query += "OR A.LoaiPhuKien = '" + loai[i] + "' ";
        }
        query += ")";
    }

    /* ----- Xử lý câu lệnh query khi url có biến gia ------ */
    if (typeof req.query.gia != "undefined") {
        var gia = req.query.gia.split(",");
        if (typeof req.query.loai == "undefined") {
            query += "WHERE ( ";
        } else {
            query += "AND ( ";
        }

        for (var i = 0; i < gia.length; i++) {
            switch (gia[i]) {
                case "duoi200":
                    if (i == 0) {
                        query += "A.GiaBan < 200000 ";
                    } else {
                        query += "OR A.GiaBan < 200000 ";
                    }
                    break;
                case "200-500":
                    if (i == 0) {
                        query += "A.GiaBan > 200000 AND A.GiaBan <500000 ";
                    } else {
                        query += "OR A.GiaBan > 200000 AND A.GiaBan <500000 ";
                    }
                    break;
                case "500-1":
                    if (i == 0) {
                        query += "A.GiaBan > 500000 AND A.GiaBan < 1000000 ";
                    } else {
                        query += "OR A.GiaBan > 500000 AND A.GiaBan < 1000000 ";
                    }
                    break;
                case "1-2":
                    if (i == 0) {
                        query += "A.GiaBan > 1000000 AND A.GiaBan < 2000000 ";
                    } else {
                        query += "OR A.GiaBan > 1000000 AND A.GiaBan < 2000000 ";
                    }
                    break;
                case "2-5":
                    if (i == 0) {
                        query += "A.GiaBan > 2000000 AND A.GiaBan < 5000000 ";
                    } else {
                        query += "OR A.GiaBan > 2000000 AND A.GiaBan < 5000000";
                    }
                    break;
                case "tren5":
                    if (i == 0) {
                        query += "A.GiaBan > 5000000 ";
                    } else {
                        query += "OR A.GiaBan > 5000000 ";
                    }
                    break;
            }
        }
        query += ") "
    }

    query += "GROUP BY A.MaPhuKien "; /*Thêm group by để chỉ lấy một hình ảnh cho mỗi sản phẩm*/

    /* ----- Xử lý câu lệnh query khi url có biến sap_xep ------ */
    if (typeof req.query.sap_xep != "undefined") {
        if (req.query.sap_xep == "cao den thap") {
            query += "ORDER BY A.GiaBan DESC";
        } else if (req.query.sap_xep == "thap den cao") {
            query += "ORDER BY A.GiaBan ASC";
        }
    }

    /* ----- Kết nối tới database và lấy dữ liệu trả về ------ */
    connect_db.con.query(query, function (err, result, feilds) {
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

router.get('/searching', function (req, res, next) {
    var products = [];
    var productsNumber = 0;

    var key = req.query.key.trim().toLowerCase();
    if (key == "phụ kiện") {
        var queryProduct = "SELECT A.MaPhuKien, A.TenPhuKien, A.GiaBan, A.GiaKhuyenMai, AI.DuongDan FROM phukien A INNER JOIN hinhanhphukien AI ON A.MaPhuKien = AI.MaPhuKien GROUP BY A.MaPhuKien";
        connect_db.con.query(queryProduct, function (err, result) {
            if (err) {
                throw err;
            }
            productsNumber = result.length;
            for (var i = 0; i < result.length; i++) {
                if (result[i].GiaKhuyenMai == null) {
                    products.push({
                        id: result[i].MaPhuKien, ten: result[i].TenPhuKien,
                        giaBan: result[i].GiaBan, giaGoc: result[i].GiaBan,
                        hinhAnh: result[i].DuongDan, type: 'phu-kien'
                    });
                } else {
                    products.push({
                        id: result[i].MaPhuKien, ten: result[i].TenPhuKien,
                        giaBan: result[i].GiaKhuyenMai, giaGoc: result[i].GiaBan,
                        hinhAnh: result[i].DuongDan, type: 'phu-kien'
                    });
                }
            }
            res.json({ products, productsNumber });
        })
    } else  if (key == "điện thoại") {
        var queryProduct = "SELECT P.MaDienThoai, P.TenDienThoai, P.GiaBan, P.GiaKhuyenMai, PI.DuongDan FROM dienthoai P INNER JOIN hinhanhdienthoai PI ON P.MaDienThoai = PI.MaDT GROUP BY P.MaDienThoai";
        connect_db.con.query(queryProduct, function (err, result) {
            if (err) {
                throw err;
            }
            productsNumber = result.length;
            for (var i = 0; i < result.length; i++) {
                if (result[i].GiaKhuyenMai == null) {
                    products.push({
                        id: result[i].MaDienThoai, ten: result[i].TenDienThoai,
                        giaBan: result[i].GiaBan, giaGoc: result[i].GiaBan,
                        hinhAnh: result[i].DuongDan, type: 'dien-thoai'
                    });
                } else {
                    products.push({
                        id: result[i].MaDienThoai, ten: result[i].TenDienThoai,
                        giaBan: result[i].GiaKhuyenMai, giaGoc: result[i].GiaBan,
                        hinhAnh: result[i].DuongDan, type: 'dien-thoai'
                    });
                }
            }
            res.json({ products, productsNumber });
        })
    } else {
        var queryPhoneProducts = "SELECT P.MaDienThoai, P.TenDienThoai, P.GiaBan, P.GiaKhuyenMai, PI.DuongDan FROM dienthoai P INNER JOIN hinhanhdienthoai PI ON P.MaDienThoai = PI.MaDT WHERE P.TenDienThoai LIKE '%" + key + "%' OR P.Hang='" + key + "' GROUP BY P.MaDienThoai";
        connect_db.con.query(queryPhoneProducts, function (err1, result1) {
            if (err1) {
                throw err1;
            }
            for (var i = 0; i < result1.length; i++) {
                if (result1[i].GiaKhuyenMai == null) {
                    products.push({
                        id: result1[i].MaDienThoai, ten: result1[i].TenDienThoai,
                        giaBan: result1[i].GiaBan, giaGoc: result1[i].GiaBan,
                        hinhAnh: result1[i].DuongDan, type: 'dien-thoai'
                    });
                } else {
                    products.push({
                        id: result1[i].MaDienThoai, ten: result1[i].TenDienThoai,
                        giaBan: result1[i].GiaKhuyenMai, giaGoc: result1[i].GiaBan,
                        hinhAnh: result1[i].DuongDan, type: 'dien-thoai'
                    });
                }
            }

            var queryAccessoriesProducts = "SELECT A.MaPhuKien, A.TenPhuKien, A.GiaBan, A.GiaKhuyenMai, AI.DuongDan FROM phukien A INNER JOIN hinhanhphukien AI ON A.MaPhuKien = AI.MaPhuKien WHERE A.TenPhuKien LIKE '%" + key + "%' OR A.LoaiPhuKien='" + key + "' GROUP BY A.MaPhuKien"
            connect_db.con.query(queryAccessoriesProducts, function (err2, result2) {
                if (err2) {
                    throw err2;
                }
                for (var i = 0; i < result2.length; i++) {
                    if (result2[i].GiaKhuyenMai == null) {
                        products.push({
                            id: result2[i].MaPhuKien, ten: result2[i].TenPhuKien,
                            giaBan: result2[i].GiaBan, giaGoc: result2[i].GiaBan,
                            hinhAnh: result2[i].DuongDan, type: 'phu-kien'
                        });
                    } else {
                        products.push({
                            id: result2[i].MaPhuKien, ten: result2[i].TenPhuKien,
                            giaBan: result2[i].GiaKhuyenMai, giaGoc: result2[i].GiaBan,
                            hinhAnh: result2[i].DuongDan, type: 'phu-kien'
                        });
                    }
                }

                productsNumber = result1.length + result2.length;
                res.json({ products, productsNumber });
            })
        })
    }
})

module.exports = router;
