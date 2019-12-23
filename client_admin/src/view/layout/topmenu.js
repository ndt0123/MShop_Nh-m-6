import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
class UserName extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nhanvien: [],
      tenNhanvien : ""
    }
  }
  render(){
  return (
    <div className="topnameUser">
      <FaUserCircle /> Quang
    </div>
  )
  }
}     

export default UserName;




