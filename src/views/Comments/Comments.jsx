import React from 'react'
import { useSelector } from 'react-redux'

const Comments = () => {
  const {user} =useSelector(state => state.auth)
  return (
    <div>Comments</div>
  )
}

export default Comments