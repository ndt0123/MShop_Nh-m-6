var express = require('express');
var router = express.Router();

const connect_db = require('../modules/connect_db');

/* GET home page. */
router.get('/dien-thoai', function (req, res, next) {
    if (req.query.id) { //Kiểm tra xem có biến id trong request không
        //Câu query lấy id và kiểm tra xem có id sản phẩm đó không
        var queryId = "SELECT * FROM dienthoai WHERE dienthoai.MaDienThoai=" + req.query.id;
        connect_db.con.query(queryId, function (err1, result1) {
            if (err1) throw err1;
            if (result1.length == 0) {
                var error = 1;
                res.json({ error });
            } else {
                var id_product = req.query.id;
                var queryProduct = "SELECT * FROM dienthoai P INNER JOIN hinhanhdienthoai PI INNER JOIN cauhinhdienthoai PD ON P.MaDienThoai=PI.MaDT AND P.MaDienThoai=PD.MaDienThoai WHERE P.MaDienThoai=" + id_product + " GROUP BY P.MaDienThoai";
                connect_db.con.query(queryProduct, function (err2, result2) {
                    if (err2) throw err2;

                    //Biến lưu giá bán của sản phẩm
                    var giaBan = result2[0].GiaBan;
                    if (result2[0].GiaKhuyenMai != null) {
                        giaBan = result2[0].GiaKhuyenMai;
                    }

                    //Biến trả về lưu các thuộc tính của sản phẩm
                    var detail = {
                        id: result2[0].MaDienThoai,
                        ten: result2[0].TenDienThoai,
                        hinhAnh: result2[0].DuongDan,
                        giaBan: giaBan,
                        soLuong: result2[0].SoLuong,
                        heDieuHanh: result2[0].HeDieuHanh,
                        ram: result2[0].RAM,
                        boNhoTrong: result2[0].ROM,
                        dungLuongPin: result2[0].DungLuongPin,
                        manHinh: result2[0].DoPhanGiaiMH,
                        cameraSau: result2[0].DoPhanGiaiCamSau,
                        cameraTruoc: result2[0].DoPhanGiaiCamTruoc,
                        sim: result2[0].SIM
                    }

                    res.json({ detail });
                })
            }
        })
            
    } else {
        var error = 1;
        res.json({ error });
    }
    
});

router.post('/dien-thoai', function (req, res, next) {
    var idSanPham = req.body.id;
    var soLuong = req.body.so_luong;
    var diaChi = req.body.dia_chi;
    var hoTen = req.body.ho_ten;
    var sdt = req.body.sdt;
    var email = req.body.email;

    var querySoLuong = "SELECT * FROM dienthoai WHERE MaDienThoai=" + idSanPham; //Câu query lấy số lượng sản phẩm còn lại trong kho và giá bán
    connect_db.con.query(querySoLuong, function (err1, result1) { //Lấy số lượng sản phẩm còn trong kho cùng với giá bán
        if (err1) throw err1;

        if (result1[0].SoLuong < soLuong) { //Nếu số lượng sản phẩm còn trong kho mà ít hơn số mua thì trả về thông báo
            var errorQuantity = "Xin lỗi!\nSố lượng sản phẩm trong kho không đủ."
            res.json({ errorQuantity }); //Thông báo lỗi
        } else {
            var idAccount = req.session.idAccount;

            //Câu query insert vào bảng đơn hàng
            var queryInsertDonHang = "INSERT INTO`donhang`(`MADonHang`, `MaKhachHang`, `DiaChi`, `HoTen`, `SoDienThoai`, `Email`, `NgayDatHang`, `NgayChuyenHang`, `NgayNhanHang`, `TrangThai`, `GhiChu`) VALUES(NULL, '" + idAccount + "', '" + diaChi + "', '" + hoTen + "', '" + sdt + "', '" + email + "', current_timestamp(), NULL, NULL, 'Đang chờ', NULL)";
            connect_db.con.query(queryInsertDonHang, function (err3, result3) { //Insert vào bảng đơn hàng
                if (err3) throw err3;

                var maDonHang = result3.insertId; //Lấy id của đơn hàng vừa mới thêm
                var giaBan = result1[0].GiaBan; //Biến lưu giá bán của sản phẩm
                if (result1[0].GiaKhuyenMai != null) {
                    giaBan = result1[0].GiaKhuyenMai;
                }
                //Câu query insert vào bảng chi tiết đơn hàng
                var queryInsertChiTietDonHang = "INSERT INTO `chitietdonhang` (`MADonHang`, `LoaiSanPham`, `MaSanPham`, `Mau`, `GiaBan`, `SoLuong`) VALUES ('" + maDonHang + "', 'Điện thoại', '" + idSanPham + "', NULL, '" + giaBan + "', '" + soLuong + "')"
                connect_db.con.query(queryInsertChiTietDonHang, function (err4, result4) { //Insert vào bảng đơn hàng
                    if (err4) throw err4;

                    var quantity = result1[0].SoLuong - soLuong; //Biến lưu số lượng sản phẩm còn lại trong kho khi một đơn hàng mới được mua
                    //Câu query update số lượng của sản phẩm còn lại trong kho
                    var queryUpdateQuantity = "UPDATE `dienthoai` SET `SoLuong` = '" + quantity + "' WHERE `dienthoai`.`MaDienThoai` = " + idSanPham;
                    connect_db.con.query(queryUpdateQuantity, function (err5, result5) { //update số lượng sản phẩm còn lại trong kho
                        if (err5) throw err5;

                        var sucessMess = "Bạn đã mua hàng thành công!\nBạn có thể xem chi tiết trong giỏ hàng."
                        res.json({ sucessMess }); //Thông báo thành công
                    })
                })
            })
        }
    })    
});

