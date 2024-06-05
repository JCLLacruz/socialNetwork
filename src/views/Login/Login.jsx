import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login} from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const {email,password} = formData
    const {message,isSuccess,isError} = useSelector((state)=>state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
        navigate("/home")
    }
  return (
    <Form onSubmit={onSubmit}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Enter email"
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
      />
    </Form.Group>

    <Button  type="submit" className='btn btn-primary'>
      Login
    </Button>
  </Form>
  )
}
export default Login