import React from 'react';
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout} from '../../features/auth/authSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'

const Header = () => {
  const {token} = useSelector((state)=>state.auth) //login worked
  const dispatch = useDispatch()
  const logoutBtn = (e)=>{
    e.preventDefoult
    dispatch(logout())
  }

  return (
    <div className="d-flex justify-content-around" id="headerDiv">
      <Link className="btn btn-primary" to="/home"><span>Home</span></Link>
      {token.length != 0 ?
        <>
          <Link className="btn btn-primary" to="/profile">Profile</Link>
          <button className='btn btn-primary' onClick={logoutBtn}>Logout</button>
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