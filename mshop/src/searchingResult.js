import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Product from './components/product.js';
import NotFound from './components/404NotFound.js';

var searchingResult;

//Hàm lấy dữ liệu khi thay đổi thuộc tính loc trong phần phone filter
function getDataFromPhoneFilter(phoneCompanies, phonePrice) {
    var url = ""; //Biến lưu url lấy data

    // Thay đổi giá trị biến url theo từng trạng thái của filter
    if (phoneCompanies.indexOf("Tất cả") != -1 && phonePrice.indexOf("Tất cả") != -1) { 
        url = "";
    } else if (phoneCompanies.indexOf("Tất cả") != -1 && phonePrice.indexOf("Tất cả") == -1) {
        if (phonePrice.length >= 1) {
            url = "?gia=" + phonePrice[0];
            for (var i = 1; i < phonePrice.length; i++) {
                url += "," + phonePrice[i];
            }
        }
    } else if (phoneCompanies.indexOf("Tất cả") == -1 && phonePrice.indexOf("Tất cả") != -1) {
        if (phoneCompanies.length >= 1) {
            url = "?hang=" + phoneCompanies[0];
            for (var i = 1; i < phoneCompanies.length; i++) {
                url += "," + phoneCompanies[i];
            }
        }
    } else {
        if (phoneCompanies.length >= 1) {
            url = "?hang=" + phoneCompanies[0];
            for (var i = 1; i < phoneCompanies.length; i++) {
                url += "," + phoneCompanies[i];
            }
        }
        if (phonePrice.length >= 1) {
            if (phoneCompanies.length >= 1) {
                url += "&gia=" + phonePrice[0];
            } else {
                url = "?gia=" + phonePrice[0];
            }
            for (var i = 1; i < phonePrice.length; i++) {
                url += "," + phonePrice[i];
            }
        }
    }

    //Lấy dữ liệu dựa vào biến url
    axios.get('/tim-kiem/dien-thoai' + url).then(result => {
        searchingResult.setState({
            productsResult: result.data.phones,
            productNumber: result.data.phoneNumber
        });
    });
}

//Hàm lấy dữ liệu khi thay đổi thuộc tính loc trong phần accessories filter
function getDataFromAccessoriesFilter(accessoriesType, accessoriesPrice) {
    var url = ""; //Biến lưu url lấy data

    // Thay đổi giá trị biến url theo từng trạng thái của filter
    if (accessoriesType.indexOf("Tất cả") != -1 && accessoriesPrice.indexOf("Tất cả") != -1) {
        url = "";
    } else if (accessoriesType.indexOf("Tất cả") != -1 && accessoriesPrice.indexOf("Tất cả") == -1) {
        if (accessoriesPrice.length >= 1) {
            url = "?gia=" + accessoriesPrice[0];
            for (var i = 1; i < accessoriesPrice.length; i++) {
                url += "," + accessoriesPrice[i];
            }
        }
    } else if (accessoriesType.indexOf("Tất cả") == -1 && accessoriesPrice.indexOf("Tất cả") != -1) {
        if (accessoriesType.length >= 1) {
            url = "?loai=" + accessoriesType[0];
            for (var i = 1; i < accessoriesType.length; i++) {
                url += "," + accessoriesType[i];
            }
        }
    } else {
        if (accessoriesType.length >= 1) {
            url = "?loai=" + accessoriesType[0];
            for (var i = 1; i < accessoriesType.length; i++) {
                url += "," + accessoriesType[i];
            }
        }
        if (accessoriesPrice.length >= 1) {
            if (accessoriesType.length >= 1) {
                url += "&gia=" + accessoriesPrice[0];
            } else {
                url = "?gia=" + accessoriesPrice[0];
            }
            for (var i = 1; i < accessoriesPrice.length; i++) {
                url += "," + accessoriesPrice[i];
            }
        }
    }

    //Lấy dữ liệu dựa vào biến url
    axios.get('/tim-kiem/phu-kien' + url).then(result => {
        searchingResult.setState({
            productsResult: result.data.accessories,
            productNumber: result.data.accessoriesNumber
        });
    });
}

