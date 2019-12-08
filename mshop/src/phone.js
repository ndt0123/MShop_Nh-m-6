import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Product from './components/product.js';

var phones;

class PhoneCompanies extends React.Component {

    render() {
        return (
            <div className="phone-companies col-xs-12">
                <Link to="/tim-kiem/dien-thoai?hang=iPhone" className="col-xs-2" title="iPhone">
                    <img src="../images/phone_logo/iPhone.jpg" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Samsung" className="col-xs-2" title="Samsung">
                    <img src="../images/phone_logo/Samsung.jpg" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=OPPO" className="col-xs-2" title="OPPO">
                    <img src="../images/phone_logo/OPPO.jpg" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Xiaomi" className="col-xs-2" title="Xiaomi">
                    <img src="../images/phone_logo/Xiaomi.png" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Vivo" className="col-xs-2" title="Vivo">
                    <img src="../images/phone_logo/Vivo.jpg" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Huawei" className="col-xs-2" title="Huawei">
                    <img src="../images/phone_logo/Huawei.jpg" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Realme" className="col-xs-2" title="Realme">
                    <img src="../images/phone_logo/Realme.png" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Vsmart" className="col-xs-2" title="Vsmart">
                    <img src="../images/phone_logo/Vsmart.png" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Nokia" className="col-xs-2" title="Nokia">
                    <img src="../images/phone_logo/Nokia.jpg" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Mobell" className="col-xs-2" title="Mobell">
                    <img src="../images/phone_logo/Mobell.jpg" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=Mobiistar" className="col-xs-2" title="Mobiistar">
                    <img src="../images/phone_logo/Mobiistar.jpg" className="img-thumbnail" />
                </Link>
                <Link to="/tim-kiem/dien-thoai?hang=BlackBerry" className="col-xs-2" title="BlackBerry">
                    <img src="../images/phone_logo/BlackBerry.png" className="img-thumbnail" />
                </Link>
        </div>
            );
    }
}

class PriceFilter extends React.Component {

    changeFilter(event) {
        if (event.target.value == "Cao đến thấp") {
            var flagResult = phones.state.phones;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan > flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            phones.setState({
                phones: flagResult
            });
        } else if (event.target.value == "Thấp đến cao") {
            var flagResult = phones.state.phones;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan < flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            phones.setState({
                phones: flagResult
            });
        }
    }

    render() {
        return (
            <div className="filter col-xs-12">
                <p className="float-left">Chọn mức giá: </p>
                <Link to="/tim-kiem/dien-thoai?gia=duoi1" className="float-left">Dưới 1 triệu</Link>
                <Link to="/tim-kiem/dien-thoai?gia=1-3" className="float-left">Từ 1-3 triệu</Link>
                <Link to="/tim-kiem/dien-thoai?gia=3-6" className="float-left">Từ 3-6 triệu</Link>
                <Link to="/tim-kiem/dien-thoai?gia=6-10" className="float-left">Từ 6-10 triệu</Link>
                <Link to="/tim-kiem/dien-thoai?gia=10-15" className="float-left">Từ 10-15 triệu</Link>
                <Link to="/tim-kiem/dien-thoai?gia=tren15" className="float-left">Trên 15 triệu</Link>
                <select style={{ margin: "8px 10px", border: "none" }} className="float-left" onChange={this.changeFilter}>
                    <option value="">Sắp xếp giá</option>
                    <option value="Cao đến thấp">Cao đến thấp</option>
                    <option value="Thấp đến cao">Thấp đến cao</option>
                </select>
            </div>
            );
    }
}

class PhoneProducts extends React.Component {

    showMoreProducts = () => {
        phones.setState(
            {
                page: phones.state.page + 1
            }
        )
    }

    render() {
        return (
            <div className="box-products col-xs-12">
                <div className="col-xs-12 top-div">
                    <h4 className="col-xs-12"><b>ĐIỆN THOẠI NỔI BẬT NHẤT</b></h4>
                </div>
                <div className="col-xs-12 middle-div">
                    {
                        phones.state.phones.map(function (note, index) {
                            return (
                                index < 12 * phones.state.page ? <Product prds={note} type="dien-thoai" linkClassName="col-md-3 col-sm-4 col-xs-6 prds" key={index} /> : ''
                            );
                        })
                    }
                </div>

                {
                    phones.state.phoneNumber - 12 * phones.state.page > 0 ?
                        <div className="bottom-div col-xs-12">
                            <div className="more-products-btn">
                                <button type="button" className="btn btn-default" style={{ outline: "0" }} onClick={this.showMoreProducts}>
                                    Xem thêm {phones.state.phoneNumber - 12 * phones.state.page} sản phẩm
                                    <span className="glyphicon glyphicon-triangle-bottom"> </span>
                                </button>
                            </div>
                        </div> :
                        <div className="bottom-div col-xs-12" style={{marginBottom: "0px"}}> </div>
                }
                   
            </div>
            );
    }
}

class Phone extends React.Component {

    constructor(props) {
        super(props);
        phones = this;
        this.state = {
            phones: [],
            page: 1,
            phoneNumber: 0
        };
    }

    componentDidMount() {
        axios.get('/dien-thoai').then(result => {
            this.setState({
                phones: result.data.phones
            });
            this.setState({
                phoneNumber: result.data.phoneNumber
            });
        });
    }

    render() {

        return (
            <div className="container phone-products">
                <PhoneCompanies />
                <PriceFilter />
                <PhoneProducts />
            </div>

        );
    }
}

export default Phone;