/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import drx from '../Img/team/drx.png';
import dwkia from '../Img/team/dwkia.png';
import geng from '../Img/team/geng.png';
import han from '../Img/team/han.png';
import t1 from '../Img/team/t1.png';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

let dummyImage = [
  {
    id: 1,
    src: t1,
    path: '/team/t1',
  },
  {
    id: 2,
    src: drx,
    path: '/team/drx',
  },
  {
    id: 3,
    src: dwkia,
    path: '/team/dwk',
  },
  {
    id: 4,
    src: han,
    path: '/team/han',
  },
  {
    id: 5,
    src: geng,
    path: '/team/geng',
  },
];

const Brand2 = () => {
  const history = useHistory();
  const [img, setIag] = useState(dummyImage);

  const maps = img.map((el) => {
    return (
      <a key={el.id} className="brand-link">
        <img className="brand-image-name" src={el.src} alt="" />
      </a>
    );
  });

  return <div className="slide">{maps}</div>;
};

export default Brand2;
