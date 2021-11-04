/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { insert } from '../../modules/board';
import { BsImage } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import './Editor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const onSubmit = () => {
    let token = localStorage.getItem('token');

    axios
      .post(
        'http://52.79.233.29:8080/post',
        {
          title: title,
          content: content,
          img: '',
        },
        {
          headers: { authorization: `Bearer ${token}` },
        },
      )
      .then((res) => {
        if (res.status === 201) {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onTextChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="edit">
      <div className="Editor">
        <div className="write">
          <h1>게시물 작성</h1>

          <input
            onChange={onTitleChange}
            value={title}
            className="inputz"
            placeholder="제목을 입력하세요"
          />
          <div className="e-p">
            <BsImage />
          </div>
          <textarea
            onChange={onTextChange}
            value={content}
            className="textarea"
            autucomplate="off"
            autoCorrect="off"
            spellCheck="false"
            autocapitalize="off"
          ></textarea>
          <div className="upload-b">
            <Link to="/board">
              <button onClick={onSubmit} className="u-b-1">
                올리기
              </button>
            </Link>
            <Link to="/board">
              <button className="u-b-1">취소</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
