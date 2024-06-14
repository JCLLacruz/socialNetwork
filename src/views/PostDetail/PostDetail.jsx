import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { deletePost, getPostById, getPostsByTitle, updatePost,addLike } from '../../features/post/postSlice';
import Post from '../../Components/Post/Post';
import { Avatar, Badge, Modal, Spin } from 'antd';
import { CommentOutlined, DeleteOutlined, EditOutlined,HeartOutlined, HeartFilled} from '@ant-design/icons';
import './PostDetail.scss';
import Comments from '../Comments/Comments';

const PostDetail = () => {
	const initialValue = {
		_id: '',
		title: '',
		body: '',
		image_path: '',
	};
	const { posts, post, isLoading } = useSelector((state) => state.post);
	const { user } = useSelector((state) => state.auth);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const localStorageUser = JSON.parse(localStorage.getItem('user'));


	const [formData, setFormData] = useState(initialValue);

	const handleFileChange = async (e) => {
		setFile(e.target.files[0]);
	};

	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const handleDeletePost = () => {
		dispatch(deletePost(post._id));
		navigate('/profile/' + localStorageUser._id);
	};

	const showModal = (post) => {
		setIsModalOpen(true);
		setFormData(post);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleOk = () => {
		setIsModalOpen(false);
		onSubmit();
		navigate('/profile');
	};
	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', title);
		formData.append('body', body);
		formData.append('image_path', file);
		dispatch(updatePost({ ...formData, _id: post._id }));
		navigate('/profile');
	};
	const addLikePost = ()=>{
		console.log('like');
		dispatch(addLike(post._id))
	}
	
	console.log('post',post)
	
	if (isLoading) {
		return (
			<div id='spinDiv' className='d-flex justify-content-center align-items-center'>
				<Spin />
			</div>
		);
	}

	return (
		<div id='postDetailDiv'>
			<div>
				<div className='d-flex justify-content-end gap-2'>
					{post.UserId._id == localStorageUser._id && (
						<div className='d-flex gap-3'>
							<EditOutlined style={{ fontSize: '2em' }} onClick={() => showModal(post)} />
							<DeleteOutlined style={{ fontSize: '2em', color: 'red' }} onClick={() => handleDeletePost()} />
						</div>
					)}
				</div>
			</div>
			{post.image_path && (
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
			<div className='d-flex post-comments gap-2 justify-content-end'>
					<Badge count={post.LikeIds.length} style={{ backgroundColor: '#FCAB1C' }}>
						<HeartOutlined onClick={()=>addLikePost()} style={{ fontSize: '2em', color: '#FCAB1C'}}/>
					</Badge>
					<Badge count={post.CommentIds.length} style={{ backgroundColor: '#FCAB1C' }}>
						<CommentOutlined onClick={()=>navigate('/comments')}style={{ fontSize: '2em', color: '#FCAB1C' }} />
					</Badge>
			</div>
			<Modal title='Edit Product' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<form>
					<div className='form-group'>
						<label>Title</label>
						<input type='text' className='form-control' name='title' value={formData.title} onChange={onChange} />
					</div>
					<div className='form-group'>
						<label>Content</label>
						<input type='text' className='form-control' name='body' value={formData.body} onChange={onChange} />
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default PostDetail;
