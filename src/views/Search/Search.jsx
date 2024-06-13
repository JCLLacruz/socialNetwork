import React, { useEffect, useState } from 'react';
import Post from '../../Components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPost, getPostsByTitle } from '../../features/post/postSlice';
import { getUsers, getUsersByName } from '../../features/auth/authSlice';
import './Search.scss';
import User from '../../Components/User/User';
import { Spin } from 'antd';

const Search = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.post);
  const { users } = useSelector((state) => state.auth);
  const [search, setSearch] = useState('');
  const [searchUser, setSearchUser] = useState('');

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getAllPost());
  }, []);

  const handleSearchPost = (e) => {
    setSearch(e.target.value);
    if (e.key === 'Enter') {
      search === '' ? dispatch(getAllPost()) : dispatch(getPostsByTitle(search));
    }
  };

  const handleSearchUser = (e) => {
    setSearchUser(e.target.value);
    if (e.key === 'Enter') {
      searchUser === '' ? dispatch(getUsers()) : dispatch(getUsersByName(searchUser));
    }
  };

  if (isLoading) {
    return (
      <div className='sizeDiv'>
        <Spin />
      </div>
    );
  }

  return (
    <div className='search-container'>
      <div className='search-section'>
        <input className='w-100' type='text' name='search' placeholder='Search Posts' onKeyUp={handleSearchPost} />
        <div className='postContainer'>
          <Post posts={posts} from='search' />
        </div>
      </div>
      <div className='search-section'>
        <h3>Find New Friends</h3>
        <input className='w-100 mb-3' type='text' name='searchUser' placeholder='Search Users' onKeyUp={handleSearchUser} />
        <div className='postContainer'>
          <User users={users} from='search' />
        </div>
      </div>
    </div>
  );
};

export default Search;
