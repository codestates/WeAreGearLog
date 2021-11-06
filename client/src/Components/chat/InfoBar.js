import React, { useEffect, useState } from 'react';
import { setIsChat, setViewChatlist, changeRoom, setMessages } from '../../modules/chatReducer'
import { useDispatch, useSelector } from 'react-redux';
import { LeftOutlined, CloseOutlined } from '@ant-design/icons';


const InfoBar = ({isChatList}) => {

  const dispatch = useDispatch();
  const chatState = useSelector((state) => state.chatReducer);
  const handleIsChat = () => {
    dispatch(setIsChat(false));
    dispatch(setViewChatlist(true));
    chatState.socket.emit('quitRoom');
    dispatch(setMessages([]));
    dispatch(changeRoom(null));
  };
  const handleChatlist = () => {
    dispatch(setViewChatlist(true));
    chatState.socket.emit('quitRoom');
    dispatch(setMessages([]));
    dispatch(changeRoom(null));
  };
  return (
    <div className ="InfoBarContainer">
      <div className={isChatList ? 'chatlist' : 'messages'}>
        {isChatList ? (
          <div style={{ width: '70px' }} />
        ) : (
          <div className="leftInnerContainer" onClick={handleChatlist}>
            <LeftOutlined />
          </div>
        )}
        <div className="title">{isChatList ? '채팅' : chatState.roomName}</div>
        <div className="rightInnerContainer" onClick={handleIsChat}>
          <CloseOutlined />
        </div>
      </div>
    </div>
  );
}

export default InfoBar;