/* --------  Component accessories filter  --------------  */
class AccessoriesFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typeDisplay: true,
            priceDisplay: false,
            typeChoosenDisplay: {display: "block"},
            priceChoosenDisplay: {display: "none"},
            classTypeChoosenButton: "float-right glyphicon glyphicon-minus",
            classPriceChoosenButton: "float-right glyphicon glyphicon-plus",
            accessoriesTypeFilter: [],
            accessoriesPriceFilter: []
        }
    }

    /*Xử lý khi click vào nút + - trong bộ lọc phụ kiện theo hãng*/
    clickTypeChoosenButton = () => {
        if (this.state.typeDisplay == true) {
            this.setState({
                typeDisplay: false,
                typeChoosenDisplay: { display: "none" },
                classTypeChoosenButton: "float-right glyphicon glyphicon-plus"
            });
        } else {
            this.setState({
                typeDisplay: true,
                typeChoosenDisplay: { display: "block" },
                classTypeChoosenButton: "float-right glyphicon glyphicon-minus"
            });
        }
    }

    /*Xử lý khi click vào nút + - trong bộ lọc phụ kiện theo giá*/
    clickPriceChoosenButton = () => {
        if (this.state.priceDisplay == true) {
            this.setState({
                priceDisplay: false,
                priceChoosenDisplay: { display: "none" },
                classPriceChoosenButton: "float-right glyphicon glyphicon-plus"
            });
        } else {
            this.setState({
                priceDisplay: true,
                priceChoosenDisplay: { display: "block" },
                classPriceChoosenButton: "float-right glyphicon glyphicon-minus"
            });
        }
    }

    // Kiểm tra sự kiện onChange lên accessories type filter bên trái
    onChangeAccessoriesTypeFilter = (event) => {

        // Nếu click chọn một loại phụ kiện nào đó thì thêm value đó vào state accessoriesTypeFilter
        // Nếu bỏ chọn thì xóa value đó khỏi state accessoriesTypeFilter
        if (event.target.checked) {
            this.state.accessoriesTypeFilter.push(event.target.value);
            this.setState(this.state);
        } else {
            var i = this.state.accessoriesTypeFilter.indexOf(event.target.value);
            this.state.accessoriesTypeFilter.splice(i, 1);
            this.setState(this.state);
        }

        getDataFromAccessoriesFilter(this.state.accessoriesTypeFilter, this.state.accessoriesPriceFilter);
    }

    // Kiểm tra sự kiện onChange lên accessories price filter bên trái
    onChangeAccessoriesPriceFilter = (event) => {

        // Nếu click chọn một mức giá nào đó thì thêm value đó vào state accessoriesPriceFilter
        // Nếu bỏ chọn thì xóa value đó khỏi state accessoriesPriceFilter
        if (event.target.checked) {
            this.state.accessoriesPriceFilter.push(event.target.value);
            this.setState(this.state);
        } else {
            var i = this.state.accessoriesPriceFilter.indexOf(event.target.value);
            this.state.accessoriesPriceFilter.splice(i, 1);
            this.setState(this.state);
        }

        getDataFromAccessoriesFilter(this.state.accessoriesTypeFilter, this.state.accessoriesPriceFilter);
    }

    render() {

        const padd0px = { padding: "0px" };
        const marRight15px = { marginRight: "15px" };

        return (
            <div className="col-xs-12" id="accessories-filter">
                <div className="col-xs-12 filter-option">
                    <div className="col-xs-12">
                        <h5 className="float-left">Loại phụ kiện</h5>
                        <span className={this.state.classTypeChoosenButton} onClick={this.clickTypeChoosenButton} ></span>
                    </div>
                    <form className="col-xs-12" style={this.state.typeChoosenDisplay} onChange={this.onChangeAccessoriesTypeFilter}>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Tất cả" style={marRight15px} />Tất cả
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Ốp lưng" style={marRight15px} />Ốp lưng
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Thẻ nhớ" style={marRight15px} />Thẻ nhớ
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Dán màn hình" style={marRight15px} />Dán màn hình
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Loa" style={marRight15px} />Loa
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Sạc cáp" style={marRight15px} />Sạc cáp
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Sạc dự phòng" style={marRight15px} />Sạc dự phòng
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Gậy selfie" style={marRight15px} />Gậy selfie
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Tai nghe" style={marRight15px} />Tai nghe
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="USB-ổ cứng" style={marRight15px} />USB-Ổ cứng
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Chuột" style={marRight15px} />Chuột
                        </div>
                    </form>
                </div>


                <div className="col-xs-12 filter-option">
                    <div className="col-xs-12">
                        <h5 className="float-left">Mức giá</h5>
                        <span className={this.state.classPriceChoosenButton} onClick={this.clickPriceChoosenButton} ></span>
                    </div>
                    <form className="col-xs-12" style={this.state.priceChoosenDisplay} onChange={this.onChangeAccessoriesPriceFilter}>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Tất cả" style={marRight15px} />Tất cả
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="duoi200" style={marRight15px} />Dưới 200 nghìn
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="200-500" style={marRight15px} />Từ 200-500 nghìn
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="500-1" style={marRight15px} />Từ 500 nghìn-1 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="1-2" style={marRight15px} />Từ 1-2 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="2-5" style={marRight15px} />Từ 2-5 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="tren5" style={marRight15px} />Trên 5 triệu
                        </div>
                    </form>
                </div>
            </div>
            );
    }
}

