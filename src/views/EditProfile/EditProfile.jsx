import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';


export const EditProfile = () => {
    const {user} = useSelector((state)=>state.auth)
    console.log('user', user)
    const initialValues = {
		username: user.username,
		birthday: user.birthday,
		firstname: user.firstname,
		lastname: user.lastname
	};

  return (
    <div>
        <p><br/><br/></p>
        <p>{user.username}</p>
        <p>{user.name}</p>
        <p>{user.firstname}</p>
        <p>{user.lastname}</p>
        <p></p>
        <p></p>
        <p>test</p>
        <p></p>
        <p></p>
        <p></p>
        <p>test</p>
    </div>
  )
}
