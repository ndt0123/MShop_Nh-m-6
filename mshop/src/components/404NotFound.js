import React, { Component } from 'react';

class NotFound extends React.Component {
    render() {
        return (
            <div className="col-xs-12">
                <div style={{ width: "100%" }}>
                    <div style={{
                        height: "184px",
                        width: "286px",
                        margin: "auto"}}>
                        <img src="../images/404NotFound.png" />
                    </div>
                </div>
                <p style={{ textAlign: "center" }}>Rất tiếc chúng tôi không tìm thấy kết quả theo yêu cầu của bạn</p>
                <p style={{ textAlign: "center" }}>Vui lòng thử lại</p>
            </div>
            );
    }
}

export default NotFound;