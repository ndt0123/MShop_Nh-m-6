import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Menu extends React.Component {
    render() {

        return (
        <div>
            <nav className="navbar navbar-default box-menu">
                <div className="container menu">
                    <div className="float-left" id="phone-menu-div-button">
                        <Link to="/dien-thoai" className="menu-button">
                            <span className="glyphicon glyphicon-phone"></span>
                            <b>ĐIỆN THOẠI</b>
                        </Link>
                    </div>
                    <div className="float-left" id="accessories-div-menu-button">
                        <Link to="/phu-kien" className="menu-button">
                            <span className="glyphicon glyphicon-headphones"></span>
                            <b>PHỤ KIỆN</b>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container box-menu-option" style={{ position: "relative" }}>
                <div className="menu-option" id="box-option-for-phone-btn" style={{ position: "absolute" }}>
                    <div className="left-div col-sm-6 col-xs-5">
                        <b className="col-xs-12">HÃNG SẢN XUẤT</b>
                        <ul className="col-xs-12">
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Iphone" title="Iphone">Iphone</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Samsung" title="Samsung">Samsung</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=OPPO" title="OPPO">OPPO</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Huawei" title="Huawei">Huawei</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Xiaomi" title="Xiaomi">Xiaomi</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=VSmart" title="VSmart">VSmart</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Nokia" title="Nokia">Nokia</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=HONOR" title="HONOR">HONOR</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Vivo" title="Vivo">Vivo</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Realme" title="Realme">Realme</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Asus" title="Asus">Asus</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Wiko" title="Wiko">Wiko</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Mobell" title="Mobell">Mobell</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=BlackBerry" title="BlackBerry">BlackBerry</Link>
                            </li>
                            <li className="col-sm-4 col-xs-6">
                                <Link to="/tim-kiem/dien-thoai?hang=Mobiistar" title="Mobiistar">Mobiistar</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="middle-div col-sm-2 col-xs-3">
                        <b className="col-xs-12">MỨC GIÁ</b>
                        <ul className="col-xs-12">
                            <li className="col-xs-12">
                                <Link to="/tim-kiem/dien-thoai?gia=duoi1" title="Dưới 1 triệu">Dưới 1 triệu</Link>
                            </li>
                            <li className="col-xs-12">
                                <Link to="/tim-kiem/dien-thoai?gia=1-3" title="Từ 1 - 3 triệu">Từ 1 - 3 triệu</Link>
                            </li>
                            <li className="col-xs-12">
                                <Link to="/tim-kiem/dien-thoai?gia=3-6" title="Từ 3 - 6 triệu">Từ 3 - 6 triệu</Link>
                            </li>
                            <li className="col-xs-12">
                                <Link to="/tim-kiem/dien-thoai?gia=6-10" title="Từ 6 - 10 triệu">Từ 6 - 10 triệu</Link>
                            </li>
                            <li className="col-xs-12">
                                <Link to="/tim-kiem/dien-thoai?gia=10-15" title="Từ 10 - 15 triệu">Từ 10 - 15 triệu</Link>
                            </li>
                            <li className="col-xs-12">
                                <Link to="/tim-kiem/dien-thoai?gia=15-25" title="Trên 15 triệu">Từ 15 - 25 triệu</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-div col-sm-4 col-xs-4">
                        <b className="col-xs-12">BÁN CHẠY NHẤT</b>
                        <div className="col-xs-12 best-seller" style={{ marginBottom: "8px"}}>
                            <Link to="/chi-tiet/dien-thoai" className="float-left">
                                <img src="../images/phone.png" />
					        </Link>
                            <span className="float-left">
                                <Link to="/chi-tiet/dien-thoai">Iphone 11 Pro Max</Link>
                                <br />
                                    <b>50.000.000đ</b>
					        </span>
				        </div>
                        <div className="col-xs-12 best-seller">
                            <Link to="/chi-tiet/dien-thoai" className="float-left">
                                <img src="../images/phone.png" />
					        </Link>
                            <span className="float-left">
                                <Link to="/chi-tiet/dien-thoai">Iphone 11 Pro Max</Link>
                                <br />
                                    <b>50.000.000đ</b>
					        </span>
				        </div>
			        </div>
                </div>


                <div className="menu-option" id="box-option-for-accessories-btn" style={{ position: "absolute" }}>
                    <div className="col-xs-6 left-div">
                        <b className="col-xs-12">SẢN PHẨM PHỤ KIỆN</b>
                        <ul className="col-xs-12">
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=bao+da+ốp+lưng" title="Bao da ốp lưng">Bao da ốp lưng</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=sạc+dự+phòng" title="Sạc dự phòng">Sạc dự phòng</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=thẻ+nhớ" title="Thẻ nhớ">Thẻ nhớ</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=gậy+selfie" title="Gậy selfie">Gậy selfie</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=dán+màn+hình" title="Dán màn hình">Dán màn hình</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=tai+nghe" title="Tai nghe">Tai nghe</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=loa" title="Loa">Loa</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=USB+-ổ+cứng" title="USB - Ổ cứng">USB - Ổ cứng</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=sạc+cáp" title="Sạc cáp">Sạc cáp</Link>
                            </li>
                            <li className="col-xs-6">
                                <Link to="/tim-kiem/phu-kien?loai=chuột" title="Chuột">Chuột</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xs-6 right-div">
                        <b className="col-xs-12">BÁN CHẠY NHẤT</b>
                        <div className="col-xs-12 best-seller" style={{ marginBottom: "8px"}}>
                            <Link to="/chi-tiet/phu-kien" className="float-left">
                                <img src="../images/phu_kien.jpg" />
                            </Link>
                            <span className="float-left">
                                <Link to="/chi-tiet/phu-kien">Combo Loa Bluetooth Karaoke i.value F12-65N</Link>
                                <br />
                                <b>1.000.000đ</b>
					        </span>
				        </div>
                        <div className="col-xs-12 best-seller">
                            <Link to="/chi-tiet/phu-kien" className="float-left">
                                <img src="../images/phu_kien.jpg" />
                            </Link>
                            <span className="float-left">
                                <Link to="/chi-tiet/phu-kien">Tai nghe có dây choàng đầu i.value T-127 black</Link>
                                <br />
                                <b>3.000.000đ</b>
					        </span>
				        </div>
			        </div>
                </div>
	        </div>
        </div>
        );
    }
}

export default Menu;