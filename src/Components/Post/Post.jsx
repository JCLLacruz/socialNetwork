import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createPost } from '../../features/post/postSlice';

const Post = () => {
  const initialValues = {
      title: '',
      body: '',
    };
  
    const [postData, setPostdata] = useState(initialValues);
  
    const { title, body } = postData;
    
    const dispatch = useDispatch();
  
    const onChange = (e) => {
      e.preventDefault();
      setPostdata({
        ...postData,
        [e.target.name]: e.target.value,
      });
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      dispatch(createPost(postData));
    };

  return (
    <div>
      <form onSubmit={onSubmit}>
      <div className='d-flex justify-content-between'>
					<label htmlFor='titleInput'>Title: </label>
					<input type='text' id='title' name='title' value={title} onChange={onChange} placeholder='Please insert a title.' />
				</div>
				<div className='d-flex justify-content-between'>
					<label htmlFor='bodyPost'>Content:</label>
          <textarea type='email' id='bodyPost' name='body' value={body} onChange={onChange} placeholder='Please insert content.'></textarea>
				</div>
        <input type="submit" onSubmit={onSubmit} className='btn btn-primary'/>
      </form>
    </div>
  )
}

export default Post