/* --------  Component phone filter  --------------  */
class PhoneFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            typeDisplay: true,
            priceDisplay: false,
            typeChoosenDisplay: { display: "block" },
            priceChoosenDisplay: { display: "none" },
            classTypeChoosenButton: "float-right glyphicon glyphicon-minus",
            classPriceChoosenButton: "float-right glyphicon glyphicon-plus",
            phoneCompaniesFilter: [],
            phonePriceFilter: []
        }
    }

    /*Xử lý khi click vào nút + - trong bộ lọc điện thoại theo hãng*/
    clickTypeChoosenButton = () => {
        if (this.state.typeDisplay == true) {
            this.setState({
                typeDisplay: false,
                typeChoosenDisplay: { display: "none" },
                classTypeChoosenButton: "float-right glyphicon glyphicon-plus"
            });
        } else {
            this.setState({
                typeDisplay: true,
                typeChoosenDisplay: { display: "block" },
                classTypeChoosenButton: "float-right glyphicon glyphicon-minus"
            });
        }
    }

    /*Xử lý khi click vào nút + - trong bộ lọc điện thoại theo giá*/
    clickPriceChoosenButton = () => {
        if (this.state.priceDisplay == true) {
            this.setState({
                priceDisplay: false,
                priceChoosenDisplay: { display: "none" },
                classPriceChoosenButton: "float-right glyphicon glyphicon-plus"
            });
        } else {
            this.setState({
                priceDisplay: true,
                priceChoosenDisplay: { display: "block" },
                classPriceChoosenButton: "float-right glyphicon glyphicon-minus"
            });
        }
    }

    // Kiểm tra sự kiện onChange lên phone company filter bên trái
    onChangePhoneCompanyFilter = (event) => {

        // Nếu click chọn một hãng điện thoại nào đó thì thêm value đó vào state phoneCompaniesFilter
        // Nếu bỏ chọn thì xóa value đó khỏi state phoneCompaniesFilter
        if (event.target.checked) {
            this.state.phoneCompaniesFilter.push(event.target.value);
            this.setState(this.state);
        } else {
            var i = this.state.phoneCompaniesFilter.indexOf(event.target.value);
            this.state.phoneCompaniesFilter.splice(i, 1);
            this.setState(this.state);
        }

        getDataFromPhoneFilter(this.state.phoneCompaniesFilter, this.state.phonePriceFilter);
    }

    // Kiểm tra sự kiện onChange lên phone price filter bên trái
    onChangePhonePriceFilter = (event) => {

        // Nếu click chọn một hãng điện thoại nào đó thì thêm value đó vào state phoneCompaniesFilter
        // Nếu bỏ chọn thì xóa value đó khỏi state phoneCompaniesFilter
        if (event.target.checked) {
            this.state.phonePriceFilter.push(event.target.value);
            this.setState(this.state);
        } else {
            var i = this.state.phonePriceFilter.indexOf(event.target.value);
            this.state.phonePriceFilter.splice(i, 1);
            this.setState(this.state);
        }

        getDataFromPhoneFilter(this.state.phoneCompaniesFilter, this.state.phonePriceFilter);
    }
    
    render() {
        const padd0px = { padding: "0px" };
        const marRight15px = { marginRight: "15px" };
        return (
            <div className="col-xs-12" id="phone-filter">
                <div className="col-xs-12 filter-option">
                    <div className="col-xs-12">
                        <h5 className="float-left">Hãng điện thoại</h5>
                        <span className={this.state.classTypeChoosenButton} onClick={this.clickTypeChoosenButton} ></span>
                    </div>
                    <form className="col-xs-12" style={this.state.typeChoosenDisplay} onChange={this.onChangePhoneCompanyFilter} >
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Tất cả" style={marRight15px} />Tất cả
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Iphone" style={marRight15px} />Apple(iPhone)
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Samsung" style={marRight15px} />Samsung
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="OPPO"  style={marRight15px} />OPPO
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Huawei"  style={marRight15px} />Huawei
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Xiaomi" style={marRight15px} />Xiaomi
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="VSmart" style={marRight15px} />VSmart
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Nokia" style={marRight15px} />Nokia
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="HONOR" style={marRight15px} />HONOR
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Vivo" style={marRight15px} />Vivo
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Realme" style={marRight15px} />Realme
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Asus" style={marRight15px} />Asus
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Wiko" style={marRight15px} />Wiko
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Mobell" style={marRight15px} />Mobell
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="BlackBerry" style={marRight15px} />BlackBerry
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Mobiistar" style={marRight15px} />Mobiistar
                        </div>
                    </form>
                </div>


                <div className="col-xs-12 filter-option">
                    <div className="col-xs-12">
                        <h5 className="float-left">Mức giá</h5>
                        <span className={this.state.classPriceChoosenButton} onClick={this.clickPriceChoosenButton} ></span>
                    </div>
                    <form className="col-xs-12" style={this.state.priceChoosenDisplay} onChange={this.onChangePhonePriceFilter}>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="Tất cả" style={marRight15px} />Tất cả
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="duoi1" style={marRight15px} />Dưới 1 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="1-3" style={marRight15px} />1-3 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="3-6" style={marRight15px} />3-6 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="6-10" style={marRight15px} />6-10 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="10-15" style={marRight15px} />10-15 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="15-25" style={marRight15px} />15-25 triệu
                        </div>
                        <div className="col-xs-12" style={padd0px}>
                            <input type="checkbox" name="" value="tren25" style={marRight15px} />Trên 25 triệu
                        </div>
                    </form>
                </div>

            </div>
            );
    }
}

