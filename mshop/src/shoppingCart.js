import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

var shoppingCart;

class ShoppingProducts extends React.Component {
    render() {
        return (
            <div className="col-xs-12 shopping-prds">
                <div className="col-xs-12">
                    <h4>SẢN PHẨM TRONG GIỎ HÀNG</h4>
                </div>
                <div className="col-xs-12 title">
                    <p className="col-md-5 col-sm-5 col-xs-4">Tên sản phẩm</p>
                    <p className="col-md-3 col-sm-3 col-xs-3">Loại sản phẩm</p>
                    <p className="col-md-2 col-sm-2 col-xs-3">Giá tiền</p>
                    <p className="col-md-2 col-sm-2 col-xs-2">Thao tác</p>
                </div>
                {
                    this.props.products.map(function (note, index) {
                        return (
                            <div className="col-xs-12 prds-detail" key={index}>
                                <div className="col-md-5 col-sm-5 col-xs-4">
                                    {
                                        note.LoaiSanPham == "Điện thoại" ?
                                            <Link to={"/chi-tiet/dien-thoai?id=" + note.MaSanPham} >
                                                <img src={note.DuongDan} className="col-md-3 col-sm-4 col-xs-5" />
                                                <p className="col-md-9 col-sm-8 col-xs-7" style={{ textAlign: "left", padding: "0px 15px" }}>{note.TenSanPham}</p>
                                            </Link>
                                            :
                                            note.LoaiSanPham == "Phụ kiện" ?
                                                <Link to={"/chi-tiet/phu-kien?id=" + note.MaSanPham} >
                                                    <img src={note.DuongDan} className="col-md-3 col-sm-4 col-xs-5" />
                                                    <p className="col-md-9 col-sm-8 col-xs-7" style={{ textAlign: "left", padding: "0px 15px" }}>{note.TenSanPham}</p>
                                                </Link>
                                                : ""
                                    }
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-3">
                                    <p>{note.LoaiSanPham}</p>
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-3">
                                    <p>{note.GiaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</p>
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-2">
                                    <p style={{
                                        color: "red", cursor: "pointer", border: "solid 1px red", width: "72px", borderRadius: "3px", margin: "15px auto" }} title="Xóa khỏi giỏ hàng" onClick={() => {
                                        var mess = window.confirm("Bạn có chăc muốn xóa sản phẩm khỏi giỏ hàng không?");
                                        if (mess == true) {
                                            axios.get('/gio-hang/xoa?id=' + note.MaGioHang).then(result => { })
                                            axios.get('/gio-hang').then(result => {
                                                shoppingCart.setState({
                                                    shoppingProducts: result.data.shoppingProducts
                                                })
                                            })
                                        }
                                    }}>Xóa</p>
                                </div>
                            </div>
                            );
                    })
                }
                <div className="col-xs-12 total-price">
                    <Link to="/mua-hang/gio-hang" >
                        <button type="button" className="btn btn-default float-right">MUA HÀNG</button>
                    </Link>
                </div>
            </div>
            );
    }
}

class ShippingProducts extends React.Component {
    render() {
        return (
            <div className="col-xs-12 shipping-prds">
                <div className="col-xs-12">
                    <h4>SẢN PHẨM ĐÃ ĐẶT MUA</h4>
                </div>
                <div className="col-xs-12 title">
                    <p className="col-xs-4">Sản phẩm</p>
                    <p className="col-xs-2">Đơn giá</p>
                    <p className="col-xs-2">Số lượng</p>
                    <p className="col-xs-2">Số tiền</p>
                    <p className="col-xs-2">Tình trạng</p>
                </div>
                {
                    this.props.products.map(function (note, index) {
                        return (
                            <div className="col-xs-12 prds-detail" key={index}>
                                <div className="col-xs-4">
                                    {
                                        note.LoaiSanPham == "Điện thoại" ?
                                            <Link to={"/chi-tiet/dien-thoai?id=" + note.MaSanPham} >
                                                <p className="col-md-9 col-sm-8 col-xs-7" style={{ textAlign: "left" }}>{note.TenSanPham}</p>
                                            </Link>
                                            :
                                            note.LoaiSanPham == "Phụ kiện" ?
                                                <Link to={"/chi-tiet/phu-kien?id=" + note.MaSanPham} >
                                                    <p className="col-md-9 col-sm-8 col-xs-7" style={{ textAlign: "left" }}>{note.TenSanPham}</p>
                                                </Link>
                                                : ""
                                    }
                                </div>
                                <div className="col-xs-2">
                                    <p>{note.GiaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</p>
                                </div>
                                <div className="col-xs-2">
                                    <p>{note.SoLuong}</p>
                                </div>
                                <div className="col-xs-2">
                                    <p>{(note.GiaBan * note.SoLuong).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</p>
                                </div>
                                <div className="col-xs-2">
                                    <p>{note.TrangThai}</p>
                                </div>
                            </div>
                            );
                    })
                }
            </div>
            );
    }
}

class BoughtProducts extends React.Component {
    render() {
        return (
            <div className="col-xs-12 bought-prds">
                <div className="col-xs-12">
                    <h4>SẢN PHẨM ĐÃ THANH TOÁN</h4>
                </div>
                <div className="col-xs-12 title">
                    <p className="col-md-5 col-sm-5 col-xs-5">Sản phẩm</p>
                    <p className="col-md-2 col-sm-2 col-xs-2">Đơn giá</p>
                    <p className="col-md-2 col-sm-2 col-xs-2">Số lượng</p>
                    <p className="col-md-3 col-sm-3 col-xs-3">Số tiền</p>
                </div>
                {
                    this.props.products.map(function (note, index) {
                        return (
                            <div className="col-xs-12 prds-detail" key={index}>
                                <div className="col-xs-5">
                                    {
                                        note.LoaiSanPham == "Điện thoại" ?
                                            <Link to={"/chi-tiet/dien-thoai?id=" + note.MaSanPham} >
                                                <p className="col-md-9 col-sm-8 col-xs-7" style={{ textAlign: "left" }}>{note.TenSanPham}</p>
                                            </Link>
                                            :
                                            note.LoaiSanPham == "Phụ kiện" ?
                                                <Link to={"/chi-tiet/phu-kien?id=" + note.MaSanPham} >
                                                    <p className="col-md-9 col-sm-8 col-xs-7" style={{ textAlign: "left" }}>{note.TenSanPham}</p>
                                                </Link>
                                                : ""
                                    }
                                </div>
                                <div className="col-xs-2">
                                    <p>{note.GiaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</p>
                                </div>
                                <div className="col-xs-2">
                                    <p>{note.SoLuong}</p>
                                </div>
                                <div className="col-xs-3">
                                    <p>{(note.GiaBan * note.SoLuong).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</p>
                                </div>
                            </div>
                            );
                    })
                }
            </div>
            );
    }
}

class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        shoppingCart = this;
        this.state = {
            shoppingProducts: [{ MaGioHang: 0, MaSanPham: 0, LoaiSanPham: "", TenSanPham: "", GiaBan: 0, DuongDan: "" }],
            shippingProducts: [{ MaSanPham: 0, LoaiSanPham: "", GiaBan: 0, SoLuong: 0, TenSanPham: "", TrangThai: "" }],
            boughtProducts: [{ MaSanPham: 0, LoaiSanPham: "", GiaBan: 0, SoLuong: 0, TenSanPham: ""}]
        }
    }

    componentDidMount() {
        axios.get('/gio-hang').then(result => {
            if (typeof result.data.errorLogin != "undefined") {
                alert(result.data.errorLogin);
                window.location = "http://localhost:3000/tai-khoan/dang-nhap";
            } else {
                this.setState({
                    shoppingProducts: result.data.shoppingProducts,
                    shippingProducts: result.data.shippingProducts,
                    boughtProducts: result.data.boughtProducts
                })
            }
        })
    }

    render() {
        return (
            <div className="container shopping-cart">
                {
                    this.state.shoppingProducts.length > 0 ?
                        <ShoppingProducts products={this.state.shoppingProducts} />
                        : ""
                }
                {
                    this.state.shippingProducts.length > 0 ?
                        <ShippingProducts products={this.state.shippingProducts} />
                        : ""
                }
                {
                    this.state.boughtProducts.length > 0 ?
                        <BoughtProducts products={this.state.boughtProducts} />
                        : ""
                }
                {
                    this.state.shoppingProducts.length == 0 && this.state.shippingProducts.length == 0 && this.state.boughtProducts.length == 0 ?
                        <h3>Bạn không có sản phẩm nào trong giỏ hàng</h3>
                        : ""
                }
                
            </div>
        );
    }
}

export default ShoppingCart;