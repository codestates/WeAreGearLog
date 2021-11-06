import React, { useRef, useEffect } from 'react';
import Message from './Message';
import { useSelector } from 'react-redux';


const MessageContainer = () => {
    const chatState = useSelector((state) => state.chatReducer);
    const msgContainer = useRef();
  
    const scrollToBottom = () => {
      const scroll = msgContainer.current.scrollHeight - msgContainer.current.clientHeight;
      msgContainer.current.scrollTo(0, scroll);
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [chatState.messages]);
  
    return (
      <div className ="MessagesContainer" ref={msgContainer}>
        <div style={{ height: '70px' }} />
        {chatState.messages.map((message, i) => (
          <div key={i}>
            <Message message={message} />
          </div>
        ))}
      </div>
    );
  };
  
  export default MessageContainer;