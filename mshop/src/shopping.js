import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import NotFound from './components/404NotFound.js';

var shopping;
var paymentAccessories;
var paymentPhone;
var paymentShoppingCart;

class PaymentAccessories extends React.Component {
    constructor(props) {
        super(props);
        paymentAccessories = this;
        this.state = {
            productsNumber: 1,
            detail: [{
                id: 0,
                ten: "",
                hinhAnh: "",
                giaBan: 0,
                soLuong: 0,
                loai: "",
                hang: ""
            }]
        };
    }

    onClickPlusButton = () => {
        var search = window.location.search;
        var pathname = window.location.pathname;
        axios.get(pathname + search).then(result => {
            if (typeof result.data.error == "undefined") {
                if (result.data.detail) {
                    if (result.data.detail.soLuong > this.state.productsNumber) {
                        this.setState({
                            productsNumber: this.state.productsNumber + 1
                        })
                        if (this.state.productsNumber > 0) {
                            document.getElementById("minus-prd-btn").style.color = "#288ad6";
                            document.getElementById("minus-prd-btn").style.cursor = "pointer";
                        }
                    } else {
                        alert("Xin lỗi!\nSố lượng sản phẩm trong kho không đủ.")
                    }
                } else {
                    shopping.setState({
                        error: result.data.error
                    })
                }
            } else {
                shopping.setState({
                    error: result.data.error
                })
            }
        });
        
    }
    onClickMinusButton = () => {
        if (this.state.productsNumber > 1) {
            this.setState({
                productsNumber: this.state.productsNumber - 1
            })
        }
        if (this.state.productsNumber > 2) {
            document.getElementById("minus-prd-btn").style.color = "#288ad6";
            document.getElementById("minus-prd-btn").style.cursor = "pointer";
        } else {
            document.getElementById("minus-prd-btn").style.color = "#afafaf";
            document.getElementById("minus-prd-btn").style.cursor = "default";
        }
    }

    componentDidMount() {
        var search = window.location.search;
        var pathname = window.location.pathname;
        axios.get(pathname + search).then(result => {

            if (typeof result.data.error == "undefined") {
                this.setState({
                    detail: result.data.detail
                })
            } else {
                shopping.setState({
                    error: result.data.error
                })
            }
            console.log(result);
        });
    }

    render() {
        return (
            <div className="col-xs-12 payment-products">
                <div className="col-xs-12 detail" style={{ padding: "0px" }}>
                    <div className="col-xs-3 img">
                        <img className="col-xs-12" src={this.state.detail.hinhAnh} style={{ padding: "0px" }} />
                    </div>

                    <div className="col-xs-9 prd-info">
                        <div className="col-xs-12 info">
                            <b className="float-left">{this.state.detail.ten}</b>
                            <b className="float-right" style={{ color: "#b10000" }}>{this.state.detail.giaBan} đ</b>
                        </div>
                        <div className="col-xs-12 info">
                            <p className="col-xs-4">Loại phụ kiện: </p> <span className="col-xs-8">{this.state.detail.loai}</span>
                            <p className="col-xs-4">Hãng sản xuất: </p> <span className="col-xs-8">{this.state.detail.hang}</span>
                        </div>
                        <div className="col-xs-12 color-and-amount" style={{ padding: "10px 0px" }}>
                            <div className="col-xs-6 color" style={{ padding: "0px", margin: "1px 0px" }}>

                            </div>
                            <div className="col-xs-6 amount" style={{ padding: "0px" }}>
                                <div className="float-right" id="plus-prd-btn" style={{ cursor: "pointer", color: "#288ad6" }} onClick={this.onClickPlusButton}><span className="fa fa-plus"></span></div>
                                <div className="float-right" id="prd-amount" style={{ borderLeft: "0px", borderRight: "0px", width: "36px", textAlign: "center" }}>{this.state.productsNumber}</div>
                                <div className="float-right" id="minus-prd-btn" style={{ cursor: "default", color: "#afafaf" }} onClick={this.onClickMinusButton}><span className="fa fa-minus"></span></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-xs-12 total-payment" style={{ borderTop: "solid 1px #f0f0f0", padding: "15px 0px" }}>
                    <b className="float-left">Tổng tiền thanh toán:</b>
                    <b className="float-right" style={{ color: "#b10000" }}>{this.state.detail.giaBan * this.state.productsNumber} đ</b>
                </div>
            </div>
        );
    }
}

class PaymentPhone extends React.Component {
    constructor(props) {
        super(props);
        paymentPhone = this;
        this.state = {
            productsNumber: 1,
            detail: [{
                id: 0,
                ten: "",
                hinhAnh: "",
                giaBan: 0,
                soLuong: 0,
                heDieuHanh: "",
                ram: 0,
                boNhoTrong: 0,
                dungLuongPin: 0,
                manHinh: "",
                cameraSau: "",
                cameraTruoc: "",
                sim: ""
            }]
        };
    }

    onClickPlusButton = () => {
        var search = window.location.search;
        var pathname = window.location.pathname;
        axios.get(pathname + search).then(result => {
            if (typeof result.data.error == "undefined") {
                if (result.data.detail) {
                    if (result.data.detail.soLuong > this.state.productsNumber) {
                        this.setState({
                            productsNumber: this.state.productsNumber + 1
                        })
                        if (this.state.productsNumber > 0) {
                            document.getElementById("minus-prd-btn").style.color = "#288ad6";
                            document.getElementById("minus-prd-btn").style.cursor = "pointer";
                        }
                    } else {
                        alert("Xin lỗi!\nSố lượng sản phẩm trong kho không đủ.")
                    }
                } else {
                    shopping.setState({
                        error: result.data.error
                    })
                }
            } else {
                shopping.setState({
                    error: result.data.error
                })
            }
        });
    }
    onClickMinusButton = () => {
        if (this.state.productsNumber > 1) {
            this.setState({
                productsNumber: this.state.productsNumber - 1
            })
        }
        if (this.state.productsNumber > 2) {
            document.getElementById("minus-prd-btn").style.color = "#288ad6";
            document.getElementById("minus-prd-btn").style.cursor = "pointer";
        } else {
            document.getElementById("minus-prd-btn").style.color = "#afafaf";
            document.getElementById("minus-prd-btn").style.cursor = "default";
        }
    }

    componentDidMount() {
        var search = window.location.search;
        var pathname = window.location.pathname;
        axios.get(pathname + search).then(result => {
            
            if (typeof result.data.error == "undefined") {
                this.setState({
                    detail: result.data.detail
                })
            } else {
                shopping.setState({
                    error: result.data.error
                })
            }
        });
    }

