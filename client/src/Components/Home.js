import React from 'react';
import '../App.css';
import Video from '../Video/Blue.mp4';

const Home = () => {
  return (
    <video className="door" autoPlay loop muted>
      <source className="video" src={Video} type="video/mp4" />
    </video>
  );
};

export default Home;
