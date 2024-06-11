import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import commentService from './commentService';
import Comment from '../../Components/Comment/Comment';

const token = localStorage.getItem('token');

const initialState = {
	comment: null,
	comments: [],
	token,
	isSuccess: false,
	message: '',
	isError: false,
	isLoading: true,
};

export const commentSlice = createSlice({
	name: 'comment',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllComments.fulfilled, (state, action) => {
				state.comments = action.payload.comments;
				state.message = action.payload.msg;
				state.isSuccess = true;
				state.isLoading = false;
			})
			.addCase(getAllComments.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getAllComments.rejected, (state, action) => {
				state.message = action.payload.msg;
				state.isError = true;
			})
			.addCase(createComment.fulfilled, (state, action) => {
				state.comment = action.payload.comment;
				state.message = action.payload.msg;
				state.isSuccess = true;
			})
			.addCase(createComment.rejected, (state, action) => {
				state.message = action.payload.msg;
				state.isError = true;
			})
			.addCase(updateComment.fulfilled, (state, action) => {
				state.comment = action.payload.comment;
				state.message = action.payload.msg;
				state.isSuccess = true;
			})
			.addCase(updateComment.rejected, (state, action) => {
				state.message = action.payload.msg;
				state.isError = true;
			});
	},
});

export const getAllComments = createAsyncThunk('comment/getAllcomment', async () => {
	try {
		return await commentService.getAllComments();
	} catch (error) {
		console.error(error);
	}
});
export const getCommentById = createAsyncThunk('comment/getCommentById', async (id) => {
	try {
		return await commentService.getCommentById(id);
	} catch (error) {
		console.error(error);
	}
});
export const createComment = createAsyncThunk('comment/createComment', async (comment) => {
	try {
        console.log('slice',comment);
		return await commentService.createComment(comment);
	} catch (error) {
		console.error(error);
	}
});
export const updateComment = createAsyncThunk('comment/updateComment', async (comment) => {
	try {
		return await commentService.updateComment(comment);
	} catch (error) {
		console.error(error);
	}
});

export default commentSlice.reducer;
