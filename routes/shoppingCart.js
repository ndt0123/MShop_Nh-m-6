var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

router.get('/', function (req, res, next) {
    var shoppingProducts = []; //Biến lưu các sản phẩm trong giỏ hàng
    var shippingProducts = []; //Biến lưu các sản phẩm đã đặt mua và đang chờ được giao hàng
    var boughtProducts = []; //Biến lưu các sản phẩm đã được thanh toán và giao hàng

    var errorLogin = ""; //Biến lưu lỗi chưa đăng nhập
    var errorRes = "Đã xảy ra lỗi"; //Biến lưu lỗi bên server

    //Kiểm tra xem đã đăng nhập chưa
    //Nếu chưa thì trả về lỗi errorLogin
    if (typeof req.session.username == "undefined" || typeof req.session.level == "undefined") { 
        errorLogin = "Bạn cần đăng nhập để có thể xem giỏ hàng";
        res.json({ errorLogin });
    } else {
        var idAccount = req.session.idAccount; //id khách hàng

        //Query lấy các sản phẩm là điện thoại trong giỏ hàng của người dùng
        var queryShoppingPhoneProducts = "SELECT MaGioHang, MaSanPham, LoaiSanPham, TenDienThoai, GiaBan, GiaKhuyenMai, DuongDan FROM giohang INNER JOIN dienthoai INNER JOIN hinhanhdienthoai ON giohang.MaSanPham=dienthoai.MaDienThoai AND dienthoai.MaDienThoai=hinhanhdienthoai.MaDT WHERE giohang.MaKhachHang=" + idAccount + " AND giohang.LoaiSanPham='Điện thoại' GROUP BY dienthoai.MaDienThoai";
        connect_db.con.query(queryShoppingPhoneProducts, function (err2, result2) {
            if (err2) {
                throw err2;
                res.json({ errorRes });
            }
            for (var i = 0; i < result2.length; i++) {
                if (result2[i].GiaKhuyenMai == null) {
                    shoppingProducts.push({ MaGioHang: result2[i].MaGioHang, MaSanPham: result2[i].MaSanPham, LoaiSanPham: result2[i].LoaiSanPham, TenSanPham: result2[i].TenDienThoai, GiaBan: result2[i].GiaBan, DuongDan: result2[i].DuongDan });
                } else {
                    shoppingProducts.push({ MaGioHang: result2[i].MaGioHang, MaSanPham: result2[i].MaSanPham, LoaiSanPham: result2[i].LoaiSanPham, TenSanPham: result2[i].TenDienThoai, GiaBan: result2[i].GiaKhuyenMai, DuongDan: result2[i].DuongDan });
                }
            }
            //Query lấy các sản phẩm là phụ kiện trong giỏ hàng của người dùng
            var queryShoppingAccProducts = "SELECT MaGioHang, MaSanPham, LoaiSanPham, TenPhuKien, GiaBan, GiaKhuyenMai, DuongDan FROM giohang INNER JOIN phukien INNER JOIN hinhanhphukien ON giohang.MaSanPham=phukien.MaPhuKien AND phukien.MaPhuKien=hinhanhphukien.MaPhuKien WHERE giohang.MaKhachHang=" + idAccount + " AND giohang.LoaiSanPham='Phụ kiện' GROUP BY phukien.MaPhuKien";
            connect_db.con.query(queryShoppingAccProducts, function (err3, result3) {
                if (err3) {
                    throw err3;
                    res.json({ errorRes });
                }

                for (var i = 0; i < result3.length; i++) {
                    if (result3[i].GiaKhuyenMai == null) {
                        shoppingProducts.push({ MaGioHang: result3[i].MaGioHang, MaSanPham: result3[i].MaSanPham, LoaiSanPham: result3[i].LoaiSanPham, TenSanPham: result3[i].TenPhuKien, GiaBan: result3[i].GiaBan, DuongDan: result3[i].DuongDan });
                    } else {
                        shoppingProducts.push({ MaGioHang: result3[i].MaGioHang, MaSanPham: result3[i].MaSanPham, LoaiSanPham: result3[i].LoaiSanPham, TenSanPham: result3[i].TenPhuKien, GiaBan: result3[i].GiaKhuyenMai, DuongDan: result3[i].DuongDan });
                    }
                }

                //Query lấy các sản phẩm là điện thoại đang được giao hàng
                var queryShippingPhoneProducts = "SELECT OD.MaSanPham, OD.LoaiSanPham, OD.GiaBan, OD.SoLuong, P.TenDienThoai AS TenSanPham, O.TrangThai FROM donhang O INNER JOIN chitietdonhang OD INNER JOIN dienthoai P ON OD.MADonHang=O.MADonHang AND OD.MaSanPham=P.MaDienThoai WHERE O.MaKhachHang=" + idAccount + " AND OD.LoaiSanPham='Điện thoại' AND O.TrangThai!='Đã giao hàng'";
                connect_db.con.query(queryShippingPhoneProducts, function (err4, result4) {
                    if (err4) throw err4;
                    shippingProducts = result4;

                    //Query lấy các sản phẩm là phụ kiện đang được giao hàng
                    var queryShippingAccProducts = "SELECT OD.MaSanPham, OD.LoaiSanPham, OD.GiaBan, OD.SoLuong, A.TenPhuKien AS TenSanPham, O.TrangThai FROM donhang O INNER JOIN chitietdonhang OD INNER JOIN phukien A ON OD.MADonHang=O.MADonHang AND OD.MaSanPham=A.MaPhuKien WHERE O.MaKhachHang=" + idAccount + " AND OD.LoaiSanPham='Phụ kiện' AND O.TrangThai!='Đã giao hàng'";
                    connect_db.con.query(queryShippingAccProducts, function (err5, result5) {
                        if (err5) throw err5;
                        for (var i = 0; i < result5.length; i++) {
                            shippingProducts.push(result5[i]);
                        }

                        //Query lấy các sản phẩm là điện thoại đã được giao hàng
                        var queryBoughtPhoneProducts = "SELECT OD.MaSanPham, OD.LoaiSanPham, OD.GiaBan, OD.SoLuong, P.TenDienThoai AS TenSanPham FROM donhang O INNER JOIN chitietdonhang OD INNER JOIN dienthoai P ON OD.MADonHang=O.MADonHang AND OD.MaSanPham=P.MaDienThoai WHERE O.MaKhachHang=" + idAccount + " AND OD.LoaiSanPham='Điện thoại' AND O.TrangThai='Đã giao hàng'";
                        connect_db.con.query(queryBoughtPhoneProducts, function (err6, result6) {
                            if (err6) throw err6;
                            boughtProducts = result6;

                            //Query lấy các sản phẩm là phụ kiện đã được giao hàng
                            var queryBoughtAccProducts = "SELECT OD.MaSanPham, OD.LoaiSanPham, OD.GiaBan, OD.SoLuong, A.TenPhuKien AS TenSanPham FROM donhang O INNER JOIN chitietdonhang OD INNER JOIN phukien A ON OD.MADonHang=O.MADonHang AND OD.MaSanPham=A.MaPhuKien WHERE O.MaKhachHang=" + idAccount + " AND OD.LoaiSanPham='Phụ kiện' AND O.TrangThai='Đã giao hàng'";
                            connect_db.con.query(queryBoughtAccProducts, function (err7, result7) {
                                if (err7) throw err7;
                                for (var i = 0; i < result7.length; i++) {
                                    boughtProducts.push(result7[i]);
                                }

                                res.json({ shoppingProducts, shippingProducts, boughtProducts });
                            })
                                
                        })
                    })
                })
            })
        })
    }
})

