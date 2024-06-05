import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostById } from '../../features/post/postSlice';
import Post from '../../Components/Post/Post';

const PostDetail = () => {
	const { id } = useParams();
  const {post } =useSelector((state) => state.post)
	const dispatch = useDispatch();
	console.log(id);
	useEffect(() => {
		dispatch(getPostById(id));
	},[]);
	return <div>
    <h2>{post.title}</h2>
    </div>;
};

export default PostDetail;
