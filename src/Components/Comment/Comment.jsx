import React from 'react'
import { useSelector } from 'react-redux'

const Comment = () => {
  const {user} =useSelector(state => state.auth);
  const {post} = useSelector(state => state.post);
  
  return (
    <div>
      {post?.CommentIds.map(comment =>{
        return <div key={comment._id}>
          <p>{comment.body}</p>
        </div>
      })}
    </div>
  )
}

export default Comment