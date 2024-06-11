import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts } from '../../features/post/postSlice';
import { userInfo } from '../../features/auth/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePost from '../SinglePost/SinglePost';
import './Profile.scss'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)
  const { userPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(userInfo());
    setTimeout(() => {
      dispatch(getUserPosts());
    }, 1000);
  }, []);

  return (
    <div className='mt-3'>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            < div className="row">
              <span>PHOTO</span>
              <span>{user.username}</span>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <span>{user.PostIds.length}</span>
              <span>posts</span>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <span>{user.FollowerIds.length}</span>
              <span>follower</span>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <span>{user.FollowIds.length}</span>
              <span>following</span>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <Link className="btn btn-primary" to="/editprofile">Edit Profile</Link>
          </div>
          <div className="col">
            <span>SHARE PROF</span>
          </div>
        </div>
      </div>



        <div className='d-flex flex-wrap justify-content-center mt-4'>
          {userPosts.length != 0 && userPosts.map((post, i) => {
            return (
              <div className='post' id={i}>
                <SinglePost title={post.title} _id={post._id} body={post.body} image_path={post.image_path} />
              </div>
            )
          })
          }
        </div>

    </div>
  )
}

export default Profile