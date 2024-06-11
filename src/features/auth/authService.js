import axios from "axios"

const API_URL = 'https://serversocialnetwork.onrender.com';

const register = async (userData) => {
    const res = await axios.post(API_URL + '/users', userData);
    return res.data;
};

const login = async(userData)=>{
  console.log('service', userData);
    const res = await axios.post(API_URL + '/users/login',userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);       
}
    return res.data
};

const logout = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.delete(API_URL + "/users/logout", {
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
    const res = await axios.put(API_URL + "/users/updateuser",userData,{
      headers: {
        Authorization: token,
      }
    });
    if (res.data) {   
        localStorage.setItem("user", JSON.stringify(res.data.newUser));
    }
    return res.data
  };


const authService = {
    register,
    login, 
    logout,
    updateUser,
};

export default authService;