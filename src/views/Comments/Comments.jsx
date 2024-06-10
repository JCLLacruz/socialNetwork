import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Comments = () => {
	const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState('');
  const onValuesChange = (changedValues, allValues) => {
    setFormData(allValues);
};
const onFinish = ()=>{

}

	return (
		<div>
			Comments
			<Form layout='vertical' onFinish={onFinish} initialValues={formData} onValuesChange={onValuesChange} >
				<Form.Item name='body' rules={[{ required: true, message: 'Please insert your username.' }]} >
          <div className='d-flex'>
					<Input value={formData.username} placeholder='Please insert your username.' />
          <Button type='primary' htmlType='submit' className='d-flex align-items-center'><ArrowRightOutlined /></Button>
          </div>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Comments;
