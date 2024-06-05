import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';

const Register = () => {
	const initialValues = {
		username: '',
		birthday: '',
		firstname: '',
		lastname: '',
		email: '',
		Password: '',
	};

	const [formData, setFormdata] = useState(initialValues);

	const { username, birthday, firstname, lastname, email, password } = formData;

	console.log(formData);

	const dispatch = useDispatch();

	const onChange = (e) => {
		e.preventDefault();
		setFormdata({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(register(formData));
	};
	return (
		<div id='registerDiv'>
			<form className='d-flex flex-column' onSubmit={onSubmit}>
				<div className='d-flex justify-content-between'>
					<label htmlFor='firstnameInput'>Username: </label>
					<input type='text' id='firstnameInput' name='username' value={username} onChange={onChange} placeholder='Please insert your username.' />
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='emailInput'>Email:</label>
					<input type='email' id='emailInput' name='email' value={email} onChange={onChange} placeholder='Please insert your email.' />
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='firstnameInput'>Firstname: </label>
					<input type='text' id='firstnameInput' name='firstname' value={firstname} onChange={onChange} placeholder='Please insert your firstname.' />
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='firstnameInput'>Lastname: </label>
					<input type='text' id='firstnameInput' name='lastname' value={lastname} onChange={onChange} placeholder='Please insert your lastname.' />
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='firstnameInput'>Birthday: </label>
					<input type='date' id='firstnameInput' name='birthday' value={birthday} onChange={onChange} placeholder='Please insert your birthday.' />
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='firstnameInput'>Password: </label>
					<input type='text' id='password' name='password' value={password} onChange={onChange} placeholder='Please insert your birthday.' />
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='firstnameInput'>Repeat password: </label>
					<input type='text' id='repeatPassword' onChange={onChange} placeholder='Please insert your birthday.' />
				</div>
                <div>
                <input type="submit" value='Submit' className='btn btn-primary'/>
                <input type="submit" value='clear' className='btn btn-primary' onClick={()=>setFormdata(initialValues)}/>
                </div>
			</form>
		</div>
	);
};

export default Register;
