import React, { useEffect, useState } from 'react';
import Posts from '../../Components/Posts/Posts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost } from '../../features/post/postSlice';
import { Spin } from 'antd';
import Post from '../../Components/Post/Post';
import './Home.scss';
import User from '../../Components/User/User';
import { userInfo } from '../../features/auth/authSlice';

const Home = () => {
	const { user, isLoading } = useSelector((state) => state.auth);
  const [postFromFollows, setPostFromFollows] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userInfo());
	}, [dispatch]);

	useEffect(() => {
		if (user && user.FollowIds) {
			let posts = [];
			for (const follow of user.FollowIds) {
				if (follow.PostIds) {
					posts = [...posts, ...follow.PostIds];
				}
			}
			setPostFromFollows(posts);
		}
	}, [user]);
	if (isLoading) {
		return <Spin />;
	}


	return (
		<div>
			<span className='homePost'>
				<Post posts={postFromFollows} />
			</span>
		</div>
	);
};

export default Home;
