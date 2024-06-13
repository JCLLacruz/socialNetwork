import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPosts } from '../../features/post/postSlice';
import { getUserById, unfollowUser, userInfo } from '../../features/auth/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.scss';
import Post from '../../Components/Post/Post';

const Profile = () => {
	const { user } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const localStorageUser = JSON.parse(localStorage.getItem('user'));

	const followUser = (id) => {
		dispatch(followUser(id));
		dispatch(userInfo());
	};
	console.log(user);

	return (
		<div className='mt-3'>
			<div className='container text-center'>
				<div className='row'>
					<div className='col'>
						<div className='row'>
							<img src={user.image_path} />
							<span>{user.username}</span>
						</div>
					</div>
					<div className='col'>
						<div className='row'>
							<span>{user.PostIds.length}</span>
							<span>posts</span>
						</div>
					</div>
					<div className='col'>
						<div className='row'>
							<span>{user.FollowerIds.length}</span>
							<span>follower</span>
						</div>
					</div>
					<div className='col'>
						<div className='row'>
							<span>{user.FollowIds.length}</span>
							<span>following</span>
						</div>
					</div>
				</div>
				<div className='row mt-5'>
					<div className='col'>
						{localStorageUser._id == user._id ? (
							<Link className='btn btn-primary' to='/editprofile'>
								Edit Profile
							</Link>
						) : localStorageUser.FollowIds.include(user._id) ? (
							<button className='btn btn-primary' onClick={() => unfollowUser(user._id)}>
								Unfollow
							</button>
						) : (
							<button className='btn btn-primary' onClick={() => followUser(user._id)}>
								Follow
							</button>
						)}
					</div>
					<div className='col'>
						<span>SHARE PROF</span>
					</div>
				</div>
			</div>

			<div className='d-flex flex-wrap justify-content-center mt-4'>
				<Post posts={localStorageUser.PostIds} />
			</div>
		</div>
	);
};

export default Profile;
