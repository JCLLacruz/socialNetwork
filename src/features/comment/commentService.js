import axios from 'axios';

const API_URL = 'https://serversocialnetwork.onrender.com/comment/';

const getAllComments = async () => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL + '/',{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const getCommentById = async (id) => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL + 'id/' + id,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const createComment = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.post(API_URL, postData,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const updateComment = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.post(API_URL + 'id/'+postData._id, postData, {
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};

const postService = {
    createComment,
    getAllComments,
    getCommentById,
    updateComment,
};

export default postService;
