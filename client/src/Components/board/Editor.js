/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from 'react';

import { BsImage } from 'react-icons/bs';

import './Editor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MdPreview } from 'react-icons/md';
import Edit from './Edit';

const Editor = () => {
  const [title, setTitle] = useState('');

  const [state, setState] = useState({ value: null });
  console.log(state);
  const handleChange = (value) => {
    setState({ value });
  };

  const onSubmit = () => {
    let token = localStorage.getItem('token');

    axios
      .post(
        'http://52.79.233.29:8080/post',
        {
          title: title,
          content: state,
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
          <Edit state={state} handleChange={handleChange} />

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
  );
};

export default Editor;
