import axios from "axios"

const API_URL = 'http://b.jertocvil.net:12000/';

const register = async (userData) => {
    const res = await axios.post(API_URL + 'users', userData);
    return res.data;
};

const login = async(userData)=>{
    const res = await axios.post(API_URL + 'users/login',userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);       
}
    return res.data
};

const logout = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(API_URL + "users/logout", {
      headers: {
        Authorization: token,
      },
    });
    if (res.data) {   
      localStorage.clear();//delete token and user from local
    }
    return res.data
  };

  const updateUser = async (userData) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(API_URL + "users/updateuser",userData,{
      headers: {
        Authorization: token,
      }
    });
    if (res.data) {   
        localStorage.setItem("user", JSON.stringify(res.data.newUser));
    }
    return res.data
  };

  const userInfo = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(API_URL + "users/userinfo", {
      headers: {
        Authorization: token,
      },
    });
    if (res.data) {   
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    return res.data
  };

  const getUsers = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get(API_URL + "users/getallusers", {
      headers: {
        Authorization: token,
      },
    });
    return res.data
  };
  const getUsersByName = async (name) =>{
    const res=await axios.get(API_URL+"users/name/"+name)
    return res.data
  };
  const getUserById = async (id) =>{
    const res=await axios.get(API_URL+"users/id/"+id)
    return res.data
  };
  const followUser = async (id) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(API_URL + 'users/follow/' + id,{},{
      headers: {
        Authorization: token,
      },
    })
    return res.data
  }
  const unfollowUser = async (id) => {
    const token = localStorage.getItem("token");
    const res = await axios.put(API_URL + 'users/unfollow/' + id,{},{
      headers: {
        Authorization: token,
      },
    })
    return res.data
  }


const authService = {
    register,
    login, 
    logout,
    updateUser,
    userInfo,
    getUsers,
    getUsersByName,
    getUserById,
    followUser,
    unfollowUser
};

export default authService;