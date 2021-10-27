import React, { useEffect } from 'react';
import './ReviewTemp.css';
import { FcDocument, FcElectricalSensor } from 'react-icons/fc';
import g304ti from '../../../Img/brands/6143-1.png';
import Logi from '../Logi';
const ReviewTemp = ({ isLogin, setSaveId, Id, LOGI }) => {
  useEffect(() => {
    localStorage.setItem('idv', Id);
    const sr = localStorage.getItem('idv');
    setSaveId(sr);
  }, [Id]);

  return (
    <div className="Rv-temp">
      <div className="Rv-temp-page">
        <div className="Rv-temp-title">
          <FcDocument size="40" />
          {LOGI[Id].title}
        </div>
        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <div className="Rv-temp-headline-1">
              <h1 className="Rv-temp-title1">{LOGI[Id].title}</h1>
            </div>
            <p className="Rv-text">{LOGI[Id].intro}</p>
          </div>
          <div className=".main-review">
            <img className="title-img" src={g304ti} alt=""></img>
          </div>
        </div>

        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <h1 className="Rv-temp-title1">{LOGI[Id].title1}</h1>
            <p className="Rv-text">
              {LOGI[Id].intext} <br></br>
              <div className="interview"> {LOGI[Id].interviewer}</div>
            </p>
          </div>
          <div className="Rv-temp-introp">
            <li>
              <FcElectricalSensor size="20" /> {LOGI[Id].li1}
            </li>
            <li>
              <FcElectricalSensor size="20" /> {LOGI[Id].li2}
            </li>
            <li>
              <FcElectricalSensor size="20" /> {LOGI[Id].li3}
              가능
            </li>
            <li>
              <FcElectricalSensor size="20" /> {LOGI[Id].li4}
            </li>
          </div>
        </div>
        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <h1 className="Rv-temp-title1"> {LOGI[Id].final}</h1>
            <hr></hr>
            <p className="Rv-text">{LOGI[Id].ftext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTemp;
