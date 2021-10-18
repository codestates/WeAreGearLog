import React from 'react';
import spon from '../Img/Spon.png';

const Sponsor = () => {
  return (
    <div>
      <div className="brand-cover">
        <div className="brand-names">Sponsors</div>
      </div>
      <img className="spon" src={spon}></img>
    </div>
  );
};

export default Sponsor;
