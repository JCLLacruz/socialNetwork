import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { notification } from 'antd';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;
	const { message, isSuccess, isError, user } = useSelector((state) => state.auth);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isError) {
			notification.error({ message: 'Error', description: message });
			dispatch(reset());
		}
		return () => {
			if (isSuccess) {
				notification.success({ message: 'Success', description: message });
				navigate('/home');
				dispatch(reset());
			}
		};
	}, [isSuccess, isError, message]);

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData));
	};
	return (
		<div id='loginDiv' className='d-flex flex-column justify-content-center'>
			<img src='src\assets\images\icons\logoImg.jpg' />
			<Form onSubmit={onSubmit} className='d-flex flex-column justify-content-center align-items-center'>
				<h2>Login</h2>
				<div>
					<Form.Group controlId='formBasicEmail'>
						<Form.Label>Email address</Form.Label>
						<Form.Control type='email' name='email' value={email} onChange={onChange} placeholder='Enter email' />
						<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
					</Form.Group>

					<Form.Group controlId='formBasicPassword'>
						<Form.Label>Password</Form.Label>
						<Form.Control type='password' name='password' value={password} onChange={onChange} placeholder='Password' autoComplete='true' />
					</Form.Group>

					<Button type='submit' className='btn btn-primary mt-2'>
						Login
					</Button>
					<div>
						<h6>Don't have an account?</h6>
						<Link to='/register' type='text'>
							Register
						</Link>
					</div>
				</div>
			</Form>
		</div>
	);
};
export default Login;
