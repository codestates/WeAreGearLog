import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const Mypage = ({ setAuthRegi, setIsLogin, authorization, authRegi }) => {
  const history = useHistory();
  const [changeName, setChangeName] = useState('');
  const [istrue, setIsTrue] = useState(true);

  const onUsernameChange = (event) => {
    setChangeName(event.target.value);
  };
  const ondeleteUser = () => {
    let confirm = window.confirm('정말로 회원탈퇴 하시겠습니까?');

    if (confirm) {
      axios
        .delete('http://52.79.233.29:8080/user/', {
          data: {
            username: authRegi.username,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.clear();
            setIsLogin(false);
            alert('탈퇴가 완료되었습니다');
            history.push('/');
          } else {
            alert('처리에 문제가 있습니다 고객센터로 연락주세요');
          }
        });
    } else {
      if (!confirm) alert('감사합니다');
    }
  };

  const onClickuserChange = () => {
    // let social = localStorage.getItem('social');
    // if (social) {
    //   return alert('소셜로그인의 경우 username을 변경할 수 없습니다.');
    // }

    let change = window.confirm('변경하시겠습니까?');

    if (change) {
      axios
        .patch(
          'http://52.79.233.29:8080/user/username',
          {
            username: authRegi.username,
            newname: changeName,
          },
          {
            withCredentials: true,
          },
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            let token = res.data.token;
            localStorage.setItem('token', token);
            authorization();
            setIsTrue(true);
          } else {
            if (res.status === 202) {
              alert('이미있는 유저네임입니다');
            }
          }
        });
    } else {
      alert('변경 취소되었습니다');
      setIsTrue(true);
    }
  };

  const postLogout = () => {
    return axios
      .get(
        'http://52.79.233.29:8080/user/logout',
        {},
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message === '로그아웃 성공') {
          console.log(res);
          localStorage.clear();
          setAuthRegi({
            email: '',
            username: '',
            password: '',
            passwordCornfirm: '',
          });

          setIsLogin(false);
          history.push('/');
          alert('로그아웃되었습니다');
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          alert('로그아웃이 되지않았습니다');
        }
      });
  };

  return (
    <div className="my">
      <div className="mypage">
        <h1>My Account</h1>
        <div className="acc">
          {istrue ? (
            <>
              <div className="mypage-acc">
                {authRegi.username} 님 환영합니다
              </div>
              <p
                onClick={() => {
                  postLogout();
                }}
                className="mypage-acc-logout"
              >
                Logout
              </p>
            </>
          ) : (
            <div>
              <input
                value={changeName}
                onChange={onUsernameChange}
                className="change-username"
                placeholder="유저네임 변경"
              ></input>
              <button onClick={onClickuserChange} className="change-username">
                변경
              </button>
            </div>
          )}
        </div>
        <br></br>
        <br></br>
        <p className="ac-detail">ACCOUNT DETAILS</p>
        <div className="ac-detail-wrap">
          <p onClick={() => setIsTrue(!istrue)} className="ac-detail-1">
            유저이름 변경
          </p>
          <p className="type-selector-slash">/</p>

          <p
            onClick={() => history.push('/account/pwc')}
            className="ac-detail-1"
          >
            비밀번호 변경
          </p>
        </div>
        <div onClick={ondeleteUser} className="type-selector-2">
          회원탈퇴
        </div>
      </div>
    </div>
  );
};

export default Mypage;
