import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Product from './components/product.js';
import NotFound from './components/404NotFound.js';

var productDetail;
var phoneDetail;

class Title extends React.Component {
    render() {
        return (
            <div className="col-xs-12 prds-name">
                <h2 style={{marginBottom: "20px"}}>{this.props.title}</h2>
            </div>
            );
    }
}

class Images extends React.Component {
    render() {
        return (
            <div id="phoneImgCarousel" className="carousel slide col-md-6 col-sm-6 col-xs-12" data-ride="carousel">
                <ol className="carousel-indicators">
                    {
                        this.props.images.map(function (note, index) {
                            return (
                                index == 0 ?
                                    <li data-target="#phoneImgCarousel" data-slide-to={index} className="active" key={index}></li> :
                                    <li data-target="#phoneImgCarousel" data-slide-to={index} key={index}></li>
                            );
                        })
                    }
                </ol>

                <div className="carousel-inner">
                    {
                        this.props.images.map(function (note, index) {
                            return (
                                index == 0 ?
                                    <div className="item active" key={index}>
                                        <img src={note.DuongDan} alt="" />
                                    </div> :
                                    <div className="item" key={index}>
                                        <img src={note.DuongDan} alt="" />
                                    </div>
                            );
                        })
                    }
                </div>

                <a className="left carousel-control" href="#phoneImgCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#phoneImgCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            );
    }
}

class Comments extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            commentLevel1: this.props.commentLevel1,
            commentLevel2: this.props.commentLevel2,
            valueInputComment1: "",
            valueInputComment2: [this.props.commentLevel2.length]
        };
    }

    onClickCommentBtn1 = () => {
        axios.get("/trang-chu").then(result => {
            if (typeof result.data.account == "undefined" && typeof result.data.level == "undefined") {
                var mess = window.confirm("Bạn cần đăng nhập để có thể bình luận.");
                if (mess == true) {
                    window.location = "http://localhost:3000/tai-khoan/dang-nhap";
                }
            } else if (typeof result.data.account != "undefined" && typeof result.data.level != "undefined") {
                if (this.state.valueInputComment1.trim() != "") {
                    axios.get(window.location.pathname + '/binh-luan' + window.location.search + '&account=' + result.data.account + '&content=' + this.state.valueInputComment1).then(result => {

                    })
                    window.location.assign(window.location.href);
                }
            }
        });
    }

    onChangeInputComment1 = (event) => {
        this.setState({
            valueInputComment1: event.target.value
        })
    }
    onChangeInputComment2 = (event) => {
    }

    render() {
        var comments = this;
        return (
            <div>
                <h3 className="col-xs-12">Đánh giá, bình luận</h3>
                <div className="col-xs-12 comment-input-area">
                    <div className="col-xs-12 comment-input-form">
                        <textarea placeholder="Viết bình luận..." className="col-xs-12" rows="5" onChange={this.onChangeInputComment1}></textarea>
                        <div className="col-xs-12">
                            <button className="float-right" onClick={this.onClickCommentBtn1}>Gửi bình luận</button>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 list-comment" style={{ margin: "15px 0px" }}>

                    <div className="col-xs-12 comment">
                        {
                            this.props.commentLevel1.map(function (note1, index1) {
                                return (
                                    <div key={index1} id={index1}>
                                        <div className="col-xs-12 comment-content" style={{ marginTop: "20px" }}>
                                            <div className="col-xs-12 user-comment">
                                                <div className="float-left avatar-user">
                                                    <strong>{note1.TenDangNhap[0]}</strong>
                                                </div>
                                                <strong className="float-left name-user">{note1.TenDangNhap}</strong>
                                                {
                                                    note1.Level == 2 ?
                                                        <p className="float-left admin">Quản trị viên</p> : ''
                                                }
                                            </div>

                                            <div className="col-xs-12 content">
                                                <p>{note1.NoiDung}</p>
                                            </div>

                                            <div className="col-xs-12 reply-btn-and-time">
                                                <span className="float-left reply-comment-btn" onClick={() => {
                                                    document.getElementById(index1).lastChild.style.display = "block";
                                                }
                                                    } >Trả lời</span>
                                                <span>{note1.ThoiGian}</span>
                                            </div>
                                        </div>

                                        <div className="col-xs-12 box-reply-content">
                                            {
                                                comments.props.commentLevel2.map(function (note2, index2) {
                                                    return (
                                                        note2.IDCmt == note1.IDCmt ?
                                                            <div className="col-xs-12 reply-content" key={index2}>
                                                                <div className="col-xs-12 user-comment">
                                                                    <div className="float-left avatar-user">
                                                                        <strong>{note2.TenDangNhap[0]}</strong>
                                                                    </div>
                                                                    <strong className="float-left name-user">{note2.TenDangNhap}</strong>
                                                                    {
                                                                        note2.Level == 2 ?
                                                                            <p className="float-left admin">Quản trị viên</p> : ''
                                                                    }
                                                                </div>

                                                                <div className="col-xs-12 content">
                                                                    <p>{note2.NoiDung}</p>
                                                                </div>

                                                                <div className="col-xs-12 reply-btn-and-time">
                                                                    <span>{note2.ThoiGian}</span>
                                                                </div>
                                                            </div> : ''
                                                        );
                                                })
                                            }
                                        </div>

                                        <div className="col-xs-12 comment-input-area" style={{ display: "none", paddingLeft: "15px" }}>
                                            <div className="col-xs-12 comment-input-form">
                                                <textarea placeholder="Viết bình luận..." id={'comment2_' + index1} className="col-xs-12" rows="5"></textarea>
                                                <div className="col-xs-12">
                                                    <button className="float-right" onClick={(event) => {
                                                        var content = document.getElementById('comment2_' + index1).value;
                                                        var id_comment = note1.IDCmt;

                                                        axios.get("/trang-chu").then(result => {
                                                            if (typeof result.data.account == "undefined" && typeof result.data.level == "undefined") {
                                                                var mess = window.confirm("Bạn cần đăng nhập để có thể bình luận.");
                                                                if (mess == true) {
                                                                    window.location = "http://localhost:3000/tai-khoan/dang-nhap";
                                                                }
                                                            } else if (typeof result.data.account != "undefined" && typeof result.data.level != "undefined") {
                                                                // var content = document.getElementById('comment2_' + index1).value.replace('\n', '<br/>');
                                                                if (content.trim() != "") {
                                                                    axios.get(window.location.pathname + '/tra-loi?id_comment=' + id_comment + '&account=' + result.data.account + '&content=' + content).then(result => {

                                                                    })
                                                                    window.location.assign(window.location.href);
                                                                }
                                                            }
                                                        });
                                                    }}>Gửi bình luận</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                            })
                        }
                    </div>

                </div>
            </div>
            );
    }
}

