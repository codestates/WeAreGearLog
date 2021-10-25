/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import corsair from '../Img/corsair.png';
import logi from '../Img/logi.png';
import razer from '../Img/razer.png';
import roccat from '../Img/roccat.png';
import still from '../Img/still.png';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';

let dummyImage = [
  {
    id: 1,
    src: corsair,
    path: '/brands/corsair',
  },
  {
    id: 2,
    src: logi,
    path: '/brands/logitech',
  },
  {
    id: 3,
    src: razer,
    path: '/brands/razer',
  },
  {
    id: 4,
    src: roccat,
    path: '/brands/roccat',
  },
  {
    id: 5,
    src: still,
    path: '/brands/still',
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
