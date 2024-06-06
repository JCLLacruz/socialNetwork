import React from 'react';
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout} from '../../features/auth/authSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'
import { PoweroffOutlined } from '@ant-design/icons';

const Header = () => {
  const {token} = useSelector((state)=>state.auth) //login worked
  const dispatch = useDispatch()
  const logoutBtn = (e)=>{
    e.preventDefoult
    dispatch(logout())
  }

  return (
    <div className="d-flex justify-content-end" id="headerDiv">
      {token.length != 0 ?
        <>
          <Link className='me-2'><PoweroffOutlined onClick={logoutBtn} style={{ fontSize: '2em' }}/></Link>
        </>
        :
        <>
          <Link className="btn btn-primary" to="/login">Login</Link>
          <Link className="btn btn-primary" to="/register">Register</Link>
        </> 
        }
    </div>
  );
}

export default Header;