class RecommendPrds extends React.Component {

    render() {
        var type = this.props.type;
        return (
            <div className="container">
                <div className="col-xs-12 recommended-prds" style={{ margin: "15px 0px" }}>
                    <div className="col-xs-12" style={{padding: "0px"}}>
                        <h4>SẢN PHẨM TƯƠNG TỰ</h4>
                    </div>
                    <Router>
                        {
                            this.props.products.map(function (note, index) {
                                return (
                                    index < 8 ? <Product prds={note} type={type} linkClassName="col-md-3 col-sm-4 col-xs-6 prds" key={index} /> : ''
                                );
                            })
                        }
                    </Router>
                    
                </div>
            </div>
            );
    }
}

class PhoneDetail extends React.Component {
    constructor(props) {
        super(props);
        phoneDetail = this;
        this.state = {
            phoneDetail: [{
                MaDienThoai: 0, Hang: "", TenDienThoai: "", SoLuong: 0, GiaBan: 0, GiaKhuyenMai: 0, CongNgheManHinh: "", DoPhanGiaiMH: "", DoRongMH: 0,
                MatKinh: "", DoPhanGiaiCamSau: "", QuayPhimCamSau: "", DenFlashCamSau: "", NangCaoCamSau: "", DoPhanGiaiCamTruoc: "",
                VideoCall: "", ThongTinCamTruoc: "", HeDieuHanh: "", Chipset: "", CPU: "", GPU: "", RAM: 0, ROM: 0, TheNhoNgoai: "", MangDIDong: "", SIM: "",
                WIFI: "", GPS: "", Bluetooth: "", KetNoi: "", JackTaiNghe: "", KetNoiKhac: "", ThietKe: "", ChatLieu: "", KichThuoc: "", TrongLuong: 0,
                DungLuongPin: 0, LoaiPin: "", CongNghePin: "", BaoMat: "", TinhNangDacBiet: "", GhiAm: "", Radio: "", XemPhim: "", NgheNhac: "", ThoiDIemPhatHanh: ""
            }],
            phoneImages: [{ MaDT: 0, DuongDan: "" }],
            recommendPrds: [{ id: 2, hang: "", ten: "", giaBan: 0, giaGoc: 0, hinhAnh: "" }],
            commentLevel1: [{ IDCmt: 0, NoiDung: "", ThoiGian: "", TenDangNhap: "", Level: 1}],
            commentLevel2: [{ IDCmt2: 0, IDCmt: 0, NoiDung: "", ThoiGian: "", TenDangNhap: "", Level: 1 }],
            errorUrl: false
        };
    }

