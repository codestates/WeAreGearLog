import React from 'react';
import PostList from '../../Components/write/PostList';
import { Link } from 'react-router-dom'

const PostListPage = () => {
    return (
        <div>
            <div>
            <h1>Board Title</h1>
            </div>
            <div>
                <Link to = '/b/registerpage'>
                <button>새로운 글쓰기</button>
                </Link>
            </div>
            <div>
            <PostList />
            </div>
        </div>
    );
}

export default PostListPage;