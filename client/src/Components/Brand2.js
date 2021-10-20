import { useState, useRef } from 'react';
import corsair from '../Img/corsair.png';
import logi from '../Img/logi.png';
import razer from '../Img/razer.png';
import roccat from '../Img/roccat.png';
import still from '../Img/still.png';
import '../App.css';

let dummyImage = [
  {
    id: 1,
    src: corsair,
  },
  {
    id: 2,
    src: logi,
  },
  {
    id: 3,
    src: razer,
  },
  {
    id: 4,
    src: roccat,
  },
  {
    id: 5,
    src: still,
  },
];

const Brand2 = () => {
  const mql = matchMedia('screen and(max-width:768').matches;

  console.log(mql);
  const [img, setIag] = useState(dummyImage);
  const slider = useRef(null);

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
