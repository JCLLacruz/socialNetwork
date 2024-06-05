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
import { useSelector } from 'react-redux';

function App() {
	const {user} = useSelector((state) => state.auth);
	return (
		<>
			<BrowserRouter>
			{!user ?
			<>
			<Login />
			</> 
			: 
			<>
				<Header />
				<Routes>
					<Route path='/register' element={<Register />} />
					<Route path='/home' element={<Home />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/newpost' element={<NewPost />} />
					<Route path='/postdetail' element={<PostDetail />} />
				</Routes>
				<Footer />
			</>
			}
			</BrowserRouter>
		</>
	);
}

export default App;
