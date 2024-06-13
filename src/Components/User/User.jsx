import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './User.scss'
import { getUserById } from '../../features/auth/authSlice';
//import { getUserById } from '../../features/user/authSlice';

const User = ({users}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onClick = (id) => {
		dispatch(getUserById(id));
		navigate('/profile/'+ id);
	}
	return (
		<>
			{users.map((user) => {
				return (
					<div className='user' onClick={()=> onClick(user._id)} key={user._id}>
						{user.image_path != 'nonUserImage' && (
							<div className='user-image'>
								<img src={user.image_path} alt={user.username} />
							</div>
						)}
						<div className='user-header'>
							<h2 className='user-title'>{user.username}</h2>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default User;
