import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            level: 0,
            keySearching: ""
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

    //Sự kiện click vào nút đăng xuất
    onClickLogOut = () => {
        var mess = window.confirm("Bạn có chắc muốn đăng xuất?");
        if (mess == true) {
            axios.get('/tai-khoan/dang-xuat').then(result => {
                window.location = "http://localhost:3000/";
            });
        }
    }

    //Sự kiện click vào nút giỏ hàng
    onClickShoppingCartBtn = (event) => {
        if (this.state.userName == "") {
            event.preventDefault();
            var mess = window.confirm("Bạn cần đăng nhập để có thể thực hiện tác vụ này.");
            if (mess == true) {
                window.location = "http://localhost:3000/tai-khoan/dang-nhap";
            }
        }
    }

    //Sự kiện onChange lên khung input tìm kiếm
    onChangeInputSearching = (event) => {
        this.setState({
            keySearching: event.target.value
        })
    }

    //Sự kiên click vào nút tìm kiếm
    onClickSearchingButton = (event) => {
        if (this.state.keySearching.trim() == "") {
            event.preventDefault();
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
                        {
                            this.state.userName == "" ?
                                <Link to="/tai-khoan/dang-nhap" className="float-right right-btn" title="Đăng nhập">
                                    Đăng nhập
		                        </Link>
                                :
                                <div>
                                    <Link to="/gio-hang" className="float-right right-btn" title="Giỏ hàng" onClick={this.onClickShoppingCartBtn}>Giỏ hàng</Link>
                                    <div className="float-right right-btn" title="Đăng xuất" onClick={this.onClickLogOut} style={{ cursor: "pointer" }}>
                                        {this.state.userName}
                                    </div>
                                </div>
                        }
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-5 col-xs-12">
                        <form type="get" action="/tim-kiem/searching">
                            <input type="text" name="key" placeholder="Nhập tên điện thoại, phụ kiện cần tìm" className="float-left col-md-10 col-sm-9 col-xs-10" onChange={this.onChangeInputSearching} />
                            <button type="submit" className="float-left col-md-2 col-sm-3 col-xs-2" onClick={this.onClickSearchingButton}>Tìm kiếm</button>
                        </form>
				    </div>

                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6" id="shopping-cart-for-large-screen" style={{ top: "50%", transform: "translateY(6px)", paddingLeft: "0px" }}>
                        {
                            this.state.userName == "" ?
                                <Link to="/tai-khoan/dang-nhap" className="float-right right-btn" title="Đăng nhập">
                                    Đăng nhập
		                        </Link>
                                :
                                <div>
                                    <Link to="/gio-hang" className="float-right right-btn" title="Giỏ hàng" onClick={this.onClickShoppingCartBtn}>Giỏ hàng</Link>
                                    <div className="float-right right-btn" title="Đăng xuất" onClick={this.onClickLogOut} style={{ cursor: "pointer" }}>
                                        {this.state.userName}
                                    </div>
                                </div>
                        }
			        </div>
		        </div>
	        </nav>

            );
    }
}

export default Header;