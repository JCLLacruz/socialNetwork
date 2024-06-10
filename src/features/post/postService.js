import axios from 'axios';

const API_URL = 'https://serversocialnetwork.onrender.com/posts/';

const getAllPost = async () => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const getPostById = async (id) => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL + 'id/' + id,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const getPostsByTitle = async (title) => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL + 'title/' + title,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const createPost = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.post(API_URL, postData,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const updatePost = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.post(API_URL + 'id/' + postData._id, postData, {
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};

const postService = {
	getAllPost,
	createPost,
    updatePost,
	getPostById,
	getPostsByTitle,
};

export default postService;
