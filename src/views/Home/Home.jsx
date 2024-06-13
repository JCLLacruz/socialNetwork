import React, { useEffect } from 'react'
import Posts from '../../Components/Posts/Posts'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost } from '../../features/post/postSlice'
import { Spin } from 'antd'
import Post from '../../Components/Post/Post'

const Home = () => {
  const {posts, isLoading} = useSelector((state) => state.post)
  const dispatch = useDispatch();

console.log('posts', posts);

  useEffect(()=>{
    dispatch(getAllPost());
  },[])

  if(isLoading){
    return <Spin/>
  }

  return (
    <div>
      <Post posts={posts}/>
    </div>
  )
}

export default Home