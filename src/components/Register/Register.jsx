import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';

const Register = () => {
    const initialUser = {
        userName: '',
        birthday: '',
        firstname: '',
        lastname: '',
        email: '',
        Password: '',
    };

    const [formData,setFormdata] = useState(initialUser);

    const { userName, birthday, firstname, lastname, email, password} = initialUser;

    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormdata((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData))
    }
  return (
    <div>
        
    </div>
  )
}

export default Register