router.get('/xoa', function (req, res, next) {
    var id = req.query.id;
    var idAccount = req.session.idAccount; //id khách hàng
    //query xóa sản phẩm khỏi giỏ hàng
    var queryDeleteProduct = "DELETE FROM giohang WHERE giohang.MaGioHang = " + id + " AND giohang.MaKhachHang=" + idAccount;
    connect_db.con.query(queryDeleteProduct, function (err1, result1) {
        if (err1) throw err1;
    })
})

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
        var maSanPham = req.body.ma_san_pham;
        var loaiSanPham = req.body.loai_san_pham;

        var idAccount = req.session.idAccount; //id khách hàng
        //Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng của người dùng đó chưa
        //Nếu có thì trả về thông báo
        var queryIsExist = "SELECT MaSanPham FROM giohang WHERE MaSanPham=" + maSanPham + " AND MaKhachHang=" + idAccount + " AND LoaiSanPham='" + loaiSanPham + "'";
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
                var queryInsertIntoGioHang = "INSERT INTO `giohang` (`MaGioHang`, `MaSanPham`, `LoaiSanPham`, `MaKhachHang`) VALUES (NULL, '" + maSanPham + "', '" + loaiSanPham + "', '" + idAccount + "')";
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
    }
});

module.exports = router;
