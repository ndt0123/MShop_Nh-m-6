import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Product from './components/product.js';

var home;

class SlideShow extends React.Component {
    render() {
        return (
            <div className="container box-slide" style={{ position: "relative" }}>
                <div className="col-xs-12 slide-show">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="../images/slide_show_img_1.png" alt="" />
                            </div>

                            <div className="item">
                                <img src="../images/slide_show_img_2.png" alt="" />
                            </div>

                            <div className="item">
                                <img src="../images/slide_show_img_3.png" alt="" />
                            </div>

                            <div className="item">
                                <img src="../images/slide_show_img_4.png" alt="" />
                            </div>
                        </div>

                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
            );
    }
}

class SaleOff extends React.Component {
    render() {
        return (
            <div className="col-xs-12 new-sale-off-products">
                <div className="col-xs-12 top-div">
                    <h4 className="float-left"><b>KHUYẾN MÃI HOT</b></h4>
                </div>
                <div id="myCarousel1" className="carousel slide col-xs-12" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel1" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel1" data-slide-to="1"></li>
                    </ol>

                    <div className="carousel-inner" style={{padding: "15px"}}>
                        <div className="item active" id="root">
                            {
                                home.state.saleOff.map(function (note, index) {
                                    return (
                                        index < 4 ? <Product prds={note} type="dien-thoai" linkClassName="col-md-3 col-sm-6 col-xs-6 prds" key = { index } /> : ''
                                        );
                                })
                            }
                        </div>

                        <div className="item">
                            {
                                home.state.saleOff.map(function (note, index) {
                                    return (
                                        index >= 4 ? <Product prds={note} type="dien-thoai" linkClassName="col-md-3 col-sm-6 col-xs-6 prds" key={index} /> : ''
                                    );
                                })
                            }                   
                        </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel1" data-slide="prev" style={{ width: "0px", backgroundImage: "none" }}>
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel1" data-slide="next" style={{width: "0px", backgroundImage: "none"}}>
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            );
    }
}

class Phones extends React.Component {

    render() {
        return (
            <div className="col-xs-12 new-phone">

                <div className="col-xs-12 top-div">
                    <h4 className="float-left"><b>ĐIỆN THOẠI NỔI BẬT</b></h4>

                    <Link className="float-left" to="/tim-kiem/dien-thoai?hang=Iphone" title="iPhone">iPhone</Link>
                    <Link className="float-left" to="/tim-kiem/dien-thoai?hang=Samsung" title="Samsung">Samsung</Link>
                    <Link className="float-left" to="/tim-kiem/dien-thoai?hang=OPPO" title="OPPO">OPPO</Link>
                    <Link className="float-left" to="/tim-kiem/dien-thoai?hang=Huawei" title="Huawei">Huawei</Link>
                    <Link className="float-left" to="/tim-kiem/dien-thoai?hang=VSmart" title="VSmart">VSmart</Link>

                    <Link to="/tim-kiem/dien-thoai" className="float-right">Xem tất cả</Link>
                </div>

                <div className="col-xs-12 bottom-div">
                    {
                        home.state.phones.map(function (note, index) {
                            return (
                                <Product prds={note} type="dien-thoai" linkClassName="col-md-3 col-sm-4 col-xs-6 prds" key={index} /> 
                            );
                        })
                    }
                </div>

            </div>
            );
    }
}

class Accessories extends React.Component {

    render() {
        return (
            <div className="col-xs-12 new-accessories">
                <div className="col-xs-12 top-div">
                    <h4 className="float-left"><b>PHỤ KIỆN GIÁ RẺ</b></h4>

                    <Link className="float-left" to="/tim-kiem/phu-kien?loai=ốp+lưng" title="Ốp lưng">Ốp lưng</Link>
                    <Link className="float-left" to="/tim-kiem/phu-kien?loai=sạc+dự+phòng" title="Sạc dự phòng">Sạc dự phòng</Link>
                    <Link className="float-left" to="/tim-kiem/phu-kien?loai=tai+nghe" title="Tai nghe">Tai nghe</Link>
                    <Link className="float-left" to="/tim-kiem/phu-kien?loai=dán+màn+hình" title="Miếng dán màn hình">Miếng dán màn hình</Link>
                    <Link className="float-left" to="/tim-kiem/phu-kien?loai=cáp+sạc" title="Cáp sạc">Cáp sạc</Link>

                    <Link to="/tim-kiem/phu-kien" className="float-right">Xem tất cả</Link>
                </div>

                <div className="col-xs-12 bottom-div">
                    {
                        home.state.accessories.map(function (note, index) {
                            return (
                                <Product prds={note} type="phu-kien" linkClassName="col-md-3 col-sm-4 col-xs-6 prds" key={index} />
                            );
                        })
                    }
                </div>
            </div>
            );
    }
}

class Home extends React.Component {

    constructor(props) {
        super(props);
        home = this;
        this.state = {
            phones: [],
            accessories: [],
            saleOff: []
        };
    }

    componentDidMount() {
        axios.get('/trang-chu').then(result => {
            this.setState({ phones: result.data.phones });
            this.setState({ accessories: result.data.accessories });
            this.setState({ saleOff: result.data.saleOff });

        });
    }

    render() {

        return (
            <div>
                <div className="container box-home-products">
                    <SaleOff />
                    <Phones />
                    <Accessories />
                </div>
            </div>

        );
    }
}

export default Home;