router.get('/phu-kien', function (req, res, next) {
    //Kiểm tra xem trong request có biến id không 
    //Nếu không có thì trả về thông báo lỗi
    if (req.query.id) { 
        //Câu query lấy id của sản phẩm và kiểm tra xem id đó có tồn tại không
        var queryId = "SELECT * FROM phukien WHERE phukien.MaPhuKien=" + req.query.id;
        connect_db.con.query(queryId, function (err1, result1) {
            if (err1) throw err1;
            if (result1.length == 0) {
                var error = 1;
                res.json({ error });
            } else {
                var id_product = req.query.id;
                var queryProduct = "SELECT * FROM phukien A INNER JOIN hinhanhphukien AI ON A.MaPhuKien=AI.MaPhuKien WHERE A.MaPhuKien=" + id_product + " GROUP BY A.MaPhuKien";
                connect_db.con.query(queryProduct, function (err2, result2) {
                    if (err2) throw err2;

                    var giaBan = result2[0].GiaBan;
                    if (result2[0].GiaKhuyenMai != null) {
                        giaBan = result2[0].GiaKhuyenMai;
                    }
                    var detail = {
                        id: result2[0].MaPhuKien,
                        ten: result2[0].TenPhuKien,
                        hinhAnh: result2[0].DuongDan,
                        giaBan: giaBan,
                        soLuong: result2[0].SoLuong,
                        loai: result2[0].LoaiPhuKien,
                        hang: result2[0].Hang
                    }

                    res.json({ detail });
                })
            }
        })

    } else {
        var error = 1;
        res.json({ error });
    }

});

