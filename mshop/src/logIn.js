import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorUsername: "",
            errorPassword: ""
        };
    }

    // Sự kiện click vào nút đăng nhập
    // Dừng sự kiện submit và hiển thị thông báo khi một trường nào đó chưa được nhập
    // Gán các giá trị error state
    onClickSubmitBtn = (event) => {
        if (this.state.password.trim() === "" && this.state.username.trim() === "") {
            event.preventDefault();
            this.setState({
                errorUsername: "Bạn cần nhập tên đăng nhập",
                errorPassword: "Bạn cần nhập mật khẩu"
            });
        } else if (this.state.password.trim() === "" && this.state.username.trim() !== "") {
            event.preventDefault();
            this.setState({
                errorUsername: "",
                errorPassword: "Bạn cần nhập mật khẩu"
            });
        } else if (this.state.password.trim() !== "" && this.state.username.trim() === "") {
            event.preventDefault();
            this.setState({
                errorUsername: "Bạn cần nhập tên đăng nhập",
                errorPassword: ""
            });
        }

        if (this.state.password.trim() !== "" && this.state.username.trim() !== "") {
            event.preventDefault();
            axios.post('/tai-khoan/dang-nhap', { username_logIn: this.state.username, password_logIn: this.state.password }).then(result => {
                if (typeof result.data.error != "undefined") {
                    alert(result.data.error);
                } else {
                    window.location = "http://localhost:3000/";
                }
            });
        }

        
    }
    // Lấy giá trị của user name
    // Gán vào biến state username
    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    // Lấy giá trị password
    // Gán vào biến state password
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    responseFacebook(response) {
        console.log(response);
    }
    responseGoogle(response) {
        console.log(response)
    }
    loginbyfb(response) {
        axios.post('/tai-khoan/dang-nhap/fb', { user_name: response.name}).then(result => {
            if (typeof result.data.error !== "undefined") {
                alert(result.data.error);
            } else {
                window.location = "http://localhost:3000/";
            }
        });
    }

    loginbygg(response) {
        axios.post('/tai-khoan/dang-nhap/gg', { user_name: response.profileObj.name, user_email: response.profileObj.email }).then(result => {
            if (typeof result.data.error !== "undefined") {
                alert(result.data.error);
            } else {
                window.location = "http://localhost:3000/";
            }
        });
    }

    render() {
        return (
            <div id="logIn-form">
                <div className="logIn-title title" style={{ width: "100%" }}>
                    <p>ĐĂNG NHẬP</p>
                </div>

                <form className="logIn-form form" style={{ width: "100%" }} method="post" >
                    <div>
                        <p>Tên đăng nhập</p>
                        <span className="glyphicon glyphicon-user"></span>
                        <input type="text" name="username_logIn" placeholder="Nhập tên đăng nhập" onChange={this.changeUsername} />

                    </div>
                    <p className="col-xs-12 error-input-info" style={{ display: "block" }}>{this.state.errorUsername}</p>
                    <div>
                        <p>Mật khẩu</p>
                        <span className="glyphicon glyphicon-lock"></span>
                        <input type="password" name="password_logIn" placeholder="Nhập mật khẩu" onChange={this.changePassword} />

                    </div>
                    <p className="col-xs-12 error-input-info" style={{ display: "block" }}>{this.state.errorPassword}</p>
                    <Link to="/tai-khoan/dang-ky" className="float-right" onClick={this.changeFormState}>Đăng ký</Link>
                    <button onClick={this.onClickSubmitBtn}>ĐĂNG NHẬP</button>
                </form>

                <div style={{ width: "100%" }}>
                    <p style={{ textAlign: "center", width: "100%", margin: "10px 0px" }}>Hoặc đăng nhập bằng</p>
                </div>

                <div className="logIn-with-fb-gg">
                    <div>
                        <Link to="">
                            <FacebookLogin
                                appId="1220122458197880"
                                fields="name,email,picture"
                                scope="public_profile"
                                callback={this.loginbyfb}
                                cssClass="btnFacebook"
                                icon="fa fa-facebook"
                                textButton="&nbsp;&nbsp;Facebook"
                            />
                        </Link>

                        <Link to="">
                            <GoogleLogin
                                clientId="502877853814-nokv9s5ok8plcjtodojvu9ktgeugepom.apps.googleusercontent.com"
                                
                                render={renderProps => (
                                    <button onClick={renderProps.onClick} className="btnGoogle"><i className="fa fa-google"></i>&nbsp;&nbsp;Google</button>
                                  )}
                                onSuccess={this.loginbygg}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Link>
                    </div>
                </div>

            </div>
            );
    }
}

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            rePassword: "",
            errorUsername: "",
            errorPassword: "",
            errorRePassword: ""
        };
    }

    onClickSubmitBtn = (event) => {
        var canSubmit = true;
        if (this.state.username.trim() === "") {
            canSubmit = false;
            this.setState({
                errorUsername: "Bạn cần nhập tên đăng nhập"
            })
        } else {
            this.setState({
                errorUsername: ""
            })
        }
        if (this.state.password === "") {
            canSubmit = false;
            this.setState({
                errorPassword: "Bạn cần nhập mật khẩu",
                errorRePassword: ""
            })
        } else if (this.state.password !== "") {
            if (this.state.rePassword === "") {
                canSubmit = false;
                this.setState({
                    errorPassword: "",
                    errorRePassword: "Bạn cần nhập lại mật khẩu"
                })
            } else if (this.state.rePassword !== "") {
                if (this.state.rePassword !== this.state.password) {
                    canSubmit = false;
                    this.setState({
                        errorPassword: "",
                        errorRePassword: "Nhập lại mật khẩu bị sai"
                    })
                } else {
                    this.setState({
                        errorPassword: "",
                        errorRePassword: ""
                    })
                }
            }
        }
        if (!canSubmit) {
            event.preventDefault();
        } else {
            event.preventDefault();
            axios.post('/tai-khoan/dang-ky', { username_signIn: this.state.username, password_signIn: this.state.password, rePassword_signIn: this.state.rePassword }).then(result => {
                if (typeof result.data.error != "undefined") {
                    alert(result.data.error);
                } else {
                    window.location = "http://localhost:3000/";
                }
            })
        }
    }

    // Lấy giá trị của các trường input 
    // Bằng sự kiện onChange
    changeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }
    changeRePassword = (event) => {
        this.setState({
            rePassword: event.target.value
        });
    }

    render() {
        return (
            <div id="signIn-form">
                <div className="logIn-title title" style={{ width: "100%" }}>
                    <p>ĐĂNG KÝ</p>
                </div>

                <form className="logIn-form form" method="post" style={{ width: "100%" }}>
                    <div>
                        <p>Tên đăng nhập</p>
                        <span className="glyphicon glyphicon-user"></span>
                        <input type="text" name="username_signIn" placeholder="Nhập tên đăng nhập" onChange={this.changeUsername} />
                    </div>
                    <p className="col-xs-12 error-input-info" style={{ display: "block" }}>{this.state.errorUsername}</p>
                    <div>
                        <p>Mật khẩu</p>
                        <span className="glyphicon glyphicon-lock"></span>
                        <input type="password" name="password_signIn" placeholder="Nhập mật khẩu" onChange={this.changePassword} />
                    </div>
                    <p className="col-xs-12 error-input-info" style={{ display: "block" }}>{this.state.errorPassword}</p>
                    <div>
                        <p>Xác nhận mật khẩu</p>
                        <span className="glyphicon glyphicon-lock"></span>
                        <input type="password" name="rePassword_signIn" placeholder="Xác nhận mật khẩu" onChange={this.changeRePassword} />
                    </div>
                    <p className="col-xs-12 error-input-info" style={{ display: "block" }}>{this.state.errorRePassword}</p>
                    <Link to="/tai-khoan/dang-nhap" className="float-right" onClick={this.changeFormState}>Đăng nhập</Link>
                    <button onClick={this.onClickSubmitBtn}>ĐĂNG KÝ</button>
                </form>

            </div>
            );
    }
}

class LogInSignInForm extends React.Component {

    render() {
        return (
            <div className="box-logIn-signIn">
                {
                    this.props.match.params.action === "dang-nhap" ?
                        <LogIn /> : ''
                    
                }
                {
                    this.props.match.params.action === "dang-ky" ?
                        <SignIn /> : ''
                }
            </div>

        );
    }
}

export default LogInSignInForm;