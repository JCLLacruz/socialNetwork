import React from 'react';
import { useSelector } from 'react-redux';

const Post = () => {
	const { posts } = useSelector((state) => state.post);

	return <div>
        {posts.map((post)=> {
            return (
                <div>

                    <p>{post.title}</p>
                </div>
            )
        })}
    </div>;
};

export default Post;