router.post('/phu-kien', function (req, res, next) {
    var idSanPham = req.body.id;
    var account = req.body.account;
    var soLuong = req.body.so_luong;
    var diaChi = req.body.dia_chi;
    var hoTen = req.body.ho_ten;
    var sdt = req.body.sdt;
    var email = req.body.email;

    var querySoLuong = "SELECT * FROM phukien WHERE MaPhuKien=" + idSanPham; //Câu query lấy số lượng sản phẩm còn lại trong kho và giá bán
    connect_db.con.query(querySoLuong, function (err1, result1) { //Lấy số lượng sản phẩm còn trong kho cùng với giá bán
        if (err1) throw err1;

        if (result1[0].SoLuong < soLuong) { //Nếu số lượng sản phẩm còn trong kho mà ít hơn số mua thì trả về thông báo
            var errorQuantity = "Xin lỗi!\nSố lượng sản phẩm trong kho không đủ."
            res.json({ errorQuantity }); //Thông báo lỗi
        } else {
            var idAccount = req.session.idAccount;

            //Câu query insert vào bảng đơn hàng
            var queryInsertDonHang = "INSERT INTO`donhang`(`MADonHang`, `MaKhachHang`, `DiaChi`, `HoTen`, `SoDienThoai`, `Email`, `NgayDatHang`, `NgayChuyenHang`, `NgayNhanHang`, `TrangThai`, `GhiChu`) VALUES(NULL, '" + idAccount + "', '" + diaChi + "', '" + hoTen + "', '" + sdt + "', '" + email + "', current_timestamp(), NULL, NULL, 'Đang chờ', NULL)";
            connect_db.con.query(queryInsertDonHang, function (err3, result3) { //Insert vào bảng đơn hàng
                if (err3) throw err3;

                var maDonHang = result3.insertId; //Lấy id của đơn hàng vừa mới thêm
                var giaBan = result1[0].GiaBan; //Biến lưu giá bán của sản phẩm
                if (result1[0].GiaKhuyenMai != null) {
                    giaBan = result1[0].GiaKhuyenMai;
                }
                //Câu query insert vào bảng chi tiết đơn hàng
                var queryInsertChiTietDonHang = "INSERT INTO `chitietdonhang` (`MADonHang`, `LoaiSanPham`, `MaSanPham`, `Mau`, `GiaBan`, `SoLuong`) VALUES ('" + maDonHang + "', 'Phụ kiện', '" + idSanPham + "', NULL, '" + giaBan + "', '" + soLuong + "')"
                connect_db.con.query(queryInsertChiTietDonHang, function (err4, result4) { //Insert vào bảng đơn hàng
                    if (err4) throw err4;

                    var quantity = result1[0].SoLuong - soLuong; //Biến lưu số lượng sản phẩm còn lại trong kho khi một đơn hàng mới được mua
                    //Câu query update số lượng của sản phẩm còn lại trong kho
                    var queryUpdateQuantity = "UPDATE `phukien` SET `SoLuong` = '" + quantity + "' WHERE `phukien`.`MaPhuKien` = " + idSanPham;
                    connect_db.con.query(queryUpdateQuantity, function (err5, result5) { //update số lượng sản phẩm còn lại trong kho
                        if (err5) throw err5;

                        var sucessMess = "Bạn đã mua hàng thành công!\nBạn có thể xem chi tiết trong giỏ hàng."
                        res.json({ sucessMess }); //Thông báo thành công
                    })
                })
            })
        }
    })    
});

router.get('/gio-hang', function (req, res, next) {
    var shoppingProducts = []; //Biến lưu các sản phẩm trong giỏ hàng

    var errorLogin = "Bạn cần đăng nhập để thực hiện tác vụ này."; //Biến lưu lỗi chưa đăng nhập
    var errorRes = "Đã xảy ra lỗi"; //Biến lưu lỗi bên server

    //Kiểm tra xem người dùng đã đăng nhập chưa
    //Nếu chưa báo lỗi
    if (typeof req.session.username == "undefined" || typeof req.session.level == "undefined") {
        res.json({ errorLogin });
    } else {
        //query lấy id của người dùng
        var queryIdAccount = "SELECT MaNguoiDung FROM nguoidung WHERE TenDangNhap='" + req.session.username + "'";
        connect_db.con.query(queryIdAccount, function (err1, result1) {
            if (err1) {
                throw err1;
                res.json({ errorRes });
            } 

            //Query lấy các sản phẩm là điện thoại trong giỏ hàng của người dùng
            var queryShoppingPhoneProducts = "SELECT MaGioHang, MaSanPham, LoaiSanPham, TenDienThoai, GiaBan, GiaKhuyenMai, DuongDan FROM giohang INNER JOIN dienthoai INNER JOIN hinhanhdienthoai ON giohang.MaSanPham=dienthoai.MaDienThoai AND dienthoai.MaDienThoai=hinhanhdienthoai.MaDT WHERE giohang.MaKhachHang=" + result1[0].MaNguoiDung + " AND giohang.LoaiSanPham='Điện thoại' GROUP BY dienthoai.MaDienThoai";
            connect_db.con.query(queryShoppingPhoneProducts, function (err2, result2) {
                if (err2) {
                    throw err2;
                    res.json({ errorRes });
                }
                for (var i = 0; i < result2.length; i++) {
                    if (result2[i].GiaKhuyenMai == null) {
                        shoppingProducts.push({ MaGioHang: result2[i].MaGioHang, MaSanPham: result2[i].MaSanPham, LoaiSanPham: result2[i].LoaiSanPham, TenSanPham: result2[i].TenDienThoai, GiaBan: result2[i].GiaBan, DuongDan: result2[i].DuongDan, SoLuong: 1 });
                    } else {
                        shoppingProducts.push({ MaGioHang: result2[i].MaGioHang, MaSanPham: result2[i].MaSanPham, LoaiSanPham: result2[i].LoaiSanPham, TenSanPham: result2[i].TenDienThoai, GiaBan: result2[i].GiaKhuyenMai, DuongDan: result2[i].DuongDan, SoLuong: 1 });
                    }
                }
                //Query lấy các sản phẩm là phụ kiện trong giỏ hàng của người dùng
                var queryShoppingAccProducts = "SELECT MaGioHang, MaSanPham, LoaiSanPham, TenPhuKien, GiaBan, GiaKhuyenMai, DuongDan FROM giohang INNER JOIN phukien INNER JOIN hinhanhphukien ON giohang.MaSanPham=phukien.MaPhuKien AND phukien.MaPhuKien=hinhanhphukien.MaPhuKien WHERE giohang.MaKhachHang=" + result1[0].MaNguoiDung + " AND giohang.LoaiSanPham='Phụ kiện' GROUP BY phukien.MaPhuKien";
                connect_db.con.query(queryShoppingAccProducts, function (err3, result3) {
                    if (err3) {
                        throw err3;
                        res.json({ errorRes });
                    }

                    for (var i = 0; i < result3.length; i++) {
                        if (result3[i].GiaKhuyenMai == null) {
                            shoppingProducts.push({ MaGioHang: result3[i].MaGioHang, MaSanPham: result3[i].MaSanPham, LoaiSanPham: result3[i].LoaiSanPham, TenSanPham: result3[i].TenPhuKien, GiaBan: result3[i].GiaBan, DuongDan: result3[i].DuongDan, SoLuong: 1 });
                        } else {
                            shoppingProducts.push({ MaGioHang: result3[i].MaGioHang, MaSanPham: result3[i].MaSanPham, LoaiSanPham: result3[i].LoaiSanPham, TenSanPham: result3[i].TenPhuKien, GiaBan: result3[i].GiaKhuyenMai, DuongDan: result3[i].DuongDan, SoLuong: 1 });
                        }
                    }
                    res.json({ shoppingProducts });
                })
            })
        })
    }
});

router.post('/gio-hang', function (req, res, next) {
    var products = req.body.products;
    var diaChi = req.body.dia_chi;
    var hoTen = req.body.ho_ten;
    var sdt = req.body.sdt;
    var email = req.body.email;

    var idAccount = req.session.idAccount;
    //Query lấy mã điện thoại và số lượng còn lại của mỗi sản phẩm có trong giỏ hàng
    var queryPhoneQuantity = "SELECT P.MaDienThoai AS MaSanPham, P.SoLuong FROM dienthoai P INNER JOIN giohang SC ON P.MaDienThoai=SC.MaSanPham AND SC.LoaiSanPham='Điện thoại' AND SC.MaKhachHang=" + idAccount;
    connect_db.con.query(queryPhoneQuantity, function (err2, result2) {
        if (err2) {
            res.json({ errMess: "Đã xảy ra lỗi!" });
            throw err2;
        }

        //Query lấy mã phụ kiện và số lượng còn lại của mỗi phụ kiện có trong giỏ hàng
        var queryAccessoriesQuantity = "SELECT A.MaPhuKien AS MaSanPham, A.SoLuong FROM phukien A INNER JOIN giohang SC ON A.MaPhuKien=SC.MaSanPham AND SC.LoaiSanPham='Phụ kiện' AND SC.MaKhachHang=" + idAccount;
        connect_db.con.query(queryAccessoriesQuantity, function (err3, result3) {
            if (err3) {
                res.json({ errMess: "Đã xảy ra lỗi!" });
                throw err3;
            }

            //Kiểm tra nếu có sản phẩm nào mà số lượng sản phẩm còn lại trong kho không đủ thì trả về thông báo
            for (var i = 0; i < products.length; i++) {
                if (products[i].LoaiSanPham == "Điện thoại") {
                    for (var j = 0; j < result2.length; j++) {
                        if (result2[j].MaSanPham == products[i].MaSanPham && result2[j].SoLuong < products[i].SoLuong) {
                            var errorQuantity = "Xin lỗi!\nSố lượng sản phẩm '" + products[i].TenSanPham + "' trong kho không đủ."
                            res.json({ errorQuantity });
                        }
                    }
                } else if (products[i].LoaiSanPham == "Phụ kiện") {
                    for (var j = 0; j < result3.length; j++) {
                        if (result3[j].MaSanPham == products[i].MaSanPham && result3[j].SoLuong < products[i].SoLuong) {
                            var errorQuantity = "Xin lỗi!\nSố lượng sản phẩm '" + products[i].TenSanPham + "' trong kho không đủ."
                            res.json({ errorQuantity });
                        }
                    }
                }
            }

            //Query insert đơn hàng vào bảng đơn hàng
            var queryInsertIntoDonHang = "INSERT INTO `donhang` (`MADonHang`, `MaKhachHang`, `DiaChi`, `HoTen`, `SoDienThoai`, `Email`, `NgayDatHang`, `NgayChuyenHang`, `NgayNhanHang`, `TrangThai`, `GhiChu`) VALUES (NULL, '" + idAccount + "', '" + diaChi + "', '" + hoTen + "', '" + sdt + "', '" + email + "', current_timestamp(), NULL, NULL, 'Đang chờ', NULL)";
            connect_db.con.query(queryInsertIntoDonHang, function (err4, result4) {
                if (err4) {
                    res.json({ errMess: "Đã xảy ra lỗi!" });
                    throw err4;
                }

                //Lấy id của đơn hàng vừa mới thêm vào
                var MaDonHang = result4.insertId;
                //Query insert các sản phẩm có trong đơn hàng vào bảng chitietdonhang
                //Câu lệnh query
                var queryInsertIntoChiTietDonHang = "INSERT INTO `chitietdonhang` (`MADonHang`, `LoaiSanPham`, `MaSanPham`, `Mau`, `GiaBan`, `SoLuong`) VALUES ('" + MaDonHang + "', '" + products[0].LoaiSanPham + "', '" + products[0].MaSanPham + "', NULL, '" + products[0].GiaBan + "', '" + products[0].SoLuong + "')";
                //Mỗi vòng for sẽ thêm một sản phẩm vào
                for (var i = 1; i < products.length; i++) {
                    queryInsertIntoChiTietDonHang += ", ('" + MaDonHang + "', '" + products[i].LoaiSanPham + "', '" + products[i].MaSanPham + "', NULL, '" + products[i].GiaBan + "', '" + products[i].SoLuong + "')"
                }
                connect_db.con.query(queryInsertIntoChiTietDonHang, function (err5, result5) {
                    if (err5) {
                        res.json({ errMess: "Đã xảy ra lỗi!" });
                        throw err5;
                    }

                    //Query thay đổi số lượng còn lại của các sản phẩm sau khi đặt mua hàng thành công
                    var queryChangeQuantity = ""; //Biến lưu câu truy vấn
                    //Với mỗi vòng for biến queryChangeQuantity sẽ thay đổi và thêm vào câu query update
                    for (var i = 0; i < products.length; i++) {
                        if (products[i].LoaiSanPham == "Điện thoại") {
                            for (var j = 0; j < result2.length; j++) {
                                if (result2[j].MaSanPham == products[i].MaSanPham) {
                                    queryChangeQuantity += "UPDATE `dienthoai` SET `SoLuong` = " + (result2[j].SoLuong - products[i].SoLuong) + " WHERE `dienthoai`.`MaDienThoai` = " + products[i].MaSanPham + "; ";
                                }
                            }
                        } else if (products[i].LoaiSanPham == "Phụ kiện") {
                            for (var j = 0; j < result3.length; j++) {
                                if (result3[j].MaSanPham == products[i].MaSanPham) {
                                    queryChangeQuantity += "UPDATE `phukien` SET `SoLuong` = " + (result2[j].SoLuong - products[i].SoLuong) + " WHERE `phukien`.`MaPhuKien` = " + products[i].MaSanPham + "; ";
                                }
                            }
                        }
                    }
                    connect_db.con.query(queryChangeQuantity, function (err6, result6) {
                        if (err6) {
                            res.json({ errMess: "Đã xảy ra lỗi!" });
                            throw err6;
                        }

                        //Query xóa các sản phẩm có trong giỏ hàng của người dùng sau khi mua hàng thành công
                        var queryDeleteFromGioHang = "DELETE FROM `giohang` WHERE giohang.MaKhachHang=" + idAccount;
                        connect_db.con.query(queryDeleteFromGioHang, function (err7, result7) {
                            if (err7) {
                                res.json({ errMess: "Đã xảy ra lỗi!" });
                                throw err7;
                            }

                            //Thông báo thành công
                            res.json({ sucessMess: "Bạn đã mua hàng thành công!\nBạn có thể xem chi tiết trong giỏ hàng." }); 
                        })
                    })
                })
            })
        })
    })
})

module.exports = router;