/* --------  Component filter  --------------  */
class Filter extends React.Component {

    constructor(props) {
        super(props);

        if (searchingResult.props.match.params.type == "dien-thoai") {
            this.state = {
                filterState: 1,
                phoneButtonStyle: { backgroundColor: "white", color: "#05a90c", fontWeight: "bold", outline: "0", padding: "10px 5px" },
                accessoriesButtonStyle: { outline: "0", color: "black", padding: "10px 5px" }
            };
        } else if (searchingResult.props.match.params.type == "phu-kien") {
            this.state = {
                filterState: 2,
                phoneButtonStyle: { outline: "0", color: "black", padding: "10px 5px" },
                accessoriesButtonStyle: { backgroundColor: "white", color: "#05a90c", fontWeight: "bold", outline: "0", padding: "10px 5px" }
            };
        } else if (searchingResult.props.match.params.type == "searching") {
            this.state = {
                filterState: 1,
                phoneButtonStyle: { backgroundColor: "white", color: "#05a90c", fontWeight: "bold", outline: "0", padding: "10px 5px" },
                accessoriesButtonStyle: { outline: "0", color: "black", padding: "10px 5px" }
            };
        }

    }

    /*Xử lý sự kiện khi click vào nút phụ kiện trong phần filter*/
    clickAccessoriesFilter = () => {

        /*setState cho trạng thái của filter và style của nút phụ kiện và điện thoại*/
        this.setState({
            filterState: 2,
            phoneButtonStyle: { outline: "0", color: "black", padding: "10px 5px" },
            accessoriesButtonStyle: { backgroundColor: "white", color: "#05a90c", fontWeight: "bold", outline: "0", padding: "10px 5px" }
        });

        /*Lấy giá các sản phẩm là phụ kiện và setState cho searchingResult*/
        axios.get('/tim-kiem/phu-kien').then(result => {
            searchingResult.setState({
                productsResult: result.data.accessories,
                productNumber: result.data.accessoriesNumber
            });
        });
    }

