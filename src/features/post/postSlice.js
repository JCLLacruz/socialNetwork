import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postService from './postService';

const token = localStorage.getItem('token');

const initialState = {
	post: null,
	posts: [],
	token: '',
	isSuccess: false,
	message: '',
	isError: false,
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllPost.fulfilled, (state, action) => {
				state.posts = action.payload.posts;
				state.message = action.payload.msg;
				state.isSuccess = true;
			})
			.addCase(getAllPost.rejected, (state, action) => {
				state.message = action.payload.msg;
				state.isError = true;
			})
			.addCase(getPostById.fulfilled, (state, action) => {
				state.post = action.payload.post;
				state.message = action.payload.msg;
				state.isSuccess = true;
			})
			.addCase(getPostById.rejected, (state, action) => {
				state.message = action.payload.msg;
				state.isError = true;
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.post = action.payload.post;
				state.message = action.payload.msg;
				state.isSuccess = true;
			})
			.addCase(createPost.rejected, (state, action) => {
				state.message = action.payload.msg;
				state.isError = true;
			})
			.addCase(updatePost.fulfilled, (state, action) => {
				state.post = action.payload.post;
				state.message = action.payload.msg;
				state.isSuccess = true;
			})
			.addCase(updatePost.rejected, (state, action) => {
				state.message = action.payload.msg;
				state.isError = true;
			});
	},
});

export const getAllPost = createAsyncThunk('post/getAllPost', async () => {
	try {
		return await postService.getAllPost();
	} catch (error) {
		console.error(error);
	}
});
export const getPostById = createAsyncThunk('post/getPostById', async (id) => {
	try {
		return await postService.getPostById(id);
	} catch (error) {
		console.error(error);
	}
});
export const createPost = createAsyncThunk('post/createPost', async (post) => {
	try {
		return await postService.createPost(post);
	} catch (error) {
		console.error(error);
	}
});
export const updatePost = createAsyncThunk('post/updatePost', async (post) => {
	try {
		return await postService.updatePost(post);
	} catch (error) {
		console.error(error);
	}
});

export default postSlice.reducer;
