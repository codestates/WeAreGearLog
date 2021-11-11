import React, { useState } from 'react';

import './Brands.css';
import { Link } from 'react-router-dom';
import { LogiDummy } from '../../DummyData';

const Logi = ({ handleCardClick, setSaveId }) => {
  const [logi, setLogi] = useState(LogiDummy);

  const gear = logi.map((el) => {
    return (
      <div key={el.id} className="card">
        <img src={el.img} alt=""></img>

        <p className="card-1">
          {el.title}

          <br></br>
          {el.Review}
        </p>

        <Link to={el.path}>
          <span onClick={() => handleCardClick(el.id)} className="card-2">
            {el.click}
          </span>
        </Link>
      </div>
    );
  });

  return (
    <section className="Logitech-page">
      <div className="top-wrap">
        <div className="logi-top">
          <div className="logi-top1">Gear Review</div>
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

export default Logi;
