import React,{useState} from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [roomName, setRoomName] = useState('');

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className="home-container">
        <div>Gear log 채팅방</div>
      <input
        type="text"
        placeholder="채팅방 입력"
        value={roomName}
        onChange={handleRoomNameChange}
        className="text-input-field"
      />
      <Link to={`/chatroom/?roomId=${roomName}`} className="enter-room-button">
        Gear log 채팅방 입장!
      </Link>
    </div>
  );
};

export default Home;