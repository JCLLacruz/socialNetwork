import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
    user: user,
    token: token,
    isError: false,
    isSuccess: false,
    message: "",
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
          state.isError = false;
          state.isSuccess = false;
          state.message = "";
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.message = action.payload.message;
            state.isSuccess = true
          })
          .addCase(login.rejected,(state,action)=>{
            state.message = action.payload
            state.isError = true
          })
        //   .addCase(logout.fulfilled, (state) => {
        //     state.user = null;
        //     state.token = "";
        //   })
          .addCase(register.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.message = action.payload.msg;
          })
          .addCase(register.rejected, (state, action) => {
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
          });
      },
});



export const register = createAsyncThunk(
    'auth/register',
    async (user) => {
        try {
            return await authService.register(user);
        } catch (error) {
            console.error(error);
        }
    }
);
export const login = createAsyncThunk("auth/login", async (user) => {
    try {
      return await authService.login(user);
    } catch (error) {
      console.error(error);
    }
  });
  

export default authSlice.reducer;