import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './ImgPost.scss';
import { getPostById } from '../../features/post/postSlice';

const ImgPost = ({ posts }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const onClick = (id) => {
		dispatch(getPostById(id));
		navigate('/postdetail/id/' + id);
	};
	return (
		<>
			{posts.map((post) => {
				return (
					<div className='img-post' onClick={() => onClick(post._id)} key={post._id}>
						<img src={post.image_path} alt={post.title} />
					</div>
				);
			})}
		</>
	);
};

export default ImgPost;
