import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { changeRoom, setViewChatlist, setRoomName } from '../../modules/chatReducer'
import { Avatar, Image, Badge, Result } from 'antd';
import Moment from 'react-moment';
import { fontSize } from '@material-ui/system';
import { SmileOutlined } from '@ant-design/icons';

const url = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;



const ChatList = () => {

    const chatState = useSelector((state) => state.chatReducer);
    const dispatch = useDispatch();

    const handleChatRoom = (chatId, username) => {
        dispatch(changeRoom(chatId));
        dispatch(setRoomName(username));
        chatState.socket.emit('join', { room: chatId });
        dispatch(setViewChatlist(false));
      };

      if (!chatState.chatList.length) {
        return (
          <div className = "blankListContainer">
            <Result style={{ fontSize: '150px' }} icon={<SmileOutlined />} title={'개설된 채팅방이 없습니다'} />
          </div>
        );
      }
      return (
          <div className="ListContainer">
             {chatState.chatList.map((chat) => {
        return (
          <div className="listitem" key={chat.chatId} onClick={() => handleChatRoom(chat.chatId, chat.username)}>
            <div className="avatar">
              <div clssName ="BorderedAvatar"
                shape={'square'}
                size={45}
                src={<img src={chat.profileImg} style={{ objectFit: 'cover' }} />}
              />{' '}
            </div>
            <div className="chatInfo">
              <div className="upper">
                <span>{chat.username} </span>
                <span>
                  <Moment fromNow style={{ color: '#777777', fontSize: '0.7rem' }}>
                    {new Date(chat.lastCreate)}
                  </Moment>{' '}
                </span>
              </div>
              <div className="lower">
                <span style={{ color: '#777777', fontSize: '0.85rem' }}>{chat.lastMessage} </span>
                <span>
                  <Badge count={chat.unreadMessageCount} />
                </span>
              </div>
            </div>
          </div>
        );
      })} 
              </div>
        )
}

export default ChatList;