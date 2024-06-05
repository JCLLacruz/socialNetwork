import React from 'react';
import { useSelector } from 'react-redux';

const Post = () => {
	const { posts } = useSelector((state) => state.post);
	return <div>Post</div>;
};

export default Post;
