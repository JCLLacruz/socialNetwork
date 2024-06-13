import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUser } from '../../features/auth/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';


export const EditProfile = () => {
    const {user} = useSelector((state)=>state.auth)
    const initialValues = {
		username: user.username,
		birthday: user.birthday.split("T")[0],
		firstname: user.firstname,
		lastname: user.lastname
	};

    const [formData, setFormdata] = useState(initialValues);
    const [file, setFile] = useState(null);

	const { username, birthday, firstname, lastname} = formData;

	const dispatch = useDispatch();
    const navigate = useNavigate()

	const onChange = (e) => {
		e.preventDefault();
		setFormdata({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

	const onSubmit = (e) => {
		e.preventDefault();
        const newUserFormData = new FormData();
        newUserFormData.append('username', username);
        newUserFormData.append('firstname', firstname);
        newUserFormData.append('lastname', lastname);
        newUserFormData.append('image_path', file);
        newUserFormData.append('birthday', birthday);
		dispatch(updateUser(newUserFormData));
        navigate("/profile/"+user._id)
        
    }

  return (
    <div id='updeateUserDiv'>
        <form className='d-flex flex-column' onSubmit={onSubmit}>
            <div className='d-flex justify-content-between'>
                <label htmlFor='firstnameInput'>Username: </label>
                <input type='text' id='firstnameInput' name='username' value={username} onChange={onChange} placeholder='Please insert your username.' />
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
            <div className='d-flex flex-column'>
                <label htmlFor='profileImage'>Profile Image</label>
                <input 
                    type='file' 
                    id='profileImage' 
                    name='image_path' 
                    onChange={handleFileChange} 
                />
            </div>
            <div>
            <input type="submit" value='Submit' className='btn btn-primary'/>
            <span type="button" value='clear' className='btn btn-primary' onClick={()=>setFormdata(initialValues)}>Clear</span>
            </div>
        </form>
    </div>
);
}
