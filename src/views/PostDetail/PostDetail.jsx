import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPostById } from '../../features/post/postSlice';
import Post from '../../Components/Post/Post';
import { Spin } from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import './PostDetail.scss'

const PostDetail = () => {
	const { id } = useParams();
	const { post, isLoading } = useSelector((state) => state.post);
	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  if(isLoading) {
    return <Spin/>
  }
	return (
		<div id='postDetailDiv'>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<div>
				<Link to="/comments"><CommentOutlined style={{ fontSize: '2em' }}/></Link>
			</div>
		</div>
	);
};

export default PostDetail;
