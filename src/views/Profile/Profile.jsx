import React, { useEffect } from 'react';
import { Link, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getUserPosts} from '../../features/post/postSlice';
import { userInfo} from '../../features/auth/authSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import SinglePost from '../SinglePost/SinglePost';

const Profile = () => {
  const {user} = useSelector((state)=>state.auth)
  const {userPosts} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const location = useLocation();
   useEffect(() => {
    dispatch(userInfo());
    setTimeout(() => {
    dispatch(getUserPosts());
    }, 1000);
  }, []);

  return (
    <div className='mt-1'>
      <p><br/><br/></p>
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
      <div>
     
     <div className='mt-5 container text-center'> 
      {userPosts.length != 0 && userPosts.map((post,i)=>{
        console.log('test: ',post)
        return (
        <>
        {(i+1)%3 == 0 &&  
          <div className='row'>
            <div className='col-4'>
                <SinglePost title={userPosts[i-2].title} _id={userPosts[i-2]._id} body={userPosts[i-2].body} image_path={userPosts[i-2].image_path}/>
              </div>           
              <div className='col-4'>
                <SinglePost title={userPosts[i-1].title} _id={userPosts[i-1]._id} body={userPosts[i-1].body} image_path={userPosts[i-1].image_path}/>
              </div>
              <div className='col-4'>
                <SinglePost title={userPosts[i].title} _id={userPosts[i]._id} body={userPosts[i].body} image_path={userPosts[i].image_path}/>  
              </div> 
          </div> 
         }
        </>
        )
        })
      }
      {userPosts.length % 3 == 2 && (
        <div className='row'>
          <div className='col-4'>
              <SinglePost title={userPosts[userPosts.length-2].title} _id={userPosts[userPosts.length-2]._id} body={userPosts[userPosts.length-2].body} image_path={userPosts[userPosts.length-2].image_path}/>
            </div>           
            <div className='col-4'>
              <SinglePost title={userPosts[userPosts.length-1].title} _id={userPosts[userPosts.length-1]._id} body={userPosts[userPosts.length-1].body} image_path={userPosts[userPosts.length-1].image_path}/>
            </div>
            <div className='col-4'>
              <span/>
            </div> 
        </div>
      )}
      {userPosts.length % 3 == 1 && (
        <div className='row'>
          <div className='col-4'>
          <SinglePost title={userPosts[userPosts.length-1].title} _id={userPosts[userPosts.length-1]._id} body={userPosts[userPosts.length-1].body} image_path={userPosts[userPosts.length-1].image_path}/>
            </div>           
            <div className='col-4'>
              <span/>
            </div>
            <div className='col-4'>
              <span/>
            </div> 
        </div>
      )}
    </div>
    </div>   
    </div>
  )
}

export default Profile