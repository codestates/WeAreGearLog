/* eslint-disable react/style-prop-object */
import React, { createContext, useEffect, useState } from 'react';
import './Editor.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Edit from './Edit';

const Editor = ({ state, handleChange, setState, title, setTitle }) => {
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = () => {
    let token = localStorage.getItem('token');

    axios
      .post(
        'http://52.79.233.29:8080/post',
        {
          title: title,
          content: state.value,
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

  return (
    <div className="write">
      <h1>게시물 작성</h1>

      <input
        value={title}
        onChange={onTitleChange}
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
  );
};

export default Editor;
