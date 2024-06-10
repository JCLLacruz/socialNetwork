import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPostById, getPostsByTitle } from '../../features/post/postSlice';
import Post from '../../Components/Post/Post';
import { Spin } from 'antd';
import { CommentOutlined } from '@ant-design/icons';
import './PostDetail.scss'

const PostDetail = () => {
	const { id } = useParams();
	const { posts, post, isLoading } = useSelector((state) => state.post);
	const dispatch = useDispatch();

	console.log('post',post);
	console.log('posty',posts);

  useEffect(() => {
    dispatch(getPostById(id));
  }, []);

  if(isLoading) {
    return <div id='spinDiv' className='d-flex justify-content-center align-items-center'>
      <Spin/>
      </div>
  }
	return (
		<div id='postDetailDiv'>
    <div className='post-header'>
        <h2 className='post-title'>{post.title}</h2>
    </div>
    {post.image && (
        <div className='post-image'>
            <img src={post.image_path != 'nonPostImage'} alt={post.title} />
        </div>
    )}
    <div className='post-body'>
        <p>{post.body}</p>
    </div>
    <div className='post-comments'>
        <Link to="/comments"><CommentOutlined style={{ fontSize: '2em' }}/></Link>
    </div>
</div>

	);
};

export default PostDetail;
