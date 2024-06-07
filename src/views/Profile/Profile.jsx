import React from 'react';
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getPostById} from '../../features/post/postSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
  const {user} = useSelector((state)=>state.auth)
  const {post} = useSelector((state) => state.post);
  const dispatch = useDispatch();
  //dispatch(getPostById(id));

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

      {/* {user.PostIds.map((PostId)=>{
          //dispatch(getPostById(PostId.PostId))
          //console.log(PostId.PostId)
          //console.log(post)
        })} */}

    </div>
  )
}

export default Profile