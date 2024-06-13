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
    users:[],
    otherUser: false,
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
            state.message = action.payload.msg;
            state.isSuccess = true
          })
          .addCase(login.rejected,(state,action)=>{
            state.message = action.payload
            state.isError = true
          })
        .addCase(logout.fulfilled, (state) => {
             state.user = null;
             state.token = "";
           })
          .addCase(register.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.message = action.payload.msg;
          })
          .addCase(register.rejected, (state, action) => {
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
          })
          .addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload.newUser;
            state.message = action.payload.msg;
            state.isSuccess = true
          })
          .addCase(userInfo.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isSuccess = true
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload.users;
            state.isSuccess = true
          })
          .addCase(getUsersByName.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isSuccess = true
          })
          .addCase(getUserById.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.isSuccess = true;
            state.otherUser= true;
          })
          .addCase(followUser.fulfilled, (state, action) => {
            state.message = action.payload.msg
            state.isSuccess = true;
          })
          .addCase(unfollowUser.fulfilled, (state, action) => {
            state.message = action.payload.msg
            state.isSuccess = true;
          })
          
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
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (error) {
      console.error(error);
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  });

export const logout = createAsyncThunk("auth/logout", async () => {
    try {
      return await authService.logout();
    } catch (error) {
      console.error(error);
    }
  });
  
  export const updateUser = createAsyncThunk(
    'auth/updateuser',
    async (user) => {
        try {
            return await authService.updateUser(user);
        } catch (error) {
            console.error(error);
        }
    }
);
export const userInfo = createAsyncThunk(
  'auth/userinfo',
  async (user) => {
      try {
          return await authService.userInfo();
      } catch (error) {
          console.error(error);
      }
  });

  export const getUsers = createAsyncThunk(
    'auth/users',
    async () => {
        try {
            return await authService.getUsers();
        } catch (error) {
            console.error(error);
        }
    });

    export const getUsersByName = createAsyncThunk(
      'auth/usersbyname',
      async (name) => {
          try {
              return await authService.getUsersByName(name);
          } catch (error) {
              console.error(error);
          }
      });
    export const getUserById = createAsyncThunk(
      'auth/getuserbyid',
      async (id) => {
          try {
              return await authService.getUserById(id);
          } catch (error) {
              console.error(error);
          }
      });
    export const followUser = createAsyncThunk(
      'auth/followuser',
      async (id) => {
          try {
              return await authService.followUser(id);
          } catch (error) {
              console.error(error);
          }
      });
    export const unfollowUser = createAsyncThunk(
      'auth/unfollowuser',
      async (id) => {
          try {
              return await authService.unfollowUser(id);
          } catch (error) {
              console.error(error);
          }
      });

  

export const {reset} = authSlice.actions;

export default authSlice.reducer;