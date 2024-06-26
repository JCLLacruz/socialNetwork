import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Header from './views/Header/Header';
import Footer from './views/Footer/Footer';
import NewPost from './views/NewPost/NewPost';
import PostDetail from './views/PostDetail/PostDetail';
import { useSelector } from 'react-redux';
import { EditProfile } from './views/EditProfile/EditProfile';
import Search from './views/Search/Search';
import Comments from './views/Comments/Comments';
import PrivateZone from './guards/PrivateZone';

function App() {
	const { user } = useSelector((state) => state.auth);
	const location = useLocation();
	return (
		<>
				{!user ? (
					<>
						<Routes>
							<Route path='/' element={<Login />} />
							<Route path='/register' element={<Register />} />
						</Routes>
					</>
				) : (
					<>
					{location.pathname == "/" && <Navigate to='/home' />}
						<Header />
						<Routes>
							<Route
								path='/search'
								element={
									<PrivateZone>
										<Search />
									</PrivateZone>
								}
							/>
							<Route
								path='/comments'
								element={
									<PrivateZone>
										<Comments />
									</PrivateZone>
								}
							/>
							<Route
								path='/home'
								element={
									<PrivateZone>
										<Home />
									</PrivateZone>
								}
							/>
							<Route
								path='/profile/:id'
								element={
									<PrivateZone>
										<Profile />
									</PrivateZone>
								}
							/>
							<Route
								path='/editprofile'
								element={
									<PrivateZone>
										<EditProfile />
									</PrivateZone>
								}
							/>
							<Route
								path='/newpost'
								element={
									<PrivateZone>
										<NewPost />
									</PrivateZone>
								}
							/>
							<Route
								path='/postdetail/id/:id'
								element={
									<PrivateZone>
										<PostDetail />
									</PrivateZone>
								}
							/>
						</Routes>
						<Footer />
					</>
				)}
		</>
	);
}

export default App;
