import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Product from './components/product.js';

var accessories;

class AccessoriesType extends React.Component {
    render() {
        return (
            <div>
                <div className="accessories-types col-xs-12" id="acc-type-for-large-screen">
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=ốp+lưng" title="Ốp lưng">
                            <img src="../images/accessories_img/oplungdt.png" className="col-xs-12" />
                            <p className="col-xs-12">Ốp lưng</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=sạc+dự+phòng" title="Sạc dự phòng">
                            <img src="../images/accessories_img/pinsac.png" className="col-xs-12" />
                            <p className="col-xs-12">Sạc dự phòng</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=thẻ+nhớ" title="Thẻ nhớ">
                            <img src="../images/accessories_img/thenho.png" className="col-xs-12" />
                            <p className="col-xs-12">Thẻ nhớ</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=gậy+selfie" title="Gậy selfie">
                            <img src="../images/accessories_img/gay_selfie.png" className="col-xs-12" />
                            <p className="col-xs-12">Gậy selfie</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=dán+màn+hình" title="Dán màn hình">
                            <img src="../images/accessories_img/miengdan_manhinh.png" className="col-xs-12" />
                            <p className="col-xs-12">Dán màn hình</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=tai+nghe" title="Tai nghe">
                            <img src="../images/accessories_img/tainghe.png" className="col-xs-12" />
                            <p className="col-xs-12">Tai nghe</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=loa" title="Loa">
                            <img src="../images/accessories_img/loa.png" className="col-xs-12" />
                            <p className="col-xs-12">Loa</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=usb+-ổ+cứng" title="USB - Ổ cứng">
                            <img src="../images/accessories_img/usb_ocung.png" className="col-xs-12" />
                            <p className="col-xs-12">USB-Ổ cứng</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=sạc+cáp" title="Sạc cáp">
                            <img src="../images/accessories_img/capsac.png" className="col-xs-12" />
                            <p className="col-xs-12">Sạc cáp</p>
                        </Link>
                    </div>
                    <div className="col-md-1 col-sm-2 col-xs-3">
                        <Link to="/tim-kiem/phu-kien?loai=chuột" title="Chuột">
                            <img src="../images/accessories_img/chuot.png" className="col-xs-12" />
                            <p className="col-xs-12">Chuột</p>
                        </Link>
                    </div>
                </div>

                <div className="accessories-types col-xs-12" id="acc-type-for-small-screen">
                    <Link to="/tim-kiem/phu-kien?loai=ốp+lưng" className="float-left" title="Ốp lưng">Ốp lưng</Link>
                    <Link to="/tim-kiem/phu-kien?loai=sạc+dự+phòng" className="float-left" title="Sạc dự phòng">Sạc dự phòng</Link>
                    <Link to="/tim-kiem/phu-kien?loai=thẻ+nhớ" className="float-left" title="Thẻ nhớ">Thẻ nhớ</Link>
                    <Link to="/tim-kiem/phu-kien?loai=gậy+selfie" className="float-left" title="Gậy selfie">Gậy selfie</Link>
                    <Link to="/tim-kiem/phu-kien?loai=dán+màn+hình" className="float-left" title="Dán màn hình">Dán màn hình</Link>
                    <Link to="/tim-kiem/phu-kien?loai=tai+nghe" className="float-left" title="Tai nghe">Tai nghe</Link>
                    <Link to="/tim-kiem/phu-kien?loai=loa" className="float-left" title="Loa">Loa</Link>
                    <Link to="/tim-kiem/phu-kien?loai=usb+-ổ+cứng" className="float-left" title="USB-Ổ cứng">USB-Ổ cứng</Link>
                    <Link to="/tim-kiem/phu-kien?loai=sạc+cáp" className="float-left" title="Sạc cáp">Sạc cáp</Link>
                    <Link to="/tim-kiem/phu-kien?loai=chuột" className="float-left" title="Chuột">Chuột</Link>
                </div>
            </div>
            );
    }
}

class Filter extends React.Component {

    changeFilter = (event) => {
        if (event.target.value == "Cao đến thấp") {
            var flagResult = accessories.state.accessories;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan > flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            accessories.setState({
                accessories: flagResult
            });
        } else if (event.target.value == "Thấp đến cao") {
            var flagResult = accessories.state.accessories;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan < flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            accessories.setState({
                accessories: flagResult
            });
        }
    }

    render() {
        return (
            <div className="filter col-xs-12">
                <p className="float-left">Chọn mức giá: </p>
                <Link to="/tim-kiem/phu-kien?gia=duoi200" className="float-left">Dưới 200 nghìn</Link>
                <Link to="/tim-kiem/phu-kien?gia=200-500" className="float-left">Từ 200-500 nghìn</Link>
                <Link to="/tim-kiem/phu-kien?gia=500-1" className="float-left">Từ 500 nghìn-1 triệu</Link>
                <Link to="/tim-kiem/phu-kien?gia=1-2" className="float-left">Từ 1-2 triệu</Link>
                <Link to="/tim-kiem/phu-kien?gia=2-5" className="float-left">Từ 2-5 triệu</Link>
                <select style={{ margin: "8px 10px", border: "none" }} className="float-left" onChange={this.changeFilter}>
                    <option value="">Sắp xếp giá</option>
                    <option value="Cao đến thấp">Cao đến thấp</option>
                    <option value="Thấp đến cao">Thấp đến cao</option>
                </select>
            </div>
            );
    }
}

class AccessoreisPrds extends React.Component {

    showMoreProducts = () => {
        accessories.setState(
            {
                page: accessories.state.page + 1
            }
        )
    }

    render() {
        return (
            <div className="box-products col-xs-12">

                <div className="col-xs-12 top-div">
                    <h4 className="col-xs-12"><b>PHỤ KIỆN NỔI BẬT NHẤT</b></h4>
                </div>

                <div className="col-xs-12 middle-div">
                    {
                        accessories.state.accessories.map(function (note, index) {
                            return (
                                index < 12 * accessories.state.page ? <Product prds={note} type="phu-kien" linkClassName="col-md-3 col-sm-4 col-xs-6 prds" key={index} /> : ''
                            );
                        })
                    }
                </div>

                {
                    accessories.state.accessoriesNumber - 12 * accessories.state.page > 0 ?
                        <div className="bottom-div col-xs-12">
                            <div className="more-products-btn">
                                <button type="button" className="btn btn-default" style={{ outline: "0" }} onClick={this.showMoreProducts}>
                                    Xem thêm {accessories.state.accessoriesNumber - 12 * accessories.state.page} phụ kiện
                            <span className="glyphicon glyphicon-triangle-bottom"> </span>
                                </button>
                            </div>
                        </div> : 

                        <div className="bottom-div col-xs-12" style={{ marginBottom: "0px" }}> </div>
                }
        
            </div>
            );
    }
}

class Accessories extends React.Component {

    constructor(props) {
        super(props);
        accessories = this;
        this.state = {
            accessories: [],
            page: 1,
            accessoriesNumber: 0
        };
    }

    componentDidMount() {
        axios.get('/phu-kien').then(result => {
            this.setState({
                accessories: result.data.accessories
            });
            this.setState({
                accessoriesNumber: result.data.accessoriesNumber
            });
        });
    }

    render() {

        return (
            <div className="container accessories-products phone-products">
                <AccessoriesType />
                <Filter />
                <AccessoreisPrds />
            </div>

        );
    }
}

export default Accessories;