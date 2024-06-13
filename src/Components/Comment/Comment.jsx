import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../features/post/postSlice';
import { Modal, Spin } from 'antd';
import './Comment.scss';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { deleteComment, getAllComments, updateComment } from '../../features/comment/commentSlice';

const Comment = ({ postId }) => {
	const { user } = useSelector((state) => state.auth);
	const { post, isLoading } = useSelector((state) => state.post);
	const { comments } = useSelector((state) => state.comment);
	const dispatch = useDispatch();

	useEffect(() => {
		if (postId) {
			dispatch(getPostById(postId));
		}
		dispatch(getAllComments())
	}, [dispatch, postId]);
	
	const initialValue = {
		body: '',
	};
	const [formData, setFormData] = useState(initialValue);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleDeleteComment = (id) => {
		dispatch(deleteComment(id));
	};

	const showModal = (comment) => {
		setIsModalOpen(true);
		setFormData(comment);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const handleOk = () => {
		setIsModalOpen(false);
		dispatch(updateComment(formData));
	};

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const localStorageUser = JSON.parse(localStorage.getItem('user'));
	const reversedComments = post?.CommentIds ? [...post.CommentIds].reverse() : [];

	return (
		<div className='p-3 gap-2 fatherCommentDiv'>
			{isLoading ? (
				<Spin />
			) : (
				reversedComments.map((comment) => (
					<div id={comment._id} key={comment._id} className='d-flex justify-content-between commentDiv'>
						<p>{comment.body}</p>
						{(comment.UserId == localStorageUser._id || post.UserId._id == localStorageUser._id) && (
							<div className='d-flex flex-column justify-content-between align-items-start'>
								<DeleteOutlined style={{ fontSize: '1rem', color: 'red' }} onClick={() => handleDeleteComment(comment._id)} />
								<EditOutlined style={{ fontSize: '1rem' }} onClick={() => showModal(comment)} />
							</div>
						)}
					</div>
				))
			)}
			<Modal title='Edit Comment' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<form>
					<div className='form-group'>
						<label>Comment</label>
						<input type='text' className='form-control' name='body' value={formData.body} onChange={onChange} />
					</div>
				</form>
			</Modal>
		</div>
	);
};

export default Comment;
