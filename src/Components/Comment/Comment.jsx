import React from 'react'
import { useSelector } from 'react-redux'

const Comment = () => {
  const {user} =useSelector(state => state.auth);
  
  return (
    <div>Comment</div>
  )
}

export default Comment