import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Footer extends React.Component {
    render() {

        return (
            <div className="contriner-fluid box-footer">
                <div className="container footer">
                    <div className="col-xs-12">
                        <h3 className="col-xs-12">Thông tin liên hệ</h3>
                        <p className="col-xs-12">
                            Nhóm 6 - INT3306 4
					        <br />Điện thoại:
					        <br />Email:
					        <br />Địa chỉ: Đại học Công Nghệ-đại học Quốc Gia Hà Nội - Số 141 Xuân Thủy, Cầu Giấy, Hà Nội
					        <br />Nhóm 6 - INT3306 4
				        </p>
			        </div>

		        </div>
	        </div>

        );
    }
}

export default Footer;