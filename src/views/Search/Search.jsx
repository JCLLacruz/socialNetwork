import React, { useEffect } from 'react'
import Post from '../../Components/Post/Post'
import { useDispatch } from 'react-redux'
import { getAllPost } from '../../features/post/postSlice'

const Search = () => {
    const dispatch = useDispatch((state)=> state.Post)
    useEffect(()=>{
        dispatch(getAllPost());
    },[])
  return (
    <div><Post/></div>
  )
}

export default Search