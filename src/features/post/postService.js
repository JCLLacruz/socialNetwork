import axios from 'axios';

const API_URL = 'https://serversocialnetwork.onrender.com';

const getAllPost = async () => {
	const token = localStorage.getItem('token');
	const res = await axios.post(API_URL + '/posts/', postData,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const createPost = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL + '/posts/', postData,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const updatePost = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.post(API_URL + '/posts', postData, {
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};

const postService = {
	getAllPost
	createPost,
    updatePost,
};

export default postService;
