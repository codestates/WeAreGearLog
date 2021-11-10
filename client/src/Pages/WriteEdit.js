/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React, { useState, useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import { Link, useHistory } from 'react-router-dom';
import AWS from 'aws-sdk';
import 'react-quill/dist/quill.snow.css';
import '../Components/board/styles.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const WriteEdit = ({ title, onTitleChange }) => {
  let token = localStorage.getItem('token');
  const data = useSelector((state) => state.board.read);
  const [state, setState] = useState({
    value: `<div contenteditable='false'>${data[0].content}</div>`,
  }); //글수정쪽

  console.log(state);
  const [asstate, setAsState] = useState({
    title: data[0].title,
  });

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_IDENTITYPOOLID,
    }),
  });

  const handleChange = (value) => {
    setState({ value });
  };
  const history = useHistory();

  const onEditChange = (id) => {
    axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/post/`,
        {
          postId: id,
          title: title,
          content: state.value,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        if (res.status === 201) {
          history.push('/board');
          location.reload();
          console.log('수정요청성공');
        }
      });
  };

  const imageHandler = () => {
    console.log('에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!');

    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      console.log('온체인지');
      const file = input.files[0];

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: 'gearlogimagestorage',
          Key: 'postImg_' + Date.now().toString() + '.jpg',
          Body: file,
        },
      });

      const promise = upload.promise();

      promise.then(
        function (data) {
          const IMG_URL = data.Location;
          const editor = quillRef.current.getEditor();

          const range = editor.getSelection();

          editor.insertEmbed(range, 'image', IMG_URL);
        },
        function (err) {
          console.log('s3 이미지 업로드 실패');
        },
      );
    });
  };

  const quillRef = useRef();
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ['image'],
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'image',
  ];

  return (
    <div className="text-editor">
      <h1>게시물 수정</h1>

      <input
        defaultValue={asstate.title}
        value={title}
        onChange={onTitleChange}
        className="inputz"
        placeholder="제목을 입력하세요"
      />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={state.value}
        onChange={handleChange}
        placeholder={'본문을 적어주세요'}
        modules={modules}
        formats={formats}
      />
      <Link to="/board">
        <button onClick={() => onEditChange(data[0].id)} className="u-b-1">
          올리기
        </button>
      </Link>
      <Link to="/board">
        <button className="u-b-1">취소</button>
      </Link>
    </div>
  );
};

export default WriteEdit;
