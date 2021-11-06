import React from 'react'
import { SendOutlined } from '@ant-design/icons';


const Input = ({ setMessage, sendMessage, message }) => (
    <div className = "StyledForm">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
      />
      <div className="sendButton" onClick={(e) => sendMessage(e)}>
        <span>
          <SendOutlined />
        </span>
      </div>
      <div className="blank"></div>
    </div>
  );

export default Input;