import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Post = () => {
	const { posts } = useSelector((state) => state.post);
console.log(posts);
	return <div>
        {posts.map((post)=> {
            return (
                <Link to={'/postdetail/' + post._id}>
                <div key={post._id}>        
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
                </Link>
            )
        })}
    </div>;
};

export default Post;
