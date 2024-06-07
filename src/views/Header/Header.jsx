import React from 'react';
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
    navigate('/')
  }

  return (
    <div className="d-flex" id="headerDiv">
      {token.length != 0 &&
          <Link className='me-2'><PoweroffOutlined onClick={logoutBtn} style={{ fontSize: '2em' }}/></Link>
        }
    </div>
  );
}

export default Header;