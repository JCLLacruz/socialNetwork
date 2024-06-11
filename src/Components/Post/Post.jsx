import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Post.scss'
import { getPostById } from '../../features/post/postSlice';

const Post = ({posts}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onClick = (id) => {
		dispatch(getPostById(id));
		navigate('/postdetail/id/' + id)
	}
	return (
		<>
			{posts.map((post) => {
				return (
					<div className='post' onClick={()=>onClick(post._id)} key={post._id}>
						{post.image_path != 'nonPostImage' && (
							<div className='post-image'>
								<img src={post.image_path} alt={post.title} />
							</div>
						)}
						<div className='post-header'>
							<h2 className='post-title'>{post.title}</h2>
						</div>
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
