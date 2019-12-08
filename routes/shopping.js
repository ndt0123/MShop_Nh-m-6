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
    var account = req.body.account;
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
            var queryId = "SELECT MaNguoiDung FROM nguoidung WHERE TenDangNhap='" + account + "'"; //Câu query lấy id người dùng
            connect_db.con.query(queryId, function (err2, result2) { //Lấy id người dùng
                if (err2) throw err2;

                //Câu query insert vào bảng đơn hàng
                var queryInsertDonHang = "INSERT INTO`donhang`(`MADonHang`, `MaKhachHang`, `DiaChi`, `HoTen`, `SoDienThoai`, `Email`, `NgayDatHang`, `NgayChuyenHang`, `NgayNhanHang`, `TrangThai`, `GhiChu`) VALUES(NULL, '" + result2[0].MaNguoiDung + "', '" + diaChi + "', '" + hoTen + "', '" + sdt + "', '" + email + "', 'current_timestamp()', NULL, NULL, 'Đang chờ', NULL)";
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
            var queryId = "SELECT MaNguoiDung FROM nguoidung WHERE TenDangNhap='" + account + "'"; //Câu query lấy id người dùng
            connect_db.con.query(queryId, function (err2, result2) { //Lấy id người dùng
                if (err2) throw err2;

                //Câu query insert vào bảng đơn hàng
                var queryInsertDonHang = "INSERT INTO`donhang`(`MADonHang`, `MaKhachHang`, `DiaChi`, `HoTen`, `SoDienThoai`, `Email`, `NgayDatHang`, `NgayChuyenHang`, `NgayNhanHang`, `TrangThai`, `GhiChu`) VALUES(NULL, '" + result2[0].MaNguoiDung + "', '" + diaChi + "', '" + hoTen + "', '" + sdt + "', '" + email + "', 'current_timestamp()', NULL, NULL, 'Đang chờ', NULL)";
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
            })
        }
    })    
});

router.get('/gio-hang', function (req, res, next) {

});

module.exports = router;