    render() {
        return (
            <div className="col-xs-12 payment-products">
                <div className="col-xs-12 detail" style={{ padding: "0px" }}>
                    <div className="col-xs-3 img">
                        <img className="col-xs-12" src={this.state.detail.hinhAnh} style={{ padding: "0px" }} />
                    </div>

                    <div className="col-xs-9 prd-info">
                        <div className="col-xs-12 info">
                            <b className="float-left">{this.state.detail.ten}</b>
                            <b className="float-right" style={{ color: "#b10000" }}>{this.state.detail.giaBan} đ</b>
                        </div>
                        <div className="col-xs-12 info">
                            <p className="col-xs-4">Hệ điều hành: </p> <span className="col-xs-8">{this.state.detail.heDieuHanh}</span>
                            <p className="col-xs-4">Ram: </p> <span className="col-xs-8">{this.state.detail.ram} GB</span>
                            <p className="col-xs-4">Bộ nhớ trong: </p> <span className="col-xs-8">{this.state.detail.boNhoTrong} GB</span>
                            <p className="col-xs-4">Dung lượng pin: </p> <span className="col-xs-8">{this.state.detail.dungLuongPin} mAh</span>
                            <p className="col-xs-4">Màn hình: </p> <span className="col-xs-8">{this.state.detail.manHinh}</span>
                            <p className="col-xs-4">Camera sau: </p> <span className="col-xs-8">{this.state.detail.cameraSau}</span>
                            <p className="col-xs-4">Camera trước: </p> <span className="col-xs-8">{this.state.detail.cameraTruoc}</span>
                            <p className="col-xs-4">Thẻ SIM: </p> <span className="col-xs-8">{this.state.detail.sim}</span>
                        </div>
                        <div className="col-xs-12 color-and-amount" style={{ padding: "10px 0px" }}>
                            <div className="col-xs-6 color" style={{ padding: "0px", margin: "1px 0px" }}>

                            </div>
                            <div className="col-xs-6 amount" style={{ padding: "0px" }}>
                                <div className="float-right" id="plus-prd-btn" style={{ cursor: "pointer", color: "#288ad6" }} onClick={this.onClickPlusButton}><span className="fa fa-plus"></span></div>
                                <div className="float-right" id="prd-amount" style={{ borderLeft: "0px", borderRight: "0px", width: "36px", textAlign: "center" }}>{this.state.productsNumber}</div>
                                <div className="float-right" id="minus-prd-btn" style={{ cursor: "default", color: "#afafaf" }} onClick={this.onClickMinusButton}><span className="fa fa-minus"></span></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-xs-12 total-payment" style={{ borderTop: "solid 1px #f0f0f0", padding: "15px 0px" }}>
                    <b className="float-left">Tổng tiền thanh toán:</b>
                    <b className="float-right" style={{ color: "#b10000" }}>{this.state.detail.giaBan * this.state.productsNumber} đ</b>
                </div>
            </div>
            );
    }
}

class PaymentShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        paymentShoppingCart = this;
        this.state = {
            shoppingProducts: [{ MaGioHang: 0, MaSanPham: 0, LoaiSanPham: "", TenSanPham: "", GiaBan: 0, DuongDan: "", SoLuong: 1 }],
            totalAmount: 0
        }
    }
    componentDidMount() {
        axios.get('/mua-hang/gio-hang').then(result => {
            if (typeof result.data.errorLogin != "undefined") {
                alert(result.data.errorLogin);
                window.location = "http://localhost:3000/tai-khoan/dang-nhap";
            } else {
                this.setState({
                    shoppingProducts: result.data.shoppingProducts
                })
                for (var i = 0; i < this.state.shoppingProducts.length; i++) {
                    this.setState({
                        totalAmount: this.state.totalAmount + this.state.shoppingProducts[i].GiaBan
                    })
                }
            }
        });
        
    }
    render() {
        return (
            <div className="col-xs-12 payment-products">
                {
                    this.state.shoppingProducts.map(function (note, index) {
                        return (
                            <div className="col-xs-12 detail" style={{ padding: "0px", margin: "10px 0px" }} key={index}>
                                <div className="col-xs-3 img">
                                    <img className="col-xs-12" src={note.DuongDan} style={{ padding: "0px" }} />
                                </div>

                                <div className="col-xs-9 prd-info">
                                    <div className="col-xs-12 info" style={{ padding: "0px" }}>
                                        <b className="float-left col-sm-8 col-xs-7" style={{ padding: "0px" }}>{note.TenSanPham}</b>
                                        <b className="float-right col-sm-4 col-xs-5" style={{ color: "#b10000", paddingRight: "0px", textAlign: "right" }}>{note.GiaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</b>
                                    </div>
                                    
                                    <div className="col-xs-12 color-and-amount" style={{ padding: "10px 0px" }}>
                                        <div className="float-left amount" style={{ padding: "0px" }}>
                                            <div className="float-left" id={"minus_" + index} style={{ cursor: "default", color: "#afafaf" }} onClick={() => {
                                                if (note.SoLuong > 1) {
                                                    paymentShoppingCart.state.shoppingProducts[index].SoLuong = note.SoLuong - 1;
                                                    paymentShoppingCart.setState(paymentShoppingCart.state);

                                                    paymentShoppingCart.setState({
                                                        totalAmount: paymentShoppingCart.state.totalAmount - note.GiaBan
                                                    })
                                                }
                                                if (paymentShoppingCart.state.shoppingProducts[index].SoLuong > 1) {
                                                    document.getElementById("minus_" + index).style.color = "#288ad6";
                                                    document.getElementById("minus_" + index).style.cursor = "pointer";
                                                } else {
                                                    document.getElementById("minus_" + index).style.color = "#afafaf";
                                                    document.getElementById("minus_" + index).style.cursor = "default";
                                                }
                                            }}><span className="fa fa-minus"></span></div>
                                            <div className="float-left" id="prd-amount" style={{ borderLeft: "0px", borderRight: "0px", width: "36px", textAlign: "center" }}>{note.SoLuong}</div>
                                            <div className="float-left" id={"plus_" + index} style={{ cursor: "pointer", color: "#288ad6" }} onClick={() => {
                                                if (note.LoaiSanPham == "Điện thoại") {
                                                    axios.get('/mua-hang/dien-thoai?id=' + note.MaSanPham).then(result => {
                                                        if (typeof result.data.error == "undefined") {
                                                            if (result.data.detail) {
                                                                if (result.data.detail.soLuong > note.SoLuong) {
                                                                    paymentShoppingCart.state.shoppingProducts[index].SoLuong = note.SoLuong + 1;
                                                                    paymentShoppingCart.setState(paymentShoppingCart.state);

                                                                    paymentShoppingCart.setState({
                                                                        totalAmount: paymentShoppingCart.state.totalAmount + note.GiaBan
                                                                    })
                                                                    if (paymentShoppingCart.state.shoppingProducts[index].SoLuong > 0) {
                                                                        document.getElementById("minus_" + index).style.color = "#288ad6";
                                                                        document.getElementById("minus_" + index).style.cursor = "pointer";
                                                                    }
                                                                } else {
                                                                    alert("Xin lỗi!\nSố lượng sản phẩm trong kho không đủ.")
                                                                }
                                                            } else {
                                                                alert("Đã xảy ra lỗi");
                                                            }
                                                        } else {
                                                            alert("Đã xảy ra lỗi");
                                                        }
                                                    });
                                                } else if (note.LoaiSanPham == "Phụ kiện") {
                                                    axios.get('/mua-hang/phu-kien?id=' + note.MaSanPham).then(result => {
                                                        if (typeof result.data.error == "undefined") {
                                                            if (result.data.detail) {
                                                                if (result.data.detail.soLuong > note.SoLuong) {
                                                                    paymentShoppingCart.state.shoppingProducts[index].SoLuong = note.SoLuong + 1;
                                                                    paymentShoppingCart.setState(paymentShoppingCart.state);

                                                                    paymentShoppingCart.setState({
                                                                        totalAmount: paymentShoppingCart.state.totalAmount + note.GiaBan
                                                                    })
                                                                    if (paymentShoppingCart.state.shoppingProducts[index].SoLuong > 0) {
                                                                        document.getElementById("minus_" + index).style.color = "#288ad6";
                                                                        document.getElementById("minus_" + index).style.cursor = "pointer";
                                                                    }
                                                                } else {
                                                                    alert("Xin lỗi!\nSố lượng sản phẩm trong kho không đủ.")
                                                                }
                                                            } else {
                                                                alert("Đã xảy ra lỗi");
                                                            }
                                                        } else {
                                                            alert("Đã xảy ra lỗi");
                                                        }
                                                    });
                                                }
                                            }}><span className="fa fa-plus"></span></div>
                                        </div>
                                        <div className="float-right color" style={{ padding: "0px", margin: "1px 0px" }}>
                                            <p style={{ color: "red", cursor: "pointer" }} title="Xóa khỏi giỏ hàng" onClick={() => {
                                                var mess = window.confirm("Bạn có chăc muốn xóa sản phẩm khỏi giỏ hàng không?");
                                                if (mess == true) {
                                                    axios.get('/gio-hang/xoa?id=' + note.MaGioHang).then(result => { })
                                                    axios.get('/mua-hang/gio-hang').then(result => {
                                                        paymentShoppingCart.setState({
                                                            shoppingProducts: result.data.shoppingProducts
                                                        })
                                                    });
                                                }
                                            }}>Xóa</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            );
                    })
                }

                <div className="col-xs-12 total-payment" style={{ borderTop: "solid 1px #f0f0f0", padding: "15px 0px" }}>
                    <b className="float-left">Tổng tiền thanh toán:</b>
                    <b className="float-right" style={{ color: "#b10000" }}>{this.state.totalAmount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</b>
                </div>
            </div>
            );
    }
}

class Shopping extends React.Component {
    constructor(props) {
        super(props);
        shopping = this;
        this.state = {
            city: [
                "TP.Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre",
                "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau", "Cần Thơ", "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai",
                "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa",
                "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận",
                "Phú Thọ", "Phú Yên", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình",
                "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái"
            ],
            district: {
                "TP.Hồ Chí Minh": ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 9", "Quận 10", "Quận 11", "Quận 12",
                    "Quận Tân Bình", "Quận Tân Phú", "Quận Phú Nhuận", "Quận Gò Vấp", "Quận Bình Thạnh", "Quận Thủ Đức", "Quận Bình Tân", "Huyện Hóc Môn",
                    "Huyện Củ Chi", "Huyện Nhà Bè", "Huyện Bình Chánh", "Huyện Cần Giờ"],
                "Hà Nội": ["Quận Thanh Xuân", "Quận Tây Hồ", "Quận Nam Từ Liêm", "Quận Long Biên", "Quận Hoàng Mai", "Quận Hoàn Kiếm", "Quận Hai Bà Trưng",
                    "Quận Hà Đông", "Quận Đống Đa", "Quận Cầu Giấy", "Quận Bắc Từ Liêm", "Quận Ba Đình", "Thị xã Sơn Tây", "Huyện Ứng Hòa", "Huyện Thường Tín",
                    "Huyện Thanh Trì", "Huyện Thanh Oai", "Huyện Thạch Thất", "Huyện Sóc Sơn", "Huyện Quốc Oai", "Huyện Phúc Thọ", "Huyện Phú Xuyên", "Huyện Mỹ Đức",
                    "Huyện Mê Linh", "Huyện Hoài Đức", "Huyện Gia Lâm", "Huyện Đông Anh", "Huyện Đan Phượng", "Huyện Chương Mỹ", "Huyện Ba Vì"],
                "Đà Nẵng": ["Quận Cẩm Lệ", "Quận Liên Chiểu", "Quận Hải Châu", "Quận Thanh Khê", "Quận Ngũ Hành Sơn", "Quận Sơn Trà", "Huyện Hòa Vang"],
                "An Giang": ["Thành Phố Châu Đốc", "Huyện Châu Thành", "Huyện Chợ Mới", "Huyện Tri Tôn", "Huyện Tịnh Biên", "Huyện Thoại Sơn", "Huyện Châu Phú",
                    "Huyện Phú Tân", "Huyện An Phú", "Thị xã Tân Châu", "TP. Long Xuyên"],
                "Bà Rịa - Vũng Tàu": ["TP. Bà Rịa", "Huyện Châu Đức", "Huyện Côn Đảo", "Huyện Đất Đỏ", "Huyện Long Điền", "Huyện Tân Thành", "TP. Vũng Tàu",
                    "Huyện Xuyên Mộc", "Thị xã Phú Mỹ"],
                "Bắc Giang": ["TP.Bắc Giang", "Huyện Hiệp Hòa", "Huyện Lạng Giang", "Huyện Lục Nam", "Huyện Lục Ngạn", "Huyện Sơn Động", "Huyện Việt Yên",
                    "Huyện Yên Dũng", "Huyện Yên Thế", "Huyện Tân Yên"],
                "Bắc Kạn": ["Huyện Ba Bể", "Thành phố Bắc Kạn", "Huyện Bạch Thông", "Huyện Chợ Đồn", "Huyện Chợ Mới", "Huyện Na Rì", "Huyện Ngân Sơn", "Huyện Pác Nặm"],
                "Bạc Liêu": ["Tp.Bạc Liêu", "Huyện Đông Hải", "Thị xã Giá Rai", "Huyện Hòa Bình", "Huyện Hồng Dân", "Huyện Phước Long", "Huyện Vĩnh Lợi"],
                "Bắc Ninh": ["TP.Bắc Ninh", "Huyện Gia Bình", "Huyện Lương Tài", "Huyện Quế Võ", "Huyện Thuận Thành", "Huyện Tiên Du", "Thị xã Từ Sơn", "Huyện Yên Phong"],
                "Bến Tre": ["Huyện Ba Tri", "TP.Bến Tre", "Huyện Bình Đại", "Huyện Châu Thành", "Huyện Chợ Lách", "Huyện Giồng Trôm", "Huyện Mỏ Cày Bắc",
                    "Huyện Mỏ Cày Nam", "Huyện Thạnh Phú", "Huyện Mỏ Cày"],
                "Bình Định": ["Huyện An Lão", "Thị xã An Nhơn", "Huyện Hoài Ân", "Huyện Hoài Nhơn", "Huyện Phù Cát", "Huyện Phù Mỹ", "Tp.Quy Nhơn", "Huyện Tây Sơn",
                    "Huyện Tuy Phước", "Huyện Vân Canh", "Huyện Vĩnh Thạnh"],
                "Bình Dương": ["TP. Thủ Dầu Một", "Thị xã Bến Cát", "Huyện Dầu Tiếng", "Thị xã Dĩ An", "Huyện Phú Giáo", "Thị xã Tân Uyên", "Thị xã Thuận An",
                    "Huyện Bàu Bàng", "Huyện Bắc Tân Uyên"],
                "Bình Phước": ["Thị xã Bình Long", "Huyện Bù Đăng", "Huyện Bù Đốp", "Huyện Chơn Thành", "Huyện Đồng Phú", "Thị xã Đồng Xoài", "Huyện Lộc Ninh",
                    "Thị xã Phước Long", "Huyện Bù Gia Mập", "Huyện Hớn Quản", "Huyện Phú Riềng"],
                "Bình Thuận": ["Huyện Bắc Bình", "Huyện Đức Linh", "Huyện Hàm Tân", "Huyện Hàm Thuận Bắc", "Huyện Hàm Thuận Nam", "Thị xã La Gi", "TP. Phan Thiết",
                    "Huyện Phú Quý", "Huyện Tánh Linh", "Huyện Tuy Phong"],
                "Cà Mau": ["Huyện Ngọc Hiển", "Huyện Năm Căn", "Huyện U Minh", "Huyện Cái Nước", "Huyện Đầm Dơi", "Huyện Thới Bình", "Huyện Phú Tân",
                    "Huyện Trần Văn Thời", "TP.Cà Mau"],
                "Cần Thơ": ["Quận Thốt Nốt", "Quận Ninh Kiều", "Quận Bình Thủy", "Quận Cái Răng", "Quận Ô Môn", "Huyện Phong Điền", "Huyện Cờ Đỏ", "Huyện Vĩnh Thạnh",
                    "Huyện Thới Lai", "Vị Thủy"],
                "Cao Bằng": ["Huyện Bảo Lạc", "Huyện Bảo Lâm", "Thành phố Cao Bằng", "Huyện Hà Quảng", "Huyện Hạ Lang", "Huyện Hòa An", "Huyện Nguyên Bình", "Huyện Phục Hòa",
                    "Huyện Quảng Uyên", "Huyện Thạch An", "Huyện Thông Nông", "Huyện Trà Lĩnh", "Huyện Trùng Khánh"],
                "Đắk Lắk": ["Thị xã Buôn Hồ", "Huyện Cư Kuin", "Huyện Cư M'gar", "Huyện Ea H'leo", "Huyện Ea Kar", "Huyện Ea Súp", "Huyện Krông Ana", "Huyện Krông Bông",
                    "Huyện Krông Búk", "Huyện Krông Năng", "Huyện Krông Pắk", "Huyện Lăk", "Huyện M'Đrăk"],
                "Đắk Nông": ["Huyện Cư Jút", "Huyện Đăk Glong", "Huyện Đăk Mil", "Huyện Đăk RLấp", "Huyện Đăk Song", "Thị xã Gia Nghĩa", "Huyện Krông Nô", "Huyện Tuy Đức"],
                "Điện Biên": ["Huyện Điện Biên", "Huyện Điện Biên Đông", "TP.Điện Biên Phủ", "Huyện Mường Ảng", "Huyện Mường Chà", "Thị xã Mường Lay", "Huyện Mường Nhé",
                    "Huyện Tủa Chùa", "Huyện Tuần Giáo", "Huyện Nậm Pồ"],
                "Đồng Nai": ["TP. Biên Hòa", "Huyện Xuân Lộc", "Thị xã Long Khánh", "Huyện Nhơn Trạch", "Huyện Long Thành", "Huyện Tân Phú", "Huyện Định Quán",
                    "Huyện Cẩm Mỹ", "Huyện Thống Nhất", "Huyện Trảng Bom", "Huyện Vĩnh Cửu"],
                "Đồng Tháp": ["Tp. Cao Lãnh", "Huyện Cao Lãnh", "Huyện Châu Thành", "Huyện Hồng Ngự", "Thị xã Hồng Ngự", "Huyện Lai Vung", "Huyện Lấp Vò", "Tp. Sa Đéc",
                    "Huyện Tam Nông", "Huyện Tân Hồng", "Huyện Thanh Bình", "Huyện Tháp Mười"],
                "Gia Lai": ["Thị xã An Khê", "Thị xã Ayun Pa", "Huyện Chư Păh", "Huyện Chư Prông", "Huyện Chư Sê", "Huyện Đăk Đoa", "Huyện Đắk Pơ", "Huyện Đức Cơ",
                    "Huyện Ia Grai", "Huyện Ia Pa", "Huyện KBang", "Huyện Kông Chro", "Huyện Krông Pa", "Huyện Mang Yang", "Huyện Phú Thiện", "Tp.Pleiku", "Huyện Chư Pưh"],
                "Hà Giang": ["Huyện Bắc Mê", "Huyện Bắc Quang", "Huyện Đồng Văn", "Tp.Hà Giang", "Huyện Hoàng Su Phì", "Huyện Mèo Vạc", "Huyện Quản Bạ", "Huyện Quang Bình",
                    "Huyện Vị Xuyên", "Huyện Xín Mần", "Huyện Yên Minh"],
                "Hà Nam": ["Huyện Bình Lục", "Huyện Duy Tiên", "Huyện Kim Bảng", "Huyện Lý Nhân", "Tp.Phủ Lý", "Huyện Thanh Liêm"],
                "Hà Tĩnh": ["Huyện Cẩm Xuyên", "Huyện Can Lộc", "Huyện Đức Thọ", "Tp.Hà Tĩnh", "Thị xã Hồng Lĩnh", "Huyện Hương Khê", "Huyện Hương Sơn", "Huyện Kỳ Anh",
                    "Huyện Lộc Hà", "Huyện Nghi Xuân", "Huyện Thạch Hà", "Huyện Vũ Quang", "Thị xã Kỳ Anh"],
                "Hải Dương": ["Huyện Bình Giang", "Huyện Cẩm Giàng", "Thị xã Chí Linh", "Huyện Gia Lộc", "Tp.Hải Dương", "Huyện Kim Thành", "Thị xã Kinh Môn",
                    "Huyện Nam Sách", "Huyện Ninh Giang", "Huyện Thanh Hà", "Huyện Thanh Miện", "Huyện Tứ Kỳ"],
                "Hải Phòng": ["Huyện An Dương", "Huyện An Lão", "Huyện Bạch Long Vĩ", "Huyện Cát Hải", "Quận Dương Kinh", "Quận Đồ Sơn", "Quận Hải An", "Quận Hồng Bàng",
                    "Quận Kiến An", "Huyện Kiến Thụy", "Quận Lê Chân", "Quận Ngô Quyền", "Huyện Thuỷ Nguyên", "Huyện Tiên Lãng", "Huyện Vĩnh Bảo"],
                "Hậu Giang": ["Huyện Châu Thành", "Huyện Châu Thành A", "Huyện Long Mỹ", "Thị xã Ngã Bảy", "Huyện Phụng Hiệp", "TP. Vị Thanh", "Huyện Vị Thủy", "Thị Xã Long Mỹ"],
                "Hòa Bình": ["Huyện Cao Phong", "Huyện Đà Bắc", "Tp.Hòa Bình", "Huyện Kim Bôi", "Huyện Kỳ Sơn", "Huyện Lạc Sơn", "Huyện Lạc Thủy", "Huyện Lương Sơn",
                    "Huyện Mai Châu", "Huyện Tân Lạc", "Huyện Yên Thủy"],
                "Hưng Yên": ["Huyện Ân Thi", "Tp.Hưng Yên", "Huyện Khoái Châu", "Huyện Kim Động", "Huyện Mỹ Hào", "Huyện Phù Cừ", "Huyện Tiên Lữ", "Huyện Văn Giang",
                    "Huyện Văn Lâm", "Huyện Yên Mỹ"],
                "Khánh Hòa": ["Thành phố Cam Ranh", "Huyện Diên Khánh", "Huyện Khánh Sơn", "Huyện Khánh Vĩnh", "Tp.Nha Trang", "Thị xã Ninh Hòa", "Huyện Đảo Trường Sa",
                    "Huyện Vạn Ninh", "Huyện Cam Lâm"],
                "Kiên Giang": ["Huyện Kiên Lương", "Thị xã Hà Tiên", "Huyện Hòn Đất", "Huyện Giồng Riềng", "Huyện An Biên", "Huyện Gò Quao", "Huyện Tân Hiệp",
                    "Huyện Vĩnh Thuận", "Huyện An Minh", "Huyện Châu Thành", "Huyện Kiên Hải", "Huyện Phú Quốc", "Tp.Rạch Giá", "Huyện U Minh Thượng", "Huyện Giang Thành"],
                "Kon Tum": ["Thành Phố Kon Tum", "Huyện Đăk Glei", "Huyện Ngọc Hồi", "Huyện Đăk Tô", "Huyện Sa Thầy", "Huyện Kon Plông", "Huyện Đăk Hà", "Huyện Kon Rẫy",
                    "Huyện Tu Mơ Rông", "Huyện Ia H`Drai"],
                "Lai Châu": ["Thành Phố Lai Châu", "Huyện Mường Tè", "Huyện Phong Thổ", "Huyện Sìn Hồ", "Huyện Tam Đường", "Huyện Tân Uyên", "Huyện Than Uyên", "Huyện Nậm Nhùn"],
                "Lâm Đồng": ["Huyện Bảo Lâm", "Tp.Bảo Lộc", "Huyện Cát Tiên", "Huyện Đạ Huoai", "Tp.Đà Lạt", "Huyện Đạ Tẻh", "Huyện Đam Rông", "Huyện Di Linh",
                    "Huyện Đức Trọng", "Huyện Lạc Dương", "Huyện Lâm Hà"],
                "Lạng Sơn": ["Huyện Bắc Sơn", "Huyện Bình Gia", "Huyện Cao Lộc", "Huyện Chi Lăng", "Huyện Đình Lập", "Huyện Hữu Lũng", "Thành Phố Lạng Sơn",
                    "Huyện Lộc Bình", "Huyện Tràng Định", "Huyện Văn Lãng", "Huyện Văn Quan"],
                "Lào Cai": ["Huyện Bắc Hà", "Huyện Bảo Thắng", "Huyện Bảo Yên", "Huyện Bát Xát", "Tp.Lào Cai", "Huyện Mường Khương", "Huyện Sa Pa",
                    "Huyện Si Ma Cai", "Huyện Văn Bàn"],
                "Long An": ["Huyện Bến Lức", "Huyện Cần Đước", "Huyện Cần Giuộc", "Huyện Châu Thành", "Huyện Đức Hòa", "Huyện Đức Huệ", "Huyện Mộc Hóa", "Tp.Tân An",
                    "Huyện Tân Hưng", "Huyện Tân Thạnh", "Huyện Tân Trụ", "Huyện Thạnh Hóa", "Huyện Thủ Thừa", "Huyện Vĩnh Hưng", "Thị xã Kiến Tường"],
                "Nam Định": ["Huyện Giao Thủy", "Huyện Hải Hậu", "Huyện Mỹ Lộc", "Tp.Nam Định", "Huyện Nam Trực", "Huyện Nghĩa Hưng", "Huyện Trực Ninh", "Huyện Vụ Bản",
                    "Huyện Xuân Trường", "Huyện Ý Yên"],
                "Nghệ An": ["Huyện Anh Sơn", "Huyện Con Cuông", "Thị xã Cửa Lò", "Huyện Diễn Châu", "Huyện Đô Lương", "Huyện Hưng Nguyên", "Huyện Kỳ Sơn", "Huyện Nam Đàn",
                    "Huyện Nghi Lộc", "Huyện Nghĩa Đàn", "Huyện Quế Phong", "Huyện Quỳ Châu", "Huyện Quỳ Hợp", "Huyện Quỳnh Lưu", "Huyện Tân Kỳ", "Thị xã Thái Hòa",
                    "Huyện Thanh Chương", "Huyện Tương Dương", "Tp.Vinh", "Huyện Yên Thành", "Thị xã Hoàng Mai"],
                "Ninh Bình": ["Huyện Gia Viễn", "Huyện Hoa Lư", "Huyện Kim Sơn", "Huyện Nho Quan", "Tp.Ninh Bình", "Thành phố Tam Điệp", "Huyện Yên Khánh", "Huyện Yên Mô"],
                "Ninh Thuận": ["Huyện Bác Ái", "Huyện Ninh Hải", "Huyện Ninh Phước", "Huyện Ninh Sơn", "Tp.Phan Rang-Tháp Chàm", "Huyện Thuận Bắc", "Huyện Thuận Nam"],
                "Phú Thọ": ["Huyện Cẩm Khê", "Huyện Đoan Hùng", "Huyện Hạ Hòa", "Huyện Lâm Thao", "Huyện Phù Ninh", "Thị xã Phú Thọ", "Huyện Tam Nông", "Huyện Tân Sơn",
                    "Huyện Thanh Ba", "Huyện Thanh Sơn", "Huyện Thanh Thủy", "Tp.Việt Trì", "Huyện Yên Lập"],
                "Phú Yên": ["Huyện Đông Hòa", "Huyện Đồng Xuân", "Huyện Phú Hòa", "Huyện Sơn Hòa", "Thị xã Sông Cầu", "Huyện Sông Hinh", "Huyện Tây Hòa", "Huyện Tuy An",
                    "Tp.Tuy Hòa"],
                "Quảng Bình": ["Huyện Bố Trạch", "Tp.Đồng Hới", "Huyện Lệ Thủy", "Huyện Minh Hóa", "Huyện Quảng Ninh", "Huyện Quảng Trạch", "Huyện Tuyên Hóa", "Thị xã Ba Đồn"],
                "Quảng Nam": ["Huyện Bắc Trà My", "Huyện Đại Lộc", "Huyện Điện Bàn", "Huyện Đông Giang", "Huyện Duy Xuyên", "Huyện Hiệp Đức", "Tp.Hội An", "Huyện Nam Giang",
                    "Huyện Nam Trà My", "Huyện Nông Sơn", "Huyện Núi Thành", "Huyện Phú Ninh", "Huyện Phước Sơn", "Huyện Quế Sơn", "Tp.Tam Kỳ", "Huyện Tây Giang",
                    "Huyện Thăng Bình", "Huyện Tiên Phước"],
                "Quảng Ngãi": ["Huyện Ba Tơ", "Huyện Bình Sơn", "Huyện Đức Phổ", "Huyện Lý Sơn", "Huyện Minh Long", "Huyện Mộ Đức", "Huyện Nghĩa Hành", "Tp.Quảng Ngãi",
                    "Huyện Sơn Hà", "Huyện Sơn Tây", "Huyện Sơn Tịnh", "Huyện Tây Trà", "Huyện Trà Bồng", "Huyện Tư Nghĩa", "Tịnh Kỳ "],
                "Quảng Ninh": ["Huyện Ba Chẽ", "Huyện Bình Liêu", "TP. Cẩm Phả", "Huyện Cô Tô", "Huyện Đầm Hà", "Thị xã Đông Triều", "Tp.Hạ Long", "Huyện Hải Hà",
                    "Huyện Hoành Bồ", "Tp.Móng Cái", "Huyện Tiên Yên", "Huyện Vân Đồn", "Thị xã Quảng Yên", "TP. Uông Bí", "Huyện Yên Hưng"],
                "Quảng Trị": ["Huyện Cam Lộ", "Huyện Cồn Cỏ", "Huyện Đa Krông", "Tp.Đông Hà", "Huyện Gio Linh", "Huyện Hải Lăng", "Huyện Hướng Hóa", "Thị xã Quảng Trị",
                    "Huyện Triệu Phong", "Huyện Vĩnh Linh"],
                "Sóc Trăng": ["Huyện Châu Thành", "Huyện Cù Lao Dung", "Huyện Kế Sách", "Huyện Long Phú", "Huyện Mỹ Tú", "Huyện Mỹ Xuyên", "Thị xã Ngã Năm", "TP. Sóc Trăng",
                    "Huyện Thạnh Trị", "Thị xã Vĩnh Châu", "Huyện Trần Đề"],
                "Sơn La": ["Huyện Bắc Yên", "Huyện Mai Sơn", "Huyện Mộc Châu", "Huyện Mường La", "Huyện Phù Yên", "Huyện Quỳnh Nhai", "Tp.Sơn La", "Huyện Sông Mã",
                    "Huyện Sốp Cộp", "Huyện Thuận Châu", "Huyện Yên Châu", "Huyện Vân Hồ"],
                "Tây Ninh": ["Huyện Bến Cầu", "Huyện Châu Thành", "Huyện Dương Minh Châu", "Huyện Gò Dầu", "Huyện Hòa Thành", "Huyện Tân Biên", "Huyện Tân Châu",
                    "TP. Tây Ninh", "Huyện Trảng Bàng "],
                "Thái Bình": ["Huyện Đông Hưng", "Huyện Hưng Hà", "Huyện Kiến Xương", "Huyện Quỳnh Phụ", "Tp.Thái Bình", "Huyện Thái Thụy", "Huyện Tiền Hải", "Huyện Vũ Thư"],
                "Thái Nguyên": ["Huyện Đại Từ", "Huyện Định Hóa", "Huyện Đồng Hỷ", "Huyện Phổ Yên", "Huyện Phú Bình", "Huyện Phú Lương", "TP.Sông Công",
                    "Tp.Thái Nguyên", "Huyện Võ Nhai"],
                "Thanh Hóa": ["Huyện Bá Thước", "Thị xã Bỉm Sơn", "Huyện Cẩm Thủy", "Huyện Đông Sơn", "Huyện Hà Trung", "Huyện Hậu Lộc", "Huyện Hoằng Hóa", "Huyện Lang Chánh",
                    "Huyện Mường Lát", "Huyện Nga Sơn", "Huyện Ngọc Lặc", "Huyện Như Thanh", "Huyện Như Xuân", "Huyện Nông Cống", "Huyện Quan Hóa", "Huyện Quan Sơn",
                    "Huyện Quảng Xương", "TP.Sầm Sơn", "Huyện Thạch Thành", "TP. Thanh Hóa", "Huyện Thiệu Hóa", "Huyện Thọ Xuân", "Huyện Thường Xuân", "Huyện Tĩnh Gia",
                    "Huyện Triệu Sơn", "Huyện Vĩnh Lộc", "Huyện Yên Định", "Thiệu Hóa", "Nông Cống", "", "", "", ""],
                "Thừa Thiên Huế": ["Huyện A Lưới", "Tp.Huế", "Thị xã Hương Thủy", "Huyện Hương Trà", "Huyện Nam Đông", "Huyện Phong Điền", "Huyện Phú Lộc",
                    "Huyện Phú Vang", "Huyện Quảng Điền "],
                "Tiền Giang": ["Huyện Cái Bè", "Thị xã Cai Lậy", "Huyện Châu Thành", "Huyện Chợ Gạo", "Thị xã Gò Công", "Huyện Gò Công Đông", "Huyện Gò Công Tây",
                    "TP.Mỹ Tho", "Huyện Tân Phú Đông", "Huyện Tân Phước", "Huyện Cai Lậy"],
                "Trà Vinh": ["Huyện Càng Long", "Huyện Cầu Kè", "Huyện Cầu Ngang", "Huyện Châu Thành", "Thị xã Duyên Hải", "Huyện Tiểu Cần", "Huyện Trà Cú",
                    "TP.Trà Vinh"],
                "Tuyên Quang": ["Huyện Chiêm Hóa", "Huyện Hàm Yên", "Huyện Na Hang", "Huyện Sơn Dương", "Tp.Tuyên Quang", "Huyện Yên Sơn", "Huyện Lâm Bình"],
                "Vĩnh Long": ["T.X Bình Minh", "Huyện Bình Tân", "Huyện Long Hồ", "Huyện Mang Thít", "Huyện Tam Bình", "Huyện Trà Ôn", "TP. Vĩnh Long", "Huyện Vũng Liêm"],
                "Vĩnh Phúc": ["Huyện Bình Xuyên", "Huyện Lập Thạch", "Thị xã Phúc Yên", "Huyện Tam Đảo", "Huyện Tam Dương", "Huyện Vĩnh Tường", "Tp.Vĩnh Yên",
                    "Huyện Yên Lạc", "Huyện Sông Lô"],
                "Yên Bái": ["Huyện Lục Yên", "Huyện Mù Căng Chải", "Thị xã Nghĩa Lộ", "Huyện Trạm Tấu", "Huyện Trấn Yên", "Huyện Văn Chấn", "Huyện Văn Yên",
                    "Tp.Yên Bái", "Huyện Yên Bình"]
            },
            cityAddress: "Hà Nội",
            errNameInfo: "",
            errPhoneNumber: "",
            errDistrictAddress: "",
            errHomeNumber: "",
            error: 0
        };
    }

    onClickBuyButton = () => { //Sự kiện click vào nút mua hàng
        var canSubmit = true;
        var nameInfo = document.getElementById("name-info").value;
        var phoneNumberInfo = document.getElementById("phone-number-info").value;
        var districtAddress = document.getElementById("district-add").textContent;
        var homeNumberInfo = document.getElementById("home-number-info").value;
        var cityAddress = document.getElementById("city-add").textContent;
        var email = document.getElementById("email-info").value;

        if (nameInfo.trim() == "") {
            canSubmit = false;
            this.setState({
                errNameInfo: "Quý khách cần điền họ tên"
            })
        } else {
            this.setState({
                errNameInfo: ""
            })
        }
        if (phoneNumberInfo.trim() == "") {
            canSubmit = false;
            this.setState({
                errPhoneNumber: "Quý khách cần điền số điện thoại"
            })
        } else {
            this.setState({
                errPhoneNumber: ""
            })
        }
        if (districtAddress.trim() == "Chọn quận/huyện") {
            canSubmit = false;
            this.setState({
                errDistrictAddress: "Quý khách vui lòng chọn quận/huyện"
            })
        } else {
            this.setState({
                errDistrictAddress: ""
            })
        }
        if (homeNumberInfo.trim() == "") {
            canSubmit = false;
            this.setState({
                errHomeNumber: "Quý khách vui lòng nhập số nhà, tên đường, phường/xã"
            })
        } else {
            this.setState({
                errHomeNumber: ""
            })
        }

        axios.get("/trang-chu").then(result => {
            if (typeof result.data.account == "undefined" && typeof result.data.level == "undefined" && typeof result.data.idAccount == "undefined") {
                canSubmit = false;
                var mess = window.confirm("Bạn cần đăng nhập để có thể mua hàng");
                if (mess == true) {
                    window.location = "http://localhost:3000/tai-khoan/dang-nhap";
                }
            } else if (typeof result.data.account != "undefined" && typeof result.data.level != "undefined" && typeof result.data.idAccount == "undefined") {
                canSubmit = true;
            }

            if (canSubmit) {
                var pathname = window.location.pathname;
                if (pathname == "/mua-hang/dien-thoai") {
                    axios.post('/mua-hang/dien-thoai', { id: paymentPhone.state.detail.id, account: result.data.account, so_luong: paymentPhone.state.productsNumber, dia_chi: homeNumberInfo + ', ' + districtAddress + ', ' + cityAddress, ho_ten: nameInfo, sdt: phoneNumberInfo, email: email }).then(result1 => {
                        if (result1.data.errorQuantity) {
                            alert(result1.data.errorQuantity);
                        } else if (result1.data.sucessMess) {
                            alert(result1.data.sucessMess);
                            window.location = "http://localhost:3000/";
                        }
                    })
                } else if (pathname == "/mua-hang/phu-kien") {
                    axios.post('/mua-hang/phu-kien', { id: paymentAccessories.state.detail.id, account: result.data.account, so_luong: paymentAccessories.state.productsNumber, dia_chi: homeNumberInfo + ', ' + districtAddress + ', ' + cityAddress, ho_ten: nameInfo, sdt: phoneNumberInfo, email: email }).then(result1 => {
                        if (result1.data.errorQuantity) {
                            alert(result1.data.errorQuantity);
                        } else if (result1.data.sucessMess) {
                            alert(result1.data.sucessMess);
                            window.location = "http://localhost:3000/";
                        }
                    })
                } else if (pathname == "/mua-hang/gio-hang") {
                    axios.post('/mua-hang/gio-hang', { products: paymentShoppingCart.state.shoppingProducts, account: result.data.account, dia_chi: homeNumberInfo + ', ' + districtAddress + ', ' + cityAddress, ho_ten: nameInfo, sdt: phoneNumberInfo, email: email }).then(result1 => {
                        if (result1.data.errorQuantity) {
                            alert(result1.data.errorQuantity);
                        } else if (result1.data.errMess) {
                            alert(result1.data.errMess);
                        } else if (result1.data.sucessMess) {
                            alert(result1.data.sucessMess);
                            window.location = "http://localhost:3000/";
                        }
                    })
                }
                
            }
        });
        
    }
    onClickCityChoosen = () => { //Sự kiện click vào khung chọn thành phố
        document.getElementById("city-list").style.display = "block";
        document.getElementById("district-list").style.display = "none";
    }
    onClickDistrictChoosen = () => { //Sự kiện click vào khung chọn quận/huyện
        document.getElementById("city-list").style.display = "none";
        document.getElementById("district-list").style.display = "block";
    }

    render() {
        var shopping = this;
        return (
            <div> 
                {
                    this.state.error == 1 ?
                        <NotFound />
                        :
                        <div className="payment-box container">
                            <div className="col-xs-12 header-title">
                                <h4>Thanh toán mua hàng</h4>
                            </div>

                            <Router>
                                <Route path="/mua-hang/dien-thoai" exact component={PaymentPhone} />
                                <Route path="/mua-hang/phu-kien" exact component={PaymentAccessories} />
                                <Route path="/mua-hang/gio-hang" exact component={PaymentShoppingCart} />
                            </Router>

                            <div className="col-xs-12 customer-info">

                                <div className="col-xs-6">
                                    <input type="text" name="" className="col-xs-12 user-info" placeholder="Họ và tên" id="name-info" />
                                    <p className="col-xs-12 error-input-info" id="name-error" style={{ display: "block" }}>{this.state.errNameInfo}</p>
                                </div>
                                <div className="col-xs-6">
                                    <input type="tel" name="" className="col-xs-12 user-info" placeholder="Số điện thoại" id="phone-number-info" pattern="[0-9]{10}" />
                                    <p className="col-xs-12 error-input-info" id="phone-number-error" style={{ display: "block" }}>{this.state.errPhoneNumber}</p>
                                </div>
                                <div className="col-xs-12">
                                    <input type="email" name="" className="col-xs-12 user-info" id="email-info" placeholder="Email (không bắt buộc)" />
                                </div>

                                <div className="col-xs-6">
                                    <div className="col-xs-12 user-info add-info" id="city-choosen" onClick={this.onClickCityChoosen}>
                                        <span className="float-left" id="city-add">Hà Nội</span>
                                        <span className="fa fa-caret-down float-right"></span>
                                    </div>
                                </div>
                                <div className="col-xs-6">
                                    <div className="col-xs-12 user-info add-info" id="district-choosen" onClick={this.onClickDistrictChoosen}>
                                        <span className="float-left" id="district-add">Chọn quận/huyện</span>
                                        <span className="fa fa-caret-down float-right"></span>
                                    </div>
                                    <p className="col-xs-12 error-input-info" id="district-error" style={{ display: "block" }}>{this.state.errDistrictAddress}</p>
                                </div>

                                <div className="col-xs-12">
                                    <div className="col-sm-6 col-xs-8 user-info add-info" id="city-list">
                                        {
                                            this.state.city.map(function (note, index) {
                                                return (
                                                    <p className="col-xs-6 city" style={{ paddingLeft: "0px" }} id={'city_' + index} key={index} onClick={() => {
                                                        var city = document.getElementById('city_' + index).textContent;
                                                        document.getElementById("city-add").innerHTML = city;
                                                        document.getElementById("district-add").innerHTML = "Chọn quận/huyện";
                                                        document.getElementById("city-list").style.display = "none";
                                                        shopping.setState({
                                                            cityAddress: city
                                                        })
                                                    }
                                                    }>{note}</p>
                                                );
                                            })
                                        }
                                    </div>
                                    <div className="col-sm-6 col-xs-8 user-info add-info" id="district-list" style={{ right: "15px" }}>
                                        {
                                            this.state.district[shopping.state.cityAddress].map(function (note, index) {
                                                return (
                                                    <p className="col-xs-6 district" style={{ paddingLeft: "0px" }} id={'district_' + index} key={index} onClick={() => {
                                                        var district = document.getElementById('district_' + index).textContent;
                                                        document.getElementById("district-add").innerHTML = district;
                                                        document.getElementById("district-list").style.display = "none";
                                                    }}>{note}</p>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="col-xs-12">
                                    <input type="text" name="" className="col-xs-12 user-info" placeholder="Nhập số nhà, tên đường, phường/xã" id="home-number-info" />
                                    <p className="col-xs-12 error-input-info" id="home-number-error" style={{ display: "block" }}>{this.state.errHomeNumber}</p>
                                </div>
                                <div className="col-xs-12" style={{ color: "#fb6e2e", margin: "10px 0px" }}>
                                    <b>Chú ý:</b>
                                    <span>Bạn vui lòng nhập chính xác các thông tin ở trên để chúng tôi có thể phục vụ bạn tốt nhất.</span>
                                </div>

                            </div>
                            <div className="col-xs-12 pay-area" style={{ margin: "10px 0px" }}>
                                <div className="col-xs-3" style={{ paddingLeft: "0px" }}>
                                </div>
                                <div className="col-xs-6" style={{ paddingLeft: "0px" }}>
                                    <button className="col-xs-12" style={{ backgroundColor: "#4caf50" }} onClick={this.onClickBuyButton}>MUA HÀNG</button>
                                </div>
                                <div className="col-xs-3" style={{ paddingLeft: "0px" }}>
                                </div>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default Shopping;