import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';
import { Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {FaPlus, FaTrash, FaWhmcs} from "react-icons/fa";

class ShowList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listEmployee:[]
    }
  }

  componentDidMount(){
     this.loadEmployee();
  }

  loadEmployee(){
      axios.get("http://localhost:5000/nguoidung/list")
      .then(res=>{
      if (res.data) {
        const data = res.data
        this.setState({listEmployee:data})
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })

    }

  render(){
    return(
        <Table hover>
          <thead>
            <tr>
              <th>Mã người dùng</th>
              <th>Tên</th>
              <th>Tên đăng nhập</th>
              <th>Email</th>
              <th>Số điện thoại</th>
              <th>Mật khẩu</th>
              {/*<th>Level</th>*/}
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {this.loadFillData()}
          </tbody>
        </Table>
      )
    }

  loadFillData(){

    return this.state.listEmployee.map((data)=>{
        if(data.Level === 1){
      return(
        <tr key={data.MaNguoiDung}>
          <td>{data.MaNguoiDung}</td>
          <td>{data.TenNguoiDung}</td>
          <td>{data.TenDangNhap}</td>
          <td>{data.Email}</td>
          <td>{data.SDT}</td>
          <td>{data.Password}</td>
          {/*<td>{data.Level}</td>*/}
          <td className="lasttd"><ul>
            <Link to={"/user/edit/"+data.MaNguoiDung} className="btn btn-primary"><FaWhmcs /></Link> 
            <Button color="danger" onClick={()=>this.onDelete(data.MaNguoiDung)}><FaTrash /></Button></ul>
          </td>
        </tr>
      )
      }
      
    })
  }

    onDelete(MaNguoiDung){
        Swal.fire({
          title: 'Bạn chắc chắc muốn xóa?',
          text: '',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {
            this.sendDelete(MaNguoiDung)
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'OK',
              '',
              'error'
            )
          }
        })
    }
    sendDelete(MaNguoiDung)
        {
         // url de backend
          const baseUrl = `http://localhost:5000/phukien/employee/${MaNguoiDung}`;   // parameter data post
          // network
          axios.delete(baseUrl)
          .then(response =>{
            if (response.data) {
              Swal.fire(
                'Đã xóa',
                'OK',
                'success'
              )
              this.loadEmployee()
            }
          })
          .catch ( error => {
            alert("Error 325 ")
          })
        }
}


export default ShowList;

