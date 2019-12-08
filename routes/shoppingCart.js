var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.post('/them', function (req, res, next) {
    var errorRes = "Đã xảy ra lỗi!";
    var successRes = "Đã thêm sản phẩm vào giỏ hàng thành công.\nBạn có thểm xem chi tiết bên trong giỏ hàng.";

    //Kiểm tra xem request có đầy đủ 3 biến account, ma_san_pham, loai_san_pham
    //Nếu thiếu một trong số đó thì trả về thông báo
    //Nếu không thì thực hiện insert vào bảng giohang
    if (typeof req.body.account == "undefined" || typeof req.body.ma_san_pham == "undefined" || typeof req.body.loai_san_pham == "undefined") {
        errorRes = "Đã xảy ra lỗi!"
        res.json({ errorRes });
    } else {
        var account = req.body.account;
        var maSanPham = req.body.ma_san_pham;
        var loaiSanPham = req.body.loai_san_pham;

        //Câu query lấy id của người dùng
        var queryIdAccount = "SELECT MaNguoiDung FROM nguoidung WHERE TenDangNhap='" + account + "'";
        connect_db.con.query(queryIdAccount, function (err1, result1) {
            if (err1) {
                throw err1;
                errorRes = "Đã xảy ra lỗi!"
                res.json({ errorRes });
            }
            //Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng của người dùng đó chưa
            //Nếu có thì trả về thông báo
            var queryIsExist = "SELECT MaSanPham FROM giohang WHERE MaSanPham=" + maSanPham + " AND MaKhachHang=" + result1[0].MaNguoiDung + " AND LoaiSanPham='" + loaiSanPham + "'";
            console.log(queryIsExist);
            connect_db.con.query(queryIsExist, function (err2, result2) {
                if (err2) {
                    throw err2;
                    errorRes = "Đã xảy ra lỗi!"
                    res.json({ errorRes });
                }

                if (result2.length > 0) {
                    errorRes = "Sản phẩm đã tồn tại trong giỏ hàng.";
                    res.json({ errorRes });
                } else {
                    //Cầu query insert vào bảng giohang
                    var queryInsertIntoGioHang = "INSERT INTO `giohang` (`MaGioHang`, `MaSanPham`, `LoaiSanPham`, `MaKhachHang`) VALUES (NULL, '" + maSanPham + "', '" + loaiSanPham + "', '" + result1[0].MaNguoiDung + "')";
                    connect_db.con.query(queryInsertIntoGioHang, function (err3, result3) {
                        if (err3) {
                            throw err3;
                            errorRes = "Đã xảy ra lỗi!"
                            res.json({ errorRes });
                        }
                        res.json({ successRes });
                    })
                }
            })
        })
    }
});

module.exports = router;
