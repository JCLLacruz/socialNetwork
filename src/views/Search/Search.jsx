import React, { useEffect, useState } from 'react';
import Post from '../../Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, getPostsByTitle } from '../../features/post/postSlice';
import './Search.scss'

const Search = () => {
	const dispatch = useDispatch();
	const {posts} = useSelector((state) => state.post)
	const [search, setSearch] = useState('');

	const handleSearch = (e) => {
		setSearch(e.target.value);
		if (e.key == 'Enter') {
			dispatch(getPostsByTitle(search));
			if (search == '') {
				dispatch(getAllPost());
			}
		}
	};

	return (
		<>
			<input className='w-100' type='text' name='search' placeholder='Search' onKeyUp={handleSearch} />
      <div className='d-flex justify-content-center'>
			<div className='postContainer'>
					<Post className='post' posts={posts}/>
			</div>
      </div>
		</>
	);
};

export default Search;
