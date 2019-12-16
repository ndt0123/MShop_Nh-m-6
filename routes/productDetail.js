var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

router.get('/dien-thoai', function (req, res, next) {

    var detail = [];
    var recommendPrds = [];
    var images = [];
    var commentLevel1 = [];
    var commentLevel2 = [];

    if (typeof req.query.id == "undefined") { //Kiểm tra xem url có đúng không (có trường id không)
        res.json({ });
    } else {
        var id = req.query.id;
        var queryDetail = "SELECT * FROM dienthoai INNER JOIN cauhinhdienthoai ON dienthoai.MaDienThoai=cauhinhdienthoai.MaDienThoai WHERE dienthoai.MaDienThoai=" + id;
        connect_db.con.query(queryDetail, function (err, result) {
            if (err) throw err;
            detail = result;

            if (result.length == 0) { //Kiểm tra xem id có trong cơ sở dữ liệu không
                res.json({  });
            } else {
                var queryImages = "SELECT * FROM hinhanhdienthoai WHERE MaDT=" + id;
                connect_db.con.query(queryImages, function (err1, result1) {
                    if (err1) throw err1;
                    images = result1;

                    var queryRecommend = " SELECT * FROM dienthoai P INNER JOIN hinhanhdienthoai PI ON P.MaDienThoai=PI.MaDT WHERE P.Hang='" + result[0].Hang + "' OR P.GiaBan BETWEEN " + (result[0].GiaBan - 2000000) + " AND " + (result[0].GiaBan + 2000000) + " GROUP BY P.MaDienThoai ORDER BY P.MaDienThoai DESC"
                    connect_db.con.query(queryRecommend, function (err2, result2) {
                        if (err2) throw err2;

                        for (var i = 0; i < result2.length; i++) {
                            if (result2[i].GiaKhuyenMai == null) {
                                recommendPrds.push({
                                    id: result2[i].MaDienThoai, hang: result2[i].Hang, ten: result2[i].TenDienThoai,
                                    giaBan: result2[i].GiaBan, giaGoc: result2[i].GiaBan,
                                    hinhAnh: result2[i].DuongDan
                                });
                            } else {
                                recommendPrds.push({
                                    id: result2[i].MaDienThoai, hang: result2[i].Hang, ten: result2[i].TenDienThoai,
                                    giaBan: result2[i].GiaKhuyenMai, giaGoc: result2[i].GiaBan,
                                    hinhAnh: result2[i].DuongDan
                                });
                            }
                        }

                        var queryCommentLevel1 = "SELECT IDCmt, NoiDung, ThoiGian, TenDangNhap, Level FROM comment C INNER JOIN nguoidung A ON C.MaKhachHang=A.MaNguoiDung WHERE C.LoaiSanPham='Điện thoại' AND C.MaSanPham=" + id;
                        connect_db.con.query(queryCommentLevel1, function (err3, result3) {
                            if (err3) throw err3;
                            commentLevel1 = result3;

                            var queryCommentLevel2 = "SELECT C2.IDCmt2, C2.IDCmt, C2.NoiDung, C2.ThoiGian, A.TenDangNhap, A.Level FROM comment2 C2 INNER JOIN comment C1 INNER JOIN nguoidung A ON C2.IDCmt=C1.IDCmt AND C2.IDNguoiDung=A.MaNguoiDung WHERE C1.LoaiSanPham='Điện thoại' AND C1.MaSanPham=" + id;
                            connect_db.con.query(queryCommentLevel2, function (err4, result4) {
                                if (err4) throw err4;
                                commentLevel2 = result4;

                                res.json({ detail, recommendPrds, images, commentLevel1, commentLevel2 });
                            })
                        })
                    })
                })
            }
        });
    }
});