    componentDidMount() {
        var search = window.location.search;
        axios.get('/chi-tiet/dien-thoai' + search).then(result => {
            if (typeof result.data.detail == "undefined") {
                this.setState({
                    errorUrl: true
                })
            } else {
                this.setState({
                    phoneDetail: result.data.detail,
                    phoneImages: result.data.images,
                    recommendPrds: result.data.recommendPrds,
                    commentLevel1: result.data.commentLevel1,
                    commentLevel2: result.data.commentLevel2
                })
            }
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.errorUrl == true ?
                        <NotFound />
                        :
                        <div>
                            <div className="container prds-detail">
                                <Title title={this.state.phoneDetail[0].TenDienThoai} />

                                <Images images={this.state.phoneImages} />

                                <div className="col-md-6 col-sm-6 col-xs-12 prds-specification">
                                    <div className="col-xs-12 prds-price" style={{ fontSize: "22px", border: "none" }}>
                                        {
                                            this.state.phoneDetail[0].GiaKhuyenMai == null ?
                                                <b style={{ color: "red" }} className="float-left">{this.state.phoneDetail[0].GiaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</b> :
                                                <div>
                                                    <b style={{ color: "red" }} className="float-left">{this.state.phoneDetail[0].GiaKhuyenMai.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</b>
                                                    <strike className="float-right">{this.state.phoneDetail[0].GiaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</strike>
                                                </div>
                                        }

                                    </div>
                                    <div className="col-xs-12">
                                        <h3>Thông số kỹ thuật</h3>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Màn hình:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].CongNgheManHinh}</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Hệ điều hành:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].HeDieuHanh}</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Camera sau:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].DoPhanGiaiCamSau}</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Camera trước:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].DoPhanGiaiCamTruoc}</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">CPU:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].CPU}</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">RAM:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].RAM} GB</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Bộ nhớ trong:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].ROM} GB</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Thẻ nhớ:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].TheNhoNgoai}</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Thẻ SIM:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].SIM}</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Dung lượng pin:</p>
                                        <p className="col-md-8 col-xs-7">{this.state.phoneDetail[0].DungLuongPin} mAh</p>
                                    </div>
                                </div>

                                <div className="col-md-8 col-sm-7 col-xs-12 prds-description">
                                    <h3 className="col-xs-12">Mô tả sản phẩm</h3>
                                    <p className="col-xs-12">- {this.state.phoneDetail[0].QuayPhimCamSau}</p>
                                    <p className="col-xs-12">- {this.state.phoneDetail[0].NangCaoCamSau}</p>
                                    <p className="col-xs-12">- {this.state.phoneDetail[0].ThongTinCamTruoc}</p>
                                    <p className="col-xs-12">- {this.state.phoneDetail[0].TinhNangDacBiet}</p>

                                    <Comments commentLevel1={this.state.commentLevel1} commentLevel2={this.state.commentLevel2} />
                                </div>

                                <div className="col-md-4 col-sm-5 col-xs-12 add-buy-btn">
                                    <div className="col-xs-12">
                                        <button type="button" className="btn btn-default col-xs-12 adding-btn" onClick={() => {
                                            axios.get("/trang-chu").then(result => {
                                                if (typeof result.data.account == "undefined" && typeof result.data.level == "undefined") {
                                                    var mess = window.confirm("Bạn cần đăng nhập để có thể thực hiện tác vụ này.");
                                                    if (mess == true) {
                                                        window.location = "http://localhost:3000/tai-khoan/dang-nhap";
                                                    }
                                                } else if (typeof result.data.account != "undefined" && typeof result.data.level != "undefined") {
                                                    var ma_san_pham = this.state.phoneDetail[0].MaDienThoai;
                                                    var loai_san_pham = "Điện thoại";
                                                    var account = result.data.account;
                                                    axios.post("/gio-hang/them", { ma_san_pham, loai_san_pham, account }).then(result1 => {
                                                        if (result1.data.errorRes) {
                                                            alert(result1.data.errorRes);
                                                        } else if (result1.data.successRes) {
                                                            alert(result1.data.successRes);
                                                            window.location = "http://localhost:3000/";
                                                        }
                                                    })
                                                }
                                            });
                                        }}>THÊM VÀO GIỎ HÀNG</button>
                                    </div>
                                    <div className="col-xs-12">
                                        <button type="button" className="btn btn-default col-xs-12 buying-btn" onClick={() => {
                                            axios.get("/trang-chu").then(result => {
                                                if (typeof result.data.account == "undefined" && typeof result.data.level == "undefined") {
                                                    var mess = window.confirm("Bạn cần đăng nhập để có thể mua hàng.");
                                                    if (mess == true) {
                                                        window.location = "http://localhost:3000/tai-khoan/dang-nhap";
                                                    }
                                                } else if (typeof result.data.account != "undefined" && typeof result.data.level != "undefined") {
                                                    window.location = "/mua-hang/dien-thoai" + window.location.search;
                                                }
                                            });
                                        }}>MUA NGAY</button>
                                    </div>
                                </div>
                            </div>

                            <RecommendPrds products={this.state.recommendPrds} type="dien-thoai" />
                        </div>
                }
            </div>
        );
    }
}

class AccessoriesDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accessoriesDetail: [{
                MaPhuKien: 0, LoaiPhuKien: "", TenPhuKien: "", SoLuong: 0, GiaBan: 0, GiaKhuyenMai: null, Hang: null, ThongTin: "" 
            }],
            accessoriesImages: [{ MaPhuKien: 0, DuongDan: "" }],
            recommendPrds: [{ id: 0, loai: "", ten: "", giaBan: 0, giaGoc: 0, hinhAnh: "" }],
            commentLevel1: [{ IDCmt: 0, NoiDung: "", ThoiGian: "", TenDangNhap: "", Level: 1 }],
            commentLevel2: [{ IDCmt2: 0, IDCmt: 0, NoiDung: "", ThoiGian: "", TenDangNhap: "", Level: 1 }],
            errorUrl: false
        };
    }

    componentDidMount() {
        var search = window.location.search;
        axios.get('/chi-tiet/phu-kien' + search).then(result => {
            if (typeof result.data.detail == "undefined") {
                this.setState({
                    errorUrl: true
                })
            } else {
                this.setState({
                    accessoriesDetail: result.data.detail,
                    accessoriesImages: result.data.images,
                    recommendPrds: result.data.recommendPrds,
                    commentLevel1: result.data.commentLevel1,
                    commentLevel2: result.data.commentLevel2
                })
            }
            
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.errorUrl == true ?
                        <NotFound />
                        :
                        <div>
                            <div className="container prds-detail">
                                <Title title={this.state.accessoriesDetail[0].TenPhuKien} />

                                <Images images={this.state.accessoriesImages} />

                                <div className="col-md-6 col-sm-6 col-xs-12 prds-specification">

                                    <div className="col-xs-12 prds-price" style={{ fontSize: "22px", border: "none" }}>
                                        {
                                            this.state.accessoriesDetail[0].GiaKhuyenMai == null ?
                                                <b style={{ color: "red" }} className="float-left">{this.state.accessoriesDetail[0].GiaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</b> :
                                                <div>
                                                    <b style={{ color: "red" }} className="float-left">{this.state.accessoriesDetail[0].GiaKhuyenMai.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</b>
                                                    <strike className="float-right">{this.state.accessoriesDetail[0].GiaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} đ</strike>
                                                </div>
                                        }

                                    </div>

                                    <div className="col-xs-12">
                                        <h3>Thông tin</h3>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Loại phụ kiện: </p>
                                        <p className="col-md-8 col-xs-7">{this.state.accessoriesDetail[0].LoaiPhuKien}</p>
                                    </div>
                                    <div className="col-xs-12">
                                        <p className="col-md-4 col-xs-5">Hãng phát hành: </p>
                                        <p className="col-md-8 col-xs-7">{this.state.accessoriesDetail[0].Hang}</p>
                                    </div>

                                    <h3 className="col-xs-12">Mô tả sản phẩm</h3>
                                    <p className="col-xs-12">{this.state.accessoriesDetail[0].ThongTin}</p>
                                </div>

                                <div className="col-md-8 col-sm-7 col-xs-12 prds-description">
                                    <Comments commentLevel1={this.state.commentLevel1} commentLevel2={this.state.commentLevel2} />
                                </div>

                                <div className="col-md-4 col-sm-5 col-xs-12 add-buy-btn">
                                    <div className="col-xs-12">
                                        <button type="button" className="btn btn-default col-xs-12 adding-btn" onClick={() => {
                                            axios.get("/trang-chu").then(result => {
                                                if (typeof result.data.account == "undefined" && typeof result.data.level == "undefined") {
                                                    var mess = window.confirm("Bạn cần đăng nhập để có thể thực hiện tác vụ này.");
                                                    if (mess == true) {
                                                        window.location = "http://localhost:3000/tai-khoan/dang-nhap";
                                                    }
                                                } else if (typeof result.data.account != "undefined" && typeof result.data.level != "undefined") {
                                                    var ma_san_pham = this.state.accessoriesDetail[0].MaPhuKien;
                                                    var loai_san_pham = "Phụ kiện";
                                                    var account = result.data.account;
                                                    axios.post("/gio-hang/them", { ma_san_pham, loai_san_pham, account }).then(result1 => {
                                                        if (result1.data.errorRes) {
                                                            alert(result1.data.errorRes);
                                                        } else if (result1.data.successRes) {
                                                            alert(result1.data.successRes);
                                                            window.location = "http://localhost:3000/";
                                                        }
                                                    })
                                                }
                                            });
                                        }}>THÊM VÀO GIỎ HÀNG</button>
                                    </div>
                                    <div className="col-xs-12">
                                        <button type="button" className="btn btn-default col-xs-12 buying-btn" onClick={() => {
                                            axios.get("/trang-chu").then(result => {
                                                if (typeof result.data.account == "undefined" && typeof result.data.level == "undefined") {
                                                    var mess = window.confirm("Bạn cần đăng nhập để có thể mua hàng.");
                                                    if (mess == true) {
                                                        window.location = "http://localhost:3000/tai-khoan/dang-nhap";
                                                    }
                                                } else if (typeof result.data.account != "undefined" && typeof result.data.level != "undefined") {
                                                    window.location = "/mua-hang/phu-kien" + window.location.search;
                                                }
                                            });
                                        }}>MUA NGAY</button>
                                    </div>
                                </div>
                            </div>

                            <RecommendPrds products={this.state.recommendPrds} type="phu-kien" />
                        </div>
                }
            </div>
        );
    }
}

class ProductDetail extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.match.params.type == "phu-kien" ?
                        <AccessoriesDetail /> :
                        this.props.match.params.type == "dien-thoai" ?
                        <PhoneDetail /> : ''
                }
            </div>
            );
    }
}



export default ProductDetail;