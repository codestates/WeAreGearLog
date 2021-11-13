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

  useEffect(() => {
    getProfile();
  });

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
      })
      .catch((err) => {
        console.log(err);
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

  return { messages, sendMessage };
};

export default useChat;
