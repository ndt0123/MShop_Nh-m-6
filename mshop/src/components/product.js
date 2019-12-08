import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            linkStyle: {
                boxShadow: "none",
                borderRadius: "0px"
            },
            h5Style: {
                color: "black",
                height: "30px", overflow: "hidden", textOverflow: "ellipsis"
            },
            bStyle: {
                color: "#b10000"
            },
            linkClassName: this.props.linkClassName
        };
    }

    mouseOver = () => {
        this.setState(
            {
                linkStyle: {
                    boxShadow: "0px 0px 10px 0px #a7a7a7",
                    borderRadius: "3px"
                },
                h5Style: {
                    color: "blue",
                    height: "30px", overflow: "hidden", textOverflow: "ellipsis"
                },
                bStyle: {
                    color: "red"
                }
            }
        );
    }
    mouseOut = () => {
        this.setState(
            {
                linkStyle: {
                    boxShadow: "none",
                    borderRadius: "0px"
                },
                h5Style: {
                    color: "black",
                    height: "30px", overflow: "hidden", textOverflow: "ellipsis"
                },
                bStyle: {
                    color: "#b10000"
                }
            }
        );
    }
    onClickProduct = () => {
        if (window.location.pathname == '/chi-tiet/' + this.props.type) {
            window.location.assign('/chi-tiet/' + this.props.type + '?id=' + this.props.prds.id);
        }
    }

    render() {
        return (
            <div>
                <Link onClick={this.onClickProduct} to={'/chi-tiet/' + this.props.type + '?id=' + this.props.prds.id} className={this.state.linkClassName} title={this.props.prds.ten} style={this.state.linkStyle} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <img src={this.props.prds.hinhAnh} className="col-xs-12" />
                    <h5 className="col-xs-12 products-title" style={this.state.h5Style}>{this.props.prds.ten}</h5>
                    <b className="col-xs-6" style={this.state.bStyle}>{this.props.prds.giaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'}</b>
                    {
                        this.props.prds.giaBan != this.props.prds.giaGoc ?
                            <strike className="col-xs-6">{this.props.prds.giaGoc.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + 'đ'}</strike> : ''
                    }
                    
                </Link>
            </div>
            );
        
    }
}

export default Product;