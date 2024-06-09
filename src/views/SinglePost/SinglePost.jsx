import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SinglePost.scss'

const SinglePost = (post) => {
    const navigate = useNavigate();
    return (
        <div className='col'>
            <div className='post' onClick={() => navigate('/postdetail/id/' + post._id)} key={post._id}>
                <div className='post-header'>
                    <h2 className='post-title'>{post.title}</h2>
                </div>
                {post.image_path != 'nonPostImage' && (
                    <div className='post-image'>
                        <img src={post.image_path} alt={post.title} />
                    </div>
                )}
                <div className='post-body'>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost