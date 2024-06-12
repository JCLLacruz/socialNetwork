import React, { useEffect, useState } from 'react';
import Post from '../../Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, getPostsByTitle } from '../../features/post/postSlice';
import { getUsers } from '../../features/auth/authSlice';
import './Search.scss'
import User from '../../Components/User/User';

const Search = () => {
	const dispatch = useDispatch();
	const {posts} = useSelector((state) => state.post)
	const {users} = useSelector((state) => state.auth)
	const [search, setSearch] = useState('');
	const fakePosts =[];

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const handleSearchPost = (e) => {
		setSearch(e.target.value);
		if (e.key == 'Enter') {
			dispatch(getPostsByTitle(search));
			if (search == '') {
				dispatch(getAllPost());
			}
		}
	};

	const handleSearchUser = (e) => {
		setSearch(e.target.value);
		if (e.key == 'Enter') {
			console.log('serching user')
			// dispatch(getPostsByTitle(search));
			// if (search == '') {
			// 	dispatch(getAllPost());
			// }
		}
	};

	return (
		<>
			<input className='w-100' type='text' name='search' placeholder='Search' onKeyUp={handleSearchPost} />
			<div className='d-flex justify-content-center'>
					<div className='postContainer'>
							<Post posts={posts}/>
					</div>
			</div>

			{/* <h3 className='mt-5'>Find new users </h3> */}
			<h3 className='mt-3'>Find new friends </h3>
			<input className='w-100 mb-3' type='text' name='searchUser' placeholder='Search' onKeyUp={handleSearchUser} />
			{/* <div className='d-flex justify-content-center'>		
				<div className='postContainer'>
					<User className='post' users={users}/>
				</div>
			</div> */}

			<div className='d-flex justify-content-center'>
					<div className='postContainer'>
							<User users={users}/>
					</div>
			</div>

			

			
		</>
	);
};

export default Search;
