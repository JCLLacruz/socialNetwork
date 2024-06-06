import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Post.scss'

const Post = () => {
	const { posts } = useSelector((state) => state.post);
	const navigate = useNavigate();
	return (
		<>
			{posts.map((post) => {
				return (
					<div className='post' onClick={() => navigate('/postdetail/id/' + post._id)} key={post._id}>
						<div className='post-header'>
							<h2 className='post-title'>{post.title}</h2>
						</div>
						{post.image_path != 'nonPostImage' && (
							<div className='post-image'>
								<img src={post.image} alt={post.title} />
							</div>
						)}
						<div className='post-body'>
							<p>{post.body}</p>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Post;