    /*Xử lý sự kiện khi click vào nút điện thoại trong phần filter*/
    clickPhoneFilter = () => {
        /*setState cho trạng thái của filter và style của nút phụ kiện và điện thoại*/
        this.setState({
            filterState: 1,
            phoneButtonStyle: { backgroundColor: "white", color: "#05a90c", fontWeight: "bold", outline: "0", padding: "10px 5px" },
            accessoriesButtonStyle: { outline: "0", color: "black", padding: "10px 5px" }
        });

        /*Lấy giá các sản phẩm là điện thoại và setState cho searchingResult*/
        axios.get('/tim-kiem/dien-thoai').then(result => {
            searchingResult.setState({
                productsResult: result.data.phones,
                productNumber: result.data.phoneNumber
            });
        });
    }

    /*Render kết quả*/
    render() {
        return (
            <div className="col-lg-3 col-md-3 col-sm-4 left-div">
                <div className=" col-xs-12 filter">

                    <div className="col-xs-12" style={{borderBottom: "solid 1px #eee", margin: "0px", padding: "15px"}}>
                        <h4 className="float-left">Bộ lọc</h4>
                        <Link className="float-right" to="/tim-kiem/dien-thoai" style={this.state.phoneButtonStyle} onClick={this.clickPhoneFilter} >Điện thoại</Link>
                        <Link className="float-right" to="/tim-kiem/phu-kien" style={this.state.accessoriesButtonStyle} onClick={this.clickAccessoriesFilter} >Phụ kiện</Link>
                    </div>

                    {
                        this.state.filterState == 1 ?
                            <PhoneFilter /> : <AccessoriesFilter />
                    }

                </div>
            </div>
            );
    }
}

/* --------  Component hiển thị tìm kiếm là điện thoại  --------------  */
class PhoneProducts extends React.Component {

    /*Lấy giá trị của kết quả trả về và setState khi url là /tim-kiem/dien-thoai?....*/
    componentDidMount() {
        var search = window.location.search;
        axios.get('/tim-kiem/dien-thoai' + search).then(result => {
            searchingResult.setState({
                productsResult: result.data.phones,
                productNumber: result.data.phoneNumber
            });
        });
    }
    

    /*Xử lý sự kiện khi thay đổi thuộc tính lọc theo giá tiền*/
    changePriceSorting = (event) => {
        if (event.target.value == "Cao đến thấp") {
            var flagResult = searchingResult.state.productsResult;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan > flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            searchingResult.setState({
                productsResult: flagResult
            });
        } else if (event.target.value == "Thấp đến cao") {
            var flagResult = searchingResult.state.productsResult;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan < flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            searchingResult.setState({
                productsResult: flagResult
            });
        }
    }

    /*Tăng biến state đánh số trang khi clik vào nút hiển thị thêm sản phẩm*/
    showMoreProducts = () => {
        searchingResult.setState(
            {
                page: searchingResult.state.page + 1
            }
        )
    }

    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-8 right-div">
                <div className="col-xs-12 result">

                    <div className="col-xs-12">
                        <h4 className="float-left" style={{margin: "15px 0px"}}>KẾT QUẢ TÌM KIẾM</h4>
                        <select style={{ margin: "15px 10px", border: "none" }} className="float-right" onChange={this.changePriceSorting}>
                            <option value="">Sắp xếp giá</option>
                            <option value="Cao đến thấp">Cao đến thấp</option>
                            <option value="Thấp đến cao">Thấp đến cao</option>
                        </select>
                    </div>

                    <div className="col-xs-12">
                        {
                            searchingResult.state.productsResult.length == 0 ?
                                <NotFound /> :
                                searchingResult.state.productsResult.map(function (note, index) {
                                    return (
                                        index < 12 * searchingResult.state.page ? <Product prds={note} type="dien-thoai" linkClassName="col-md-3 col-sm-4 col-xs-6 prds" key={index} /> : ''
                                    );
                                })
                        }
                    </div>

                    {
                        searchingResult.state.productNumber - 12 * searchingResult.state.page > 0 ?
                        <div className="col-xs-12" style={{margin: "10px 0px"}}>
                            <div className="more-products-btn">
                                <button type="button" className="btn btn-default" style={{ outline: "0" }} onClick={this.showMoreProducts}>
                                    Xem thêm {searchingResult.state.productNumber - 12 * searchingResult.state.page} sản phẩm
                            <span className="glyphicon glyphicon-triangle-bottom"> </span>
                                </button>
                            </div>
                        </div> :
                        <div className="col-xs-12" style={{ marginTop: "10px" }}> </div>
                    }

                </div>
            </div>
            );
    }
}

/* --------  Component hiển thị tìm kiếm là phụ kiện  --------------  */
class AccessoriesProducts extends React.Component {

    /*Lấy dữ liệu về khi url là /tim-kiem/phu-kien?...*/
    componentDidMount() {
        var search = window.location.search;
        axios.get('/tim-kiem/phu-kien' + search).then(result => {
            searchingResult.setState({
                productsResult: result.data.accessories,
                productNumber: result.data.accessoriesNumber
            });
        });
    }

    /*Xử lý sự kiện khi thay đổi thuộc tính về sắp xếp theo giá*/
    changePriceSorting = (event) => {
        if (event.target.value == "Cao đến thấp") {
            var flagResult = searchingResult.state.productsResult;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan > flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            searchingResult.setState({
                productsResult: flagResult
            });
        } else if (event.target.value == "Thấp đến cao") {
            var flagResult = searchingResult.state.productsResult;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan < flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            searchingResult.setState({
                productsResult: flagResult
            });
        }
    }

    /*Tăng biến state lưu số trang khi click vào nút hiển thi thêm sản phẩm*/
    showMoreProducts = () => {
        searchingResult.setState(
            {
                page: searchingResult.state.page + 1
            }
        )
    }

    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-8 right-div">
                <div className="col-xs-12 result">

                    <div className="col-xs-12">
                        <h4 className="float-left" style={{ margin: "15px 0px" }}>KẾT QUẢ TÌM KIẾM</h4>
                        <select style={{ margin: "15px 10px", border: "none" }} className="float-right" onChange={this.changePriceSorting}>
                            <option value="">Sắp xếp giá</option>
                            <option value="Cao đến thấp">Cao đến thấp</option>
                            <option value="Thấp đến cao">Thấp đến cao</option>
                        </select>
                    </div>

                    <div className="col-xs-12">
                        {
                            searchingResult.state.productsResult.length == 0 ?
                                <NotFound /> :
                                searchingResult.state.productsResult.map(function (note, index) {
                                    return (
                                        index < 12 * searchingResult.state.page ? <Product prds={note} type="phu-kien" linkClassName="col-md-3 col-sm-4 col-xs-6 prds" key={index} /> : ''
                                    );
                                })
                        }
                    </div>

                    {
                    searchingResult.state.productNumber - 12 * searchingResult.state.page > 0 ?
                        <div className="bottom-div col-xs-12" style={{ margin: "10px 0px" }}>
                            <div className="more-products-btn">
                                <button type="button" className="btn btn-default" style={{ outline: "0" }} onClick={this.showMoreProducts}>
                                    Xem thêm {searchingResult.state.productNumber - 12 * searchingResult.state.page} phụ kiện
                                <span className="glyphicon glyphicon-triangle-bottom"> </span>
                                </button>
                            </div>
                        </div> :
                            <div className="bottom-div col-xs-12" style={{ marginTop: "10px" }}> </div>
                    }

