import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import './Register.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, DatePicker } from 'antd';

const Register = () => {
    const initialValues = {
        username: '',
        birthday: null,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeatPassword: '',
    };

    const [formData, setFormData] = useState(initialValues);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = () => {
        const transformedValues = {
            ...formData,
            birthday: formData.birthday ? formData.birthday.format('YYYY-MM-DD') : ''
        };
        dispatch(register(transformedValues));
        navigate('/login');
    };

    const onValuesChange = (changedValues, allValues) => {
        setFormData(allValues);
    };

    return (
        <div id='registerDiv'>
            <h2 className='mb-2'>Register</h2>
            <Form
                layout='vertical'
                onFinish={onFinish}
                initialValues={formData}
                onValuesChange={onValuesChange}
            >
                <Form.Item
                    label='Username'
                    name='username'
                    rules={[{ required: true, message: 'Please insert your username.' }]}
                >
                    <Input value={formData.username} placeholder='Please insert your username.' />
                </Form.Item>
                <Form.Item
                    label='Email'
                    name='email'
                    rules={[{ required: true, type: 'email', message: 'Please insert a valid email.' }]}
                >
                    <Input value={formData.email} placeholder='Please insert your email.' />
                </Form.Item>
                <Form.Item
                    label='Firstname'
                    name='firstname'
                    rules={[{ required: true, message: 'Please insert your firstname.' }]}
                >
                    <Input value={formData.firstname} placeholder='Please insert your firstname.' />
                </Form.Item>
                <Form.Item
                    label='Lastname'
                    name='lastname'
                    rules={[{ required: true, message: 'Please insert your lastname.' }]}
                >
                    <Input value={formData.lastname} placeholder='Please insert your lastname.' />
                </Form.Item>
                <Form.Item
                    label='Birthday'
                    name='birthday'
                    rules={[{ required: true, message: 'Please insert your birthday.' }]}
                >
                    <DatePicker
                        value={formData.birthday}
                        format='YYYY-MM-DD'
                        onChange={(date) => setFormData({ ...formData, birthday: date })}
                    />
                </Form.Item>
                <Form.Item
                    label='Password'
                    name='password'
                    rules={[{ required: true, message: 'Please insert your password.' }]}
                    hasFeedback
                >
                    <Input.Password value={formData.password} placeholder='Please insert your password.' />
                </Form.Item>
                <Form.Item
                    label='Repeat Password'
                    name='repeatPassword'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        { required: true, message: 'Please repeat your password.' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match.'));
                            },
                        }),
                    ]}
                >
                    <Input.Password value={formData.repeatPassword} placeholder='Please repeat your password.' />
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Submit</Button>
                    <Button type='default' onClick={() => setFormData(initialValues)}>Clear</Button>
                </Form.Item>
                <Form.Item>
                    <h6>Do you have an account?</h6>
                    <Link to='/'>Login</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Register;
