import React, { useState } from 'react';
import { RAZER } from '../../DummyData';

import './Brands.css';
import { Link } from 'react-router-dom';

const Lazer = () => {
  const [razer, setRaser] = useState(RAZER);
  const gear = razer.map((el) => {
    return (
      <div className="card">
        <img src={el.img} alt=""></img>

        <p className="card-1">
          {el.title}

          <br></br>
          {el.Review}
        </p>

        <Link to={el.path}>
          <span className="card-2">{el.click}</span>
        </Link>
      </div>
    );
  });
  return (
    <section className="Logitech-page">
      <div className="top-wrap">
        <div className="Razer-top">
          <div className="Razer-top1">Razer</div>
        </div>
      </div>
      <div className="flex-warp">
        <div className="flexContainer">
          <div className="card-container">{gear}</div>
        </div>
      </div>
    </section>
  );
};

export default Lazer;
