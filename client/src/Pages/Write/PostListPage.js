import React,{ useEffect } from 'react';
import PostList from '../../Components/write/PostList';
import { Link, useHistory } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core';

import { useDispatch , useSelector } from 'react-redux';


const { Title } = Typography;

const PostListPage = ({artcle}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        //redux 적용하면 작성
    })
    // redux 적용후 게시글 삭제 기능 및 

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
            <PostList 
            // redux 적용 후 props 받아서 목록 구현.
            
            />
            </div>
        </div>
    );
}

export default PostListPage;