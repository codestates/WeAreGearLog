import React, { useEffect } from 'react';
import './ReviewTemp.css';
import { FcDocument, FcElectricalSensor } from 'react-icons/fc';
import g304rv from '../../../Img/brands/Logitech/g304rv.png';
import razerdeathadder from '../../../Img/brands/Lazer/razerdeathadder.png';
import gprox1 from '../../../Img/brands/Logitech/gprox1.png';
import g915 from '../../../Img/brands/Logitech/g915.png';
import g733 from '../../../Img/brands/Logitech/G7331.png';
import blackwidow from '../../../Img/brands/Lazer/blackwidow.png';
import razerkraken from '../../../Img/brands/Lazer/razerkraken.png';
import roccataimo from '../../../Img/brands/Roccat/roccataimo.png';
import konepro from '../../../Img/brands/Roccat/konepro.png';
import k70kbd from '../../../Img/brands/Corsair/k70keyboard.png';
import k70tkl from '../../../Img/brands/Corsair/k70tkl1.png';

const gearimg = [
  {
    id: 1,
    src: g304rv,
  },
  {
    id: 2,
    src: gprox1,
  },
  {
    id: 3,
    src: g915,
  },
  {
    id: 4,
    src: g733,
  },
  {
    id: 5,
    src: blackwidow,
  },
  {
    id: 6,
    src: razerdeathadder,
  },
  {
    id: 7,
    src: razerkraken,
  },
  {
    id: 8,
    src: roccataimo,
  },
  {
    id: 9,
    src: konepro,
  },
  {
    id: 10,
    src: k70kbd,
  },
  {
    id: 10,
    src: k70tkl,
  },
];

const ReviewTemp = ({ setSaveId, saveId, LOGI }) => {
  useEffect(() => {
    let sr = localStorage.getItem('id');
    if (saveId === 0 && sr) {
      setSaveId(sr);
    } else {
      localStorage.setItem('id', saveId);
    }
  }, []);

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
            <img className="title-img" src={gearimg[saveId].src} alt=""></img>
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
