import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../features/comment/commentSlice';
import Comment from '../../Components/Comment/Comment';
import { getPostById } from '../../features/post/postSlice';
import './Comments.scss'

const Comments = () => {
	const { user } = useSelector((state) => state.auth);
	const { post } = useSelector((state) => state.post);
	const { comment } = useSelector((state) => state.comment);

	console.log('post', post);
	useEffect(()=>{
		dispatch(getPostById(post._id));
	},[comment]);

	const dispatch = useDispatch();

	const initialValues = {
		body: '',
	};
	const [formData, setFormData] = useState(initialValues);
	const onValuesChange = (changedValues, allValues) => {
		setFormData(allValues);
	};
	const onFinish = () => {
		dispatch(createComment({ ...formData, PostId: post._id }));
	};

	return (
		<div className='commentDiv'>
			<div className=''>
			<Comment post={post} />
			</div>
			<div id='commentFormDiv'>
			<Form  layout='vertical' onFinish={onFinish} initialValues={formData} onValuesChange={onValuesChange}>
				<Form.Item name='body' rules={[{ required: true, message: 'Please insert your username.' }]}>
					<div className='d-flex gap-2'>
						<Input value={formData.username} placeholder='Please insert your username.' />
						<Button type='primary' htmlType='submit' className='d-flex align-items-center'>
							<ArrowRightOutlined />
						</Button>
					</div>
				</Form.Item>
			</Form>
			</div>
		</div>
	);
};

export default Comments;
