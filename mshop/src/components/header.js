import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            level: 0
        };
    }

    componentDidMount() {
        axios.get("/trang-chu").then(result => {
            if (typeof result.data.account == "undefined" && typeof result.data.level == "undefined") {
                this.setState({
                    userName: "",
                    level: 0
                })
            } else if (typeof result.data.account != "undefined" && typeof result.data.level != "undefined") {
                this.setState({
                    userName: result.data.account,
                    level: result.data.level
                })
            }
        });
    }

    onClickLogOut = () => {
        var mess = window.confirm("Bạn có chắc muốn đăng xuất?");
        if (mess == true) {
            axios.get('/tai-khoan/dang-xuat').then(result => {
                window.location = "http://localhost:3000/";
            });
        }
    }

    onClickShoppingCartBtn = (event) => {
        if (this.state.userName == "") {
            event.preventDefault();
            var mess = window.confirm("Bạn cần đăng nhập để có thể thực hiện tác vụ này.");
            if (mess == true) {
                window.location = "http://localhost:3000/tai-khoan/dang-nhap";
            }
        }
    }

    render() {

        return (
            <nav className="navbar navbar-default box-header">
                <div className="container header">
                    <Link to="/" className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                        <img src="../images/demo_logo.png" id="logo" />
                    </Link>

                    <div className="col-lg-2 col-md-3 col-sm-3 col-xs-6" id="shopping-cart-for-small-screen" style={{ top: "50%", transform: "translateY(6px)", paddingLeft: "0px" }}>
                        <Link to="/gio-hang" className="float-right right-btn" title="Giỏ hàng" onClick={this.onClickShoppingCartBtn}>Giỏ hàng</Link>
                        {
                            this.state.userName == "" ?
                                <Link to="/tai-khoan/dang-nhap" className="float-right right-btn" title="Đăng nhập">
                                    Đăng nhập
		                        </Link>
                                :
                                <div className="float-right right-btn" title="Đăng xuất" onClick={this.onClickLogOut} style={{ cursor: "pointer" }}>
                                    {this.state.userName}
                                </div>
                        }
                    </div>

                    <form className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                        <div>
                            <input type="text" name="" placeholder="Nhập tên điện thoại, phụ kiện cần tìm" className="float-left col-md-10 col-sm-9 col-xs-10" />
                            <button className="float-left col-md-2 col-sm-3 col-xs-2">Tìm kiếm</button>
				        </div>
			        </form>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6" id="shopping-cart-for-large-screen" style={{ top: "50%", transform: "translateY(6px)", paddingLeft: "0px" }}>
                        <Link to="/gio-hang" className="float-right right-btn" title="Giỏ hàng" onClick={this.onClickShoppingCartBtn}>Giỏ hàng</Link>
                        {
                            this.state.userName == "" ?
                                <Link to="/tai-khoan/dang-nhap" className="float-right right-btn" title="Đăng nhập">
                                    Đăng nhập
		                        </Link>
                                :
                                <div className="float-right right-btn" title="Đăng xuất" onClick={this.onClickLogOut} style={{ cursor: "pointer" }}>
                                    {this.state.userName}
		                        </div>
                        }
			        </div>
		        </div>
	        </nav>

            );
    }
}

export default Header;