import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setIsChat } from '../../modules/chatReducer';
import { Badge } from 'antd';
import { MessageFilled } from '@ant-design/icons';
const url = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;


const Chatbutton = () => {
    const chatState = useSelector((state) => state.chatReducer);
    const dispatch = useDispatch();
    const handleIsChat = () => {
      dispatch(setIsChat(true));
    };
    return (
      <>
          <div className = "chatbotton">
            <Badge count={chatState.newMessages}>
              <MessageFilled onClick={handleIsChat} style={{ fontSize: '75px', color: '#0077B6' }} />
            </Badge>
          </div>
        )
      </>
    );
    
}

export default Chatbutton;