import axios from "axios"

const API_URL = 'https://serversocialnetwork.onrender.com';

const register = async (userData) => {
    const res = await axios.post(API_URL + '/users', userData);
    console.log('hola');
    return res.data;
};

const authService = {
    register,
};

export default authService;