import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../features/post/postSlice';

const Post = () => {
	const initialValues = {
		title: '',
		body: '',
	};

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
	};

	return (
		<div id='newPostDiv'>
			<form onSubmit={onSubmit}>
				<div className='d-flex justify-content-between'>
					<label htmlFor='titleInput'>Title: </label>
					<input type='text' id='title' name='title' value={title} onChange={onChange} placeholder='Please insert a title.' />
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='bodyPost'>Content:</label>
					<textarea type='email' id='bodyPost' name='body' value={body} onChange={onChange} placeholder='Please insert content.'></textarea>
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='titleInput'>Title: </label>
          <input type="file" name="image" id="" onChange={handleFileChange} />
				</div>
				<input type='submit' className='btn btn-primary' />
			</form>
		</div>
	);
};

export default Post;
