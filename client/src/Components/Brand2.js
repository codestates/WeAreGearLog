/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import drx from '../Img/team/drx.png';
import dwkia from '../Img/team/dwkia.png';
import geng from '../Img/team/geng.png';
import han from '../Img/team/han.png';
import t1 from '../Img/team/t1.png';
import af from '../Img/team/af.png';
import fb from '../Img/team/fb.png';
import kt from '../Img/team/kt.png';
import liv from '../Img/team/liv.png';
import ns from '../Img/team/ns.png';

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
  {
    id: 6,
    src: af,
    path: '/team/t1',
  },
  {
    id: 7,
    src: fb,
    path: '/team/drx',
  },
  {
    id: 8,
    src: liv,
    path: '/team/dwk',
  },
  {
    id: 9,
    src: kt,
    path: '/team/han',
  },
  {
    id: 10,
    src: ns,
    path: '/team/geng',
  },
];

const Brand2 = () => {
  const history = useHistory();
  const [img, setIag] = useState(dummyImage);

  const maps = img.map((el) => {
    return (
      <Link to={el.path}>
        <a key={el.id} className="brand-link">
          <img className="brand-image-name" src={el.src} alt="" />
        </a>
      </Link>
    );
  });
  {
  }
  return (
    <div className="slide">
      <div className="teamcards"> {maps.slice(0, 3)}</div>
      <div className="teamcards">{maps.slice(4, 7)}</div>
      <div className="teamcards">{maps.slice(8, 10)}</div>
    </div>
  );
};

export default Brand2;
