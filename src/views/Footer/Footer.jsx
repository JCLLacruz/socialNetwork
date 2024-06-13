import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Footer.scss'
import {HomeOutlined, PlusSquareOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { userInfo } from '../../features/auth/authSlice'

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localStorageUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div id='footerDiv'>
      <Link to="/home"><HomeOutlined style={{ fontSize: '2em' }}/></Link>
      <Link to='/newpost'><PlusSquareOutlined style={{ fontSize: '2em' }}/></Link>
      <Link to='/search'><SearchOutlined style={{ fontSize: '2em' }}/></Link>
      <UserOutlined style={{ fontSize: '2em', color: '#FCAB1C' }} onClick={()=> {
        dispatch(userInfo())
        navigate('./profile/' + localStorageUser._id)
        }}/>
    </div>
  )
}

export default Footer