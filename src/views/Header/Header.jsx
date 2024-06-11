import React, { useEffect } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { logout} from '../../features/auth/authSlice'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'
import { PoweroffOutlined } from '@ant-design/icons';

const Header = () => {
  const {token} = useSelector((state)=>state.auth) //login worked
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logoutBtn = (e)=>{
    e.preventDefoult
    dispatch(logout())
  }
  useEffect(()=>{
        return ()=>  navigate('/')
  },[])

  return (
    <div className="d-flex justify-content-end" id="headerDiv">
          <Link className='me-2'><PoweroffOutlined onClick={logoutBtn} style={{ fontSize: '2em' }}/></Link>
    </div>
  );
}

export default Header;