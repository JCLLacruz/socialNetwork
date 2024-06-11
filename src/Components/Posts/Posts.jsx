import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPost } from '../../features/post/postSlice';
import Post from '../Post/Post';

const Posts = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.post);
    useEffect(()=> {
        dispatch(getAllPost());
    },[])

  return (
    <div>
        <Post posts={posts}/>
    </div>
  )
}

export default Posts