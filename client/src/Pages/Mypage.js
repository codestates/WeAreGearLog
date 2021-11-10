/* eslint-disable no-restricted-globals */
import { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AWS from 'aws-sdk';
import axios from 'axios';
import { CgProfile } from 'react-icons/cg';
const Mypage = ({ setAuthRegi, setIsLogin, authorization, authRegi }) => {
  let token = localStorage.getItem('token');
  let social = localStorage.getItem('social');

  const s3 = new AWS.S3({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_IDENTITYPOOLID,
    }),
  });

  AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_IDENTITYPOOLID,
    }),
  });

  const basicImg =
    'https://gearlogimagestorage.s3.ap-northeast-2.amazonaws.com/%EC%A7%80%EC%9A%B0%EB%A9%B4%EC%95%88%EB%90%98%EB%8A%94+%EA%B8%B0%EB%B3%B8%ED%94%84%EB%A1%9C%ED%95%84%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%9E%85%EB%8B%88%EB%8B%A4.jpg';
  const history = useHistory();
  const [changeName, setChangeName] = useState('');
  const [istrue, setIsTrue] = useState(true);
  const [imgBase64, setImgBase64] = useState(''); // 이미지태그에 미리보기를 하기위한 base64이미지
  const [originalImg, setOriginalImg] = useState(basicImg); // 여기 오리지날을 서버에 전달
  // username을 props로 가져오거나 해야합니다..!

  const onUsernameChange = (event) => {
    setChangeName(event.target.value);
  };
  const ondeleteUser = () => {
    let confirm = window.confirm('정말로 회원탈퇴 하시겠습니까?');

    if (confirm) {
      axios
        .delete(`${process.env.REACT_APP_SERVER_URL}/user/`, {
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
    let change = window.confirm('변경하시겠습니까?');

    if (change) {
      axios
        .patch(
          `${process.env.REACT_APP_SERVER_URL}/user/username`,
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
        `${process.env.REACT_APP_SERVER_URL}/user/logout`,
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

  const handleFileInput = (event) => {
    const file = event.target.files[0];

    let reader = new FileReader();
    // onloaded는 read가 완료되면 자동으로 실행되는 콜백
    // base64형태의 결과물을 상태(base64)에 저장
    reader.onloadend = async (e) => {
      const base64 = await reader.result;
      if (base64) {
        setImgBase64(base64.toString());
      }
      console.log(imgBase64);
    };
    // 이벤트에 입력받은 파일이 있을경우 read실행 & 원본이미지 상태저장
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      setOriginalImg(event.target.files[0]);
    }
  };

  // 저장 버튼 핸들러 -> 서버에 이 이미지를 저장하고 해당유저의 프로필이미지를 이 이미지로 저장하기 위한 핸들러
  const uploadButtonHandler = (event) => {
    const file = event.target.files[0];

    s3.deleteObject(
      {
        Bucket: 'gearlogimagestorage',
        Key: 'profileImg_' + authRegi.username + '.jpg',
      },
      (err, data) => {
        if (err) {
          throw err;
        }
        console.log('s3 deleteObject ', data);
      },
    );

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: 'gearlogimagestorage',
        Key: 'profileImg_' + authRegi.username + '.jpg',
        Body: file,
      },
    });

    const promise = upload.promise(); //프로미스객체아닌걸 프로비스의 형태로 만들어준다
    promise.then(
      function (data) {
        axios
          .patch(
            `${process.env.REACT_APP_SERVER_URL}/user/profileimg`,
            {
              profileImg: data.Location,
            },
            {
              headers: { authorization: `Bearer ${token}` },
            },
          )
          .then((res) => {
            authorization();
            location.reload();
          });
      },
      function (err) {
        console.log('s3 이미지 업로드 실패');
      },
    );
  };
  console.log(authRegi.profileImg);
  const inputRef = useRef();
  return (
    <div className="my">
      <div className="mypage">
        <h1>My Account</h1>
        <img alt="" className="profile-img" src={authRegi.profileImg}></img>

        <br />
        <br />
        <br />

        <label className="custom-file-upload">
          <button
            className="pofile-bt"
            onClick={() => {
              console.log(inputRef);
              inputRef.current.click();
            }}
          >
            <CgProfile size="30" color="green" />
          </button>

          <input
            className="pofile-upload"
            ref={inputRef}
            onChange={uploadButtonHandler}
            type="file"
            hidden
          />
        </label>
        <hr></hr>
        <div className="acc">
          {istrue ? (
            <>
              <br></br>
              <div className="mypage-acc">
                {authRegi.username} 님 환영합니다. :)
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
            onClick={() => {
              if (social) {
                alert(
                  '소셜로그인 회원은 (GEARLOG 웹사이트의)비밀번호가 필요하지 않습니다.',
                );
                return;
              }
              history.push('/account/pwc');
            }}
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
