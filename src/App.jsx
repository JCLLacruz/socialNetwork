import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import NewPost from './views/NewPost/NewPost';
import PostDetail from './views/PostDetail/PostDetail';

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/home' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/newpost' element={<NewPost />} />
					<Route path='/postdetail' element={<PostDetail />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
