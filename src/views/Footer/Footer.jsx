import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import {PlusSquareOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { getAllPost } from '../../features/post/postSlice'

const Footer = () => {
  const dispatch = useDispatch()
  return (
    <div id='footerDiv'>
      <Link to='/newpost'><PlusSquareOutlined style={{ fontSize: '2em' }}/></Link>
      <span  onClick={()=> dispatch(getAllPost())}>    <Link to='/search'><SearchOutlined style={{ fontSize: '2em' }}/></Link></span>
        <Link to='/profile'><UserOutlined style={{ fontSize: '2em' }}/></Link>

    </div>
  )
}

export default Footer