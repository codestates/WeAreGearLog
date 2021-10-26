import React from 'react';
import g304 from '../../Img/brands/g304.png';
import './Brands.css';
import { Link } from 'react-router-dom';
const Logi = () => {
  return (
    <section className="Logitech-page">
      <div className="top-wrap">
        <div className="logi-top">
          <div className="logi-top1">Logitech</div>
        </div>
      </div>
      <div className="flex-warp">
        <div className="flexContainer">
          <div className="card-container">
            <div className="card">
              <div>fdsfadsf</div>
            </div>
            <div className="card">
              <img src={g304}></img>
              <h4 className="card-1">
                Logitech G304<br></br>Review
              </h4>
              <Link to="/brands/review">
                <span className="card-2">리뷰보기</span>
              </Link>
            </div>
            <div className="card">3</div>
            <div className="card">4</div>
            <div className="card">5</div>
            <div className="card">5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logi;
