import React, { useEffect } from 'react';
import './ReviewTemp.css';
import { FcDocument, FcElectricalSensor } from 'react-icons/fc';
import g304rv from '../../../Img/brands/Logitech/g304rv.png';

const gearimg = [
  {
    id: 0,
    src: '',
  },
  {
    id: 1,
    src: '',
  },
  {
    id: 2,
    src: '',
  },
  {
    id: 3,
    src: '',
  },
  {
    id: 4,
    src: '',
  },
  {
    id: 5,
    src: g304rv,
  },
  {
    id: 6,
    url: '',
  },
  {
    id: 7,
    url: '',
  },
  {
    id: 8,
    url: '',
  },
  {
    id: 9,
    url: '',
  },
  {
    id: 10,
    url: '',
  },
  {
    id: 11,
    url: '',
  },
];

const ReviewTemp = ({ setSaveId, saveId, LOGI }) => {
  useEffect(() => {
    // console.log(LOGI);
    // console.log(saveId);
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
            <img
              className="title-img"
              src={gearimg[saveId - 1].src}
              alt=""
            ></img>
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
