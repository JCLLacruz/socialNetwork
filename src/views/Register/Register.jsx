import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const initialValues = {
        username: '',
        birthday: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatPassword: '',
    };

    const [formData, setFormData] = useState(initialValues);
    const [file, setFile] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { username, birthday, firstname, lastname, email, password, repeatPassword } = formData;

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert("Passwords do not match.");
            return;
        }
        const newUserFormData = new FormData();
        newUserFormData.append('username', username);
        newUserFormData.append('firstname', firstname);
        newUserFormData.append('lastname', lastname);
        newUserFormData.append('email', email);
        newUserFormData.append('password', password);
        newUserFormData.append('image_path', file);
        newUserFormData.append('birthday', birthday);
        dispatch(register(newUserFormData));
        navigate('/');
    };

    return (
        <div id='registerDiv'>
            <h2 className='mb-2'>Register</h2>
            <form onSubmit={onSubmit}>
                <div className='d-flex flex-column'>
                    <label htmlFor='username'>Username</label>
                    <input 
                        type='text' 
                        id='username' 
                        name='username' 
                        value={username} 
                        onChange={onChange} 
                        placeholder='Please insert your username.' 
                        required 
                    />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        value={email} 
                        onChange={onChange} 
                        placeholder='Please insert your email.' 
                        required 
                    />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='firstname'>Firstname</label>
                    <input 
                        type='text' 
                        id='firstname' 
                        name='firstname' 
                        value={firstname} 
                        onChange={onChange} 
                        placeholder='Please insert your firstname.' 
                        required 
                    />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='lastname'>Lastname</label>
                    <input 
                        type='text' 
                        id='lastname' 
                        name='lastname' 
                        value={lastname} 
                        onChange={onChange} 
                        placeholder='Please insert your lastname.' 
                        required 
                    />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='birthday'>Birthday</label>
                    <input 
                        type='date' 
                        id='birthday' 
                        name='birthday' 
                        value={birthday} 
                        onChange={onChange} 
                        required 
                    />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type='password' 
                        id='password' 
                        name='password' 
                        value={password} 
                        onChange={onChange} 
                        placeholder='Please insert your password.' 
                        required 
                    />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='repeatPassword'>Repeat Password</label>
                    <input 
                        type='password' 
                        id='repeatPassword' 
                        name='repeatPassword' 
                        value={repeatPassword} 
                        onChange={onChange} 
                        placeholder='Please repeat your password.' 
                        required 
                    />
                </div>
                <div className='d-flex flex-column'>
                    <label htmlFor='profileImage'>Profile Image</label>
                    <input 
                        type='file' 
                        id='profileImage' 
                        name='image_path' 
                        onChange={handleFileChange} 
                    />
                </div>
                <div className='d-flex flex-column'>
                    <h6>Do you have an account?</h6>
                    <Link to='/'>Login</Link>
                </div>
                <div className='d-flex flex-column'>
                    <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                    <button 
                        type='button' 
                        className='btn btn-secondary mt-2' 
                        onClick={() => setFormData(initialValues)}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
