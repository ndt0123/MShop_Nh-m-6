import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import Menu from './components/menu.js';
import Footer from './components/footer.js';

import ShoppingCart from './shoppingCart.js';
import Shopping from './shopping.js';
import SearchingResult from './searchingResult.js';
import ProductDetail from './productDetail.js';
import Phone from './phone.js';
import LogInSignInForm from './logIn.js';
import Accessories from './accessories.js';
import Home from './home.js';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Menu />
                <div className="Content">
                    <Route path="/" exact component={Home} />
                    <Route path="/dien-thoai" component={Phone} />
                    <Route path="/chi-tiet/:type" component={ProductDetail} />
                    <Route path="/tim-kiem/:type" component={SearchingResult} />
                    <Route path="/mua-hang" component={Shopping} />
                    <Route path="/gio-hang" component={ShoppingCart} />
                    <Route path="/phu-kien" component={Accessories} />
                    <Route path="/tai-khoan/:action" component={LogInSignInForm} />
                </div>
                <Footer />
            </div>
        </Router>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));