router.get('/phu-kien', function (req, res, next) {

    var detail = [];
    var recommendPrds = [];
    var images = [];
    var commentLevel1 = [];
    var commentLevel2 = [];

    if (typeof req.query.id == "undefined") { //Kiểm tra xem url có đúng không (có trường id không)
        res.json({  });
    } else {
        var id = req.query.id;
        var queryDetail = "SELECT * FROM phukien WHERE MaPhuKien=" + id;
        connect_db.con.query(queryDetail, function (err, result) {
            if (err) throw err;
            detail = result;

            if (result.length == 0) { //Kiểm tra xem id có trong cơ sở dữ liệu không
                res.json({  });
            } else {
                var queryImages = "SELECT * FROM hinhanhphukien WHERE MaPhuKien=" + id;
                connect_db.con.query(queryImages, function (err1, result1) {
                    if (err1) throw err1;
                    images = result1;

                    var queryRecommend = "SELECT * FROM phukien A INNER JOIN hinhanhphukien AI ON A.MaPhuKien=AI.MaPhuKien WHERE A.LoaiPhuKien='" + result[0].LoaiPhuKien + "' OR A.GiaBan BETWEEN " + (result[0].GiaBan - 100000) + " AND " + (result[0].GiaBan + 100000) + " GROUP BY A.MaPhuKien ORDER BY A.MaPhuKien DESC"
                    connect_db.con.query(queryRecommend, function (err2, result2) {
                        if (err2) throw err2;

                        for (var i = 0; i < result2.length; i++) {
                            if (result2[i].GiaKhuyenMai == null) {
                                recommendPrds.push({
                                    id: result2[i].MaPhuKien, loai: result2[i].LoaiPhuKien, ten: result2[i].TenPhuKien,
                                    giaBan: result2[i].GiaBan, giaGoc: result2[i].GiaBan,
                                    hinhAnh: result2[i].DuongDan
                                });
                            } else {
                                recommendPrds.push({
                                    id: result2[i].MaPhuKien, loai: result2[i].LoaiPhuKien, ten: result2[i].TenPhuKien,
                                    giaBan: result2[i].GiaKhuyenMai, giaGoc: result2[i].GiaBan,
                                    hinhAnh: result2[i].DuongDan
                                });
                            }
                        }

                        var queryCommentLevel1 = "SELECT IDCmt, NoiDung, ThoiGian, TenDangNhap, Level FROM comment C INNER JOIN nguoidung A ON C.MaKhachHang=A.MaNguoiDung WHERE C.LoaiSanPham='Phụ kiện' AND C.MaSanPham=" + id;
                        connect_db.con.query(queryCommentLevel1, function (err3, result3) {
                            if (err3) throw err3;
                            commentLevel1 = result3;

                            var queryCommentLevel2 = "SELECT C2.IDCmt2, C2.IDCmt, C2.NoiDung, C2.ThoiGian, A.TenDangNhap, A.Level FROM comment2 C2 INNER JOIN comment C1 INNER JOIN nguoidung A ON C2.IDCmt=C1.IDCmt AND C1.MaKhachHang=A.MaNguoiDung WHERE C1.LoaiSanPham='Phụ kiện' AND C1.MaSanPham=" + id;
                            connect_db.con.query(queryCommentLevel2, function (err4, result4) {
                                if (err4) throw err4;
                                commentLevel2 = result4;

                                res.json({ detail, recommendPrds, images, commentLevel1, commentLevel2 });
                            })
                        })

                    })
                })
            }
        });
    }
    
    
});

router.get('/phu-kien/binh-luan', function (req, res, next) {
    var idProduct = req.query.id;
    var content = req.query.content;

    //Id của tài khoản đăng nhập vào
    var idAccount = req.session.idAccount;
    //Query thêm bình luận vào cơ sở dữ liệu
    var queryInsertComment = "INSERT INTO `comment` (`IDCmt`, `MaKhachHang`, `LoaiSanPham`, `MaSanPham`, `NoiDung`, `ThoiGian`) VALUES (NULL, '" + idAccount + "', 'Phụ kiện', '" + idProduct + "', '" + content + "', current_timestamp())";
    connect_db.con.query(queryInsertComment, function (err2, result2) {
        if (err2) throw err2;
    })
});

router.get('/phu-kien/tra-loi', function (req, res, next) {
    var idComment = req.query.id_comment;
    var content = req.query.content;

    //Id của tài khoản đăng nhập vào
    var idAccount = req.session.idAccount;

    //Query thêm bình luận vào cơ sở dữ liệu
    var queryInsertComment = "INSERT INTO `comment2` (`IDCmt2`, `IDNguoiDung`, `IDCmt`, `NoiDung`, `ThoiGian`, `LoaiSanPham`) VALUES (NULL, '" + idAccount + "', '" + idComment + "', '" + content + "', current_timestamp(), 'Phụ kiện')";
    connect_db.con.query(queryInsertComment, function (err2, result2) {
        if (err2) throw err2;
    })
});

router.get('/dien-thoai/binh-luan', function (req, res, next) {
    var idProduct = req.query.id;
    var content = req.query.content;

    //Id của tài khoản đăng nhập vào
    var idAccount = req.session.idAccount;

    //Query thêm bình luận vào cơ sở dữ liệu
    var queryInsertComment = "INSERT INTO `comment` (`IDCmt`, `MaKhachHang`, `LoaiSanPham`, `MaSanPham`, `NoiDung`, `ThoiGian`) VALUES (NULL, '" + idAccount + "', 'Điện thoại', '" + idProduct + "', '" + content + "', current_timestamp())";
    connect_db.con.query(queryInsertComment, function (err2, result2) {
        if (err2) throw err2;
    })
});

router.get('/dien-thoai/tra-loi', function (req, res, next) {
    var idComment = req.query.id_comment;
    var content = req.query.content;

    //Id của tài khoản đăng nhập vào
    var idAccount = req.session.idAccount;

    //Query thêm bình luận vào cơ sở dữ liệu
    var queryInsertComment = "INSERT INTO `comment2` (`IDCmt2`, `IDNguoiDung`, `IDCmt`, `NoiDung`, `ThoiGian`, `LoaiSanPham`) VALUES (NULL, '" + idAccount + "', '" + idComment + "', '" + content + "', current_timestamp(), 'Điện thoại')";
    connect_db.con.query(queryInsertComment, function (err2, result2) {
        if (err2) throw err2;
    })
});

module.exports = router;
