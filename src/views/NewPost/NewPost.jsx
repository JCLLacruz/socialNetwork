import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../features/post/postSlice';
import { useNavigate } from 'react-router-dom';
import './NewPost.scss';

const Post = () => {
	const initialValues = {
		title: '',
		body: '',
	};
	const navigate = useNavigate();
	const [postData, setPostdata] = useState(initialValues);
	const [file, setFile] = useState(null);

	const { title, body } = postData;

	const dispatch = useDispatch();

	const onChange = (e) => {
		e.preventDefault();
		setPostdata({
			...postData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFileChange = async (e) => {
		setFile(e.target.files[0]);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', title);
		formData.append('body', body);
		formData.append('postImg', file);
		dispatch(createPost(formData));
		navigate("/profile")
	};

	return (
		<div id='newPostDiv'>
			<form onSubmit={onSubmit}>
				<h1>New Posst</h1>
				<div className='d-flex flex-column'>
					<label htmlFor='titleInput'>Title: </label>
					<input className='mt-2' type='text' id='title' name='title' value={title} onChange={onChange} placeholder='Please insert a title.' />
				</div>
				<div className='d-flex flex-column'>
					<label htmlFor='bodyPost'>Content:</label>
					<textarea
						className='mt-2'
						type='email'
						id='bodyPost'
						name='body'
						value={body}
						onChange={onChange}
						placeholder='Please insert content.'
					></textarea>
				</div>
				<div className='d-flex flex-column'>
					<label htmlFor='titleInput'>Post Image</label>
					<input className='mt-2' type='file' name='image' id='titleInput' onChange={handleFileChange} />
				</div>
				<input type='submit' className='btn btn-primary mt-2' value='Send' />
			</form>
		</div>
	);
};

export default Post;
