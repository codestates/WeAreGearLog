import React, { useEffect, useState } from 'react';
import './ChatRoom.css';
import useChat from './useChat';
import axios from 'axios';
import { RiSendPlaneFill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
const ChatRoom = (props) => {
  console.log(props.chatOpen);
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState(''); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage('');
  };

  return (
    <div className="chat-room-container">
      <div className="chat-close">
        <GrClose size="20" />
      </div>
      <h1 className="room-name">채팅방: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <div className="chat-user">
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? 'my-message' : 'received-message'
                }`}
              >
                {message.body.slice(message.body.indexOf('!') + 1)}
              </li>
              {message.ownedByCurrentUser ? (
                <img
                  alt=""
                  className="my-img"
                  src={message.body.slice(0, message.body.indexOf('!'))}
                />
              ) : (
                <img
                  alt=""
                  className="u-img"
                  src={message.body.slice(0, message.body.indexOf('!'))}
                />
              )}
            </div>
          ))}
        </ol>
      </div>
      <div className="inputbar">
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="메세지를 입력해주세요"
          className="new-message-input-field"
        />
        <button onClick={handleSendMessage} className="send-message-button">
          <RiSendPlaneFill size="30" color="white" />
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
