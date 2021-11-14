import React, { useEffect, useState, useRef } from 'react';
import './ChatRoom.css';
import useChat from './useChat';
import axios from 'axios';
import { RiSendPlaneFill } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
const ChatRoom = (props) => {
  const { roomId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage, saveMessage, loadMessage } = useChat(roomId); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState(''); // Message to be sent

  useEffect(() => {
    loadMessage();
  }, []);
  useEffect(() => {
    if (messages.length !== 0) {
      saveMessage(messages[messages.length - 1]);
    }
    scrollDown();
  }, [messages]);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // console.log(messages);
    sendMessage(newMessage);
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const scrollRef = useRef();

  const scrollDown = () => {
    scrollRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  return (
    <div className="chat-room-container">
      <div onClick={() => props.setChatOpen(false)} className="chat-close">
        <GrClose size="20" />
      </div>
      <h1 className="room-name">채팅방: {roomId}</h1>
      <div className="messages-container">
        <ol className="messages-list" ref={scrollRef}>
          {messages.map((message, i) => (
            <div key={i} className="chat-user">
              <li
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
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSendMessage} className="send-message-button">
          <RiSendPlaneFill size="30" color="white" />
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
