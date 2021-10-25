import React, { useState } from 'react';
import axios from 'axios';
import AuthTemplate from '../Auth/AuthTemplate';
import { Link, useHistory } from 'react-router-dom';
const FindPass = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(true);
  const [change, onChange] = useState('');
  const [error, setError] = useState(true);
  const [trues, setTrues] = useState(true);

  console.log(error);
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const postEmail = () => {
    axios
      .post('http://52.79.233.29:8080/user/code', {
        email: change,
      })
      .then((res) => {
        if (res.status === 200) {
          setIsOpen(!isOpen);
          onChange('');
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setError(false);
        }
      });
  };

  const subMitCode = () => {
    axios
      .patch('http://52.79.233.29:8080/user/temp', {
        code: change,
      })
      .then((res) => {
        console.log(res);
        if (!res.data.message) {
          setTrues(!true);
        } else {
          setTrues(true);
          alert('다시로그인해주세요');
          history.push('/account/login');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="my">
        <div className="mypage">
          <h1>패스워드 찾기</h1>
          <span className="type-selector-2"></span>
          {isOpen ? (
            <>
              <input
                value={change}
                onChange={handleChange}
                className="email"
                placeholder="가입한 이메일을 적으세요"
              ></input>

              {error ? null : <p className="err">정보가 없습니다</p>}
              <button onClick={postEmail} className="loginButton">
                이메일 보내기
              </button>
            </>
          ) : (
            <>
              <p className="err">
                입력한 email로 코드를 보냈습니다 인증코드를 제출하세요
              </p>

              <input
                value={change}
                onChange={handleChange}
                type="password"
                className="email"
                placeholder="코드를 입력하세요"
              ></input>
              {trues ? null : <p>잠시만기다려주세요</p>}
              <button onClick={subMitCode} className="loginButton">
                인증코드 제출하기
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FindPass;
