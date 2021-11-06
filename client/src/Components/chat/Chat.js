import React, { useState, useEffect } from 'react';
import MessageContainer from './MessageContainer';
import Input from './Input';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import ChatList from './ChatList';
import InfoBar from './InfoBar';
import './Chat.css'
import { updateChatList, setMessages, setNewMessages } from '../../modules/chatReducer'
const url = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;



const Chat = () => {
    const [message, setMessage] = useState('');
    const state = useSelector((state) => state.userReducer);
    const chatState = useSelector((state) => state.chatReducer);
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();
    
        if (message) {
          chatState.socket.emit('sendMessage', {
            message,
            sender: state.userInfo.id,
            room: chatState.currentRoom,
          });
          setMessage('');
          // socket.emit('online', { socketId })
          //
        }
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect(async () => {
        if (chatState.currentRoom) {
          let list = await axios.get(`${url}/chats/messages/${chatState.currentRoom}`);
          dispatch(setMessages(list.data.data));
          let chatlist = await axios.get(`${url}/chats`);
          chatlist = chatlist.data.data;
          dispatch(updateChatList(chatlist));
          dispatch(setNewMessages(chatlist.reduce((acc, cur) => acc + cur.unreadMessageCount, 0)));
        }
      }, [chatState.currentRoom, dispatch]);

      return (
        <div className ="outerContainer">
          <div className="chatContainer">
            {chatState.viewChatlist ? null : (
              <>
                <MessageContainer />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
              </>
            )}
          </div>
          <div className="infobar">
            <InfoBar isChatList={chatState.viewChatlist} username={username} />
            {chatState.viewChatlist ? (
              <div className="chatlist">
                <ChatList setUsername={setUsername} />
              </div>
            ) : null}
          </div>
        </div>
      );
    
}

export default Chat;