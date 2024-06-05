import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import {PlusSquareOutlined, UserOutlined } from '@ant-design/icons'

const Footer = () => {

  return (
    <div id='footerDiv'>
      <Link to='/newpost'><PlusSquareOutlined style={{ fontSize: '2em' }}/></Link>
      <Link to='/profile'><UserOutlined style={{ fontSize: '2em' }}/></Link>
    </div>
  )
}

export default Footer