import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Footer.scss'
import {HomeOutlined, PlusSquareOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { getAllPost } from '../../features/post/postSlice'
import { userInfo } from '../../features/auth/authSlice'

const Footer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div id='footerDiv'>
      <Link to="/home"><HomeOutlined style={{ fontSize: '2em' }}/></Link>
      <Link to='/newpost'><PlusSquareOutlined style={{ fontSize: '2em' }}/></Link>
      <Link to='/search'><SearchOutlined style={{ fontSize: '2em' }}/></Link>
      <UserOutlined style={{ fontSize: '2em', color: '#FCAB1C' }} onClick={()=> {
        dispatch(userInfo())
        navigate('./profile')
        }}/>
    </div>
  )
}

export default Footer