                </div>
            </div>
        );
    }
}

class SearchingProducts extends React.Component {

    /*Lấy giá trị của kết quả trả về và setState khi url là /tim-kiem/dien-thoai?....*/
    componentDidMount() {
        var search = window.location.search;
        axios.get('/tim-kiem/searching' + search).then(result => {
            searchingResult.setState({
                productsResult: result.data.products,
                productNumber: result.data.productsNumber
            });
        });
    }


    /*Xử lý sự kiện khi thay đổi thuộc tính lọc theo giá tiền*/
    changePriceSorting = (event) => {
        if (event.target.value == "Cao đến thấp") {
            var flagResult = searchingResult.state.productsResult;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan > flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            searchingResult.setState({
                productsResult: flagResult
            });
        } else if (event.target.value == "Thấp đến cao") {
            var flagResult = searchingResult.state.productsResult;
            for (var i = 0; i < flagResult.length; i++) {
                for (var j = i + 1; j < flagResult.length; j++) {
                    if (flagResult[j].giaBan < flagResult[i].giaBan) {
                        var flag = flagResult[j];
                        flagResult[j] = flagResult[i];
                        flagResult[i] = flag;
                    }
                }
            }
            searchingResult.setState({
                productsResult: flagResult
            });
        }
    }

    /*Tăng biến state đánh số trang khi clik vào nút hiển thị thêm sản phẩm*/
    showMoreProducts = () => {
        searchingResult.setState(
            {
                page: searchingResult.state.page + 1
            }
        )
    }

    render() {
        return (
            <div className="col-lg-9 col-md-9 col-sm-8 right-div">
                <div className="col-xs-12 result">

                    <div className="col-xs-12">
                        <h4 className="float-left" style={{ margin: "15px 0px" }}>KẾT QUẢ TÌM KIẾM</h4>
                        <select style={{ margin: "15px 10px", border: "none" }} className="float-right" onChange={this.changePriceSorting}>
                            <option value="">Sắp xếp giá</option>
                            <option value="Cao đến thấp">Cao đến thấp</option>
                            <option value="Thấp đến cao">Thấp đến cao</option>
                        </select>
                    </div>

                    <div className="col-xs-12">
                        {
                            searchingResult.state.productsResult.length == 0 ?
                                <NotFound /> :
                                searchingResult.state.productsResult.map(function (note, index) {
                                    return (
                                        index < 12 * searchingResult.state.page ? <Product prds={note} type={note.type} linkClassName="col-md-3 col-sm-4 col-xs-6 prds" key={index} /> : ''
                                    );
                                })
                        }
                    </div>

                    {
                        searchingResult.state.productNumber - 12 * searchingResult.state.page > 0 ?
                            <div className="col-xs-12" style={{ margin: "10px 0px" }}>
                                <div className="more-products-btn">
                                    <button type="button" className="btn btn-default" style={{ outline: "0" }} onClick={this.showMoreProducts}>
                                        Xem thêm {searchingResult.state.productNumber - 12 * searchingResult.state.page} sản phẩm
                            <span className="glyphicon glyphicon-triangle-bottom"> </span>
                                    </button>
                                </div>
                            </div> :
                            <div className="col-xs-12" style={{ marginTop: "10px" }}> </div>
                    }

                </div>
            </div>
        );
    }
}

/* --------  Component trang hiển thị kết quả tìm kiếm  --------------  */
class SearchingResult extends React.Component {

    constructor(props) {
        super(props);
        searchingResult = this;
        this.state = {
            productsResult: [],
            page: 1,
            productNumber: 0,
        };
    }

    render() {
        return (
            <div className="container searching-result">
                <Filter />
                {
                    this.props.match.params.type == "phu-kien" ?
                        <AccessoriesProducts /> :
                        this.props.match.params.type == "dien-thoai" ?
                            <PhoneProducts /> :
                            this.props.match.params.type == "searching" ?
                                <SearchingProducts /> :
                                <NotFound />
                }
                
            </div>

        );
    }
}

export default SearchingResult;