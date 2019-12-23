var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.get('/', function (req, res, next) {

    var phones = [];
    var accessories = [];
    var saleOff = [];
    var bestPhoneSeller = [];
    var bestAccessoriesSeller = [];

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

    //Query các sản phẩm điện thoại mới nhất
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

        //Query lấy các sản phẩm phụ kiện
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

            //Query lấy các sản phẩm điện thoại
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

                //Query lấy sản phẩm điện thoại bán chạy nhất
                var queryBestPhoneSeller = "SELECT PD.MaSanPham, SUM(PD.SoLuong) AS Tong, P.TenDienThoai, P.GiaBan, P.GiaKhuyenMai FROM chitietdonhang PD INNER JOIN dienthoai P ON PD.MaSanPham=P.MaDienThoai WHERE PD.LoaiSanPham='Điện thoại' GROUP BY PD.MaSanPham ORDER BY Tong DESC LIMIT 2";
                connect_db.con.query(queryBestPhoneSeller, function (err3, result3) {
                    if (err3) throw err3;

                    //Lấy hình ảnh của các sản phẩm điện thoại bán chạy nhất
                    var queryImagePhone = "SELECT DuongDan FROM hinhanhdienthoai WHERE MaDT=" + result3[0].MaSanPham + " OR MaDT=" + result3[1].MaSanPham + " GROUP BY MaDT";
                    connect_db.con.query(queryImagePhone, function (errImg3, resultImg3) {
                        if (errImg3) throw errImg3;
                        for (var i = 0; i < result3.length; i++) {
                            if (result3[i].GiaKhuyenMai == null) {
                                bestPhoneSeller.push({
                                    id: result3[i].MaSanPham,
                                    ten: result3[i].TenDienThoai,
                                    giaBan: result3[i].GiaBan,
                                    hinhAnh: resultImg3[i].DuongDan
                                })
                            } else {
                                bestPhoneSeller.push({
                                    id: result3[i].MaSanPham,
                                    ten: result3[i].TenDienThoai,
                                    giaBan: result3[i].GiaKhuyenMai,
                                    hinhAnh: resultImg3[i].DuongDan
                                })
                            }
                        }

                        //Query lấy sản phẩm là phụ kiện bán chạy nhất
                        var queryBestAccSeller = "SELECT PD.MaSanPham, SUM(PD.SoLuong) AS Tong, A.TenPhuKien, A.GiaBan, A.GiaKhuyenMai FROM chitietdonhang PD INNER JOIN phukien A ON PD.MaSanPham=A.MaPhuKien WHERE PD.LoaiSanPham='Phụ kiện' GROUP BY PD.MaSanPham ORDER BY Tong DESC LIMIT 2";
                        connect_db.con.query(queryBestAccSeller, function (err4, result4) {
                            if (err4) throw err4;

                            //Lấy hình ảnh của các sản phẩm phụ kiện bán chạy nhất
                            var queryImageAccessories = "SELECT DuongDan FROM hinhanhphukien WHERE MaPhuKien=" + result4[0].MaSanPham + " OR MaPhuKien=" + result4[1].MaSanPham + " GROUP BY MaPhuKien";
                            connect_db.con.query(queryImageAccessories, function (errImg4, resultImg4) {
                                if (errImg4) throw errImg4;
                                for (var i = 0; i < result4.length; i++) {
                                    if (result4[i].GiaKhuyenMai == null) {
                                        bestAccessoriesSeller.push({
                                            id: result4[i].MaSanPham,
                                            ten: result4[i].TenPhuKien,
                                            giaBan: result4[i].GiaBan,
                                            hinhAnh: resultImg4[i].DuongDan
                                        })
                                    } else {
                                        bestAccessoriesSeller.push({
                                            id: result4[i].MaSanPham,
                                            ten: result4[i].TenPhuKien,
                                            giaBan: result4[i].GiaKhuyenMai,
                                            hinhAnh: resultImg4[i].DuongDan
                                        })
                                    }
                                }

                                res.json({ phones, accessories, saleOff, bestPhoneSeller, bestAccessoriesSeller, account, level, idAccount });
                            })
                        })
                    })
                })
            });
        });
    });
    
});



module.exports = router;
