/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import React, { useState, useMemo, useRef, useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { Link, useHistory } from 'react-router-dom';
import AWS from 'aws-sdk';
import 'react-quill/dist/quill.snow.css';
import '../Components/board/styles.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

export const Usedsujung = ({
  title,
  onTitleChange,
  thumbnail,
  setThumbnail,
}) => {
  let token = localStorage.getItem('token');
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
          img: thumbnail,
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        if (res.status === 201) {
          history.push('/used/store');
          location.reload();
        }
      });
  };
  const data = useSelector((state) => [state.board.used]);
  const [state, setState] = useState({
    value: `<div contenteditable='false'>${data[0].content}</div>`,
  }); //글수정쪽

  const [asstate, setAsState] = useState({
    title: data[0].title,
  });

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_IdentityPoolId,
    }),
  });

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
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
          if (!thumbnail) {
            setThumbnail(data.Location);
          }
        },
        function (err) {
          alert('이미지 업로드 실패');
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
  console.log('1231313123123123', title);
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
      <button onClick={() => onEditChange(data[0].id)} className="u-b-1">
        올리기
      </button>

      <Link to="/used/store">
        <button className="u-b-1">취소</button>
      </Link>
    </div>
  );
};

export default Usedsujung;
