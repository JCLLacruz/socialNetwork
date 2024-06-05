import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPost } from '../../features/post/postSlice';
import Post from '../Post/Post';

const Posts = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getAllPost());
    },[])

  return (
    <div>
        <Post/>
    </div>
  )
}

export default Posts