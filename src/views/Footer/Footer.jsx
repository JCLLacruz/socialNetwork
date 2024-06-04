import React from 'react'
import Post from '../../Components/Post/Post'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div>
      <Link to='/createpost'>New Post</Link>
    </div>
  )
}

export default Footer