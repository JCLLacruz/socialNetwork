import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPost } from '../../features/post/postSlice';

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllPost());
    },[])

  return (
    <div>Posts</div>
  )
}

export default Posts