import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Post = () => {
	const { posts } = useSelector((state) => state.post);

	return <div>
        {posts.map((post)=> {
            return (
                <div key={post._id}>
                    <p>{post.title}</p>
                    <Link to={'/postdetail/' + post.id}/>
                </div>
            )
        })}
    </div>;
};

export default Post;
