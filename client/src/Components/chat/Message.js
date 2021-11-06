import React from 'react';
import ReactEmoji from 'react-emoji';
import { Avatar, Image } from 'antd';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';



const Message = ({ message }) => {
    const userState = useSelector((state) => state.userReducer);
    let isSentByCurrentUser = false;
    const name = userState.userInfo.role === 'adviser' ? userState.userInfo.name : userState.userInfo.username;
    const trimmedName = name.trim().toLowerCase();
    if (message.username === trimmedName) {
      isSentByCurrentUser = true;
    }
  
    //  상대방과 나의 메세지 렌더 위치를 조절 (유저 이름을 통해 구별)
    return isSentByCurrentUser ? (
      <div className="messageContainer justifyEnd">
        <div className="moment">
          <Moment fromNow>{new Date(message.createdAt)}</Moment>
        </div>
        <div className="messageBox backgroundBlue">
          <span className="messageText colorWhite">{ReactEmoji.emojify(message.message)}</span>
        </div>
      </div>
    ) : (
      <div className="messageContainer justifyStart">
        <div className="avatar">
          <div className ="BorderedAvatar" shape={'square'} size={40} src={<Image src={message.profileImg} height={40} width={40} />} />
        </div>
        <div className="messageInfo">
          <span className="name">{message.username}</span>
          <div className="messageMoment">
            <div className="messageBox backgroundLight">
              <span className="messageText colorDark">{ReactEmoji.emojify(message.message)}</span>
            </div>
            <div className="moment">
              <Moment fromNow>{new Date(message.createdAt)}</Moment>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Message;