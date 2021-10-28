import React, { useEffect } from 'react';
import './ReviewTemp.css';
import { FcDocument, FcElectricalSensor } from 'react-icons/fc';
import g304ti from '../../../Img/brands/6143-1.png';
import Logi from '../Logi';

const ReviewTemp = ({ setSaveId, saveId, LOGI }) => {
  useEffect(() => {
    console.log(LOGI);
    console.log(saveId);
    if (!saveId) {
      let sr = localStorage.getItem('id');
      setSaveId(sr);
    } else {
      localStorage.setItem('id', saveId);
    }
  }, [saveId]);

  return (
    <div className="Rv-temp">
      <div className="Rv-temp-page">
        <div className="Rv-temp-title">
          <FcDocument size="40" />
          {LOGI[saveId].title}
        </div>
        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <div className="Rv-temp-headli">
              <h1 className="Rv-temp-title1">{LOGI[saveId].title}</h1>
            </div>
            <p className="Rv-text">{LOGI[saveId].intro}</p>
          </div>
          <div className=".main-review">
            <img className="title-img" src={g304ti} alt=""></img>
          </div>
        </div>

        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <h1 className="Rv-temp-title1">{LOGI[saveId].title1}</h1>
            <p className="Rv-text">
              {LOGI[saveId].intext} <br></br>
              <div className="interview"> {LOGI[saveId].interviewer}</div>
            </p>
          </div>
          <div className="Rv-temp-introp">
            <li>
              <FcElectricalSensor size="20" /> {LOGI[saveId].li1}
            </li>
            <li>
              <FcElectricalSensor size="20" /> {LOGI[saveId].li2}
            </li>
            <li>
              <FcElectricalSensor size="20" /> {LOGI[saveId].li3}
              가능
            </li>
            <li>
              <FcElectricalSensor size="20" /> {LOGI[saveId].li4}
            </li>
          </div>
        </div>
        <div className="Rv-temp-headline">
          <div className="Rv-temp-intro">
            <h1 className="Rv-temp-title1"> {LOGI[saveId].final}</h1>
            <hr></hr>
            <p className="Rv-text">{LOGI[saveId].ftext}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewTemp;
