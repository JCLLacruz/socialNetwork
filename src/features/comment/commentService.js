import axios from 'axios';

const API_URL = 'http://b.jertocvil.net:12000/';

const getAllComments = async () => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL + 'comments/',{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const getCommentById = async (id) => {
	const token = localStorage.getItem('token');
	const res = await axios.get(API_URL + 'comments/id/' + id,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const createComment = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.post(API_URL + 'comments/', postData,{
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const updateComment = async (postData) => {
	const token = localStorage.getItem('token');
	const res = await axios.put(API_URL + 'comments/id/'+ postData._id, postData, {
		headers: {
			Authorization: token,
		},
	}
);
	return res.data;
};
const deleteComment = async (id) => {
	const token = localStorage.getItem('token');
	const res = await axios.delete(API_URL + 'comments/id/'+ id, {
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
	deleteComment,
};

export default postService;
