import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostById } from '../../features/post/postSlice';
import { Spin } from 'antd';
import './Comment.scss'

const Comment = () => {
  const {user} =useSelector(state => state.auth);
  const {post, isLoading} =useSelector(state => state.post);
  const dispatch = useDispatch();
  if(isLoading){
    return <Spin/>
  }

  // const commentsReverserd = post.CommentIds.reverse();
  
  return (
    <div className='p-3 gap-2'>
      {post.CommentIds.map(comment =>{
        return <div id='commentDiv' key={comment._id} className='d-flex'>
          <p>{comment.body}</p>
        </div>
      })}
    </div>
  )
}

export default Comment