import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import axios from 'axios';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessage'; // Name of the event
const SOCKET_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const useChat = (roomId) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const socketRef = useRef();
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    let token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/user`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setName(res.data.data.userinfo.username);
        setImg(res.data.data.userinfo.profile_img);
        setUserId(res.data.data.userinfo.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveMessage = (message) => {
    // console.log('저장중!!!!', message);
    if (message.roomId) {
      return;
    }

    axios.post(`${process.env.REACT_APP_SERVER_URL}/message`, {
      userId: userId,
      roomId: roomId,
      body: message.body,
      ownedByCurrentUser: message.ownedByCurrentUser,
    });
  };

  const loadMessage = () => {
    let token = localStorage.getItem('token');

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/message/${roomId}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setMessages(res.data.message);
      });
  };

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });
    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: `${img}! ${name}: ${messageBody}`,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage, saveMessage, loadMessage };
};

export default useChat;
