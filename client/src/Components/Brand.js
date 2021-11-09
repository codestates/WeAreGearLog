import { useState, useRef } from 'react';
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

import Slider from 'react-slick';
import '../App.css';
import { useHistory } from 'react-router-dom';

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

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

const Brand = () => {
  const history = useHistory();
  const [img, setIag] = useState(dummyImage);
  const slider = useRef(null);

  const maps = img.map((el) => {
    const pathT = () => {
      history.push(`${el.path}`);
      window.scrollBy(0, -9999);
    };
    return (
      <div key={el.id} className="brand-link">
        <img
          onClick={pathT}
          className="brand-image-name"
          key={el.id}
          src={el.src}
          alt=""
        />
      </div>
    );
  });

  const set = {
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slide">
      <i className="slide-prev" onClick={() => slider?.current?.slickPrev()}>
        <MdArrowBackIos />
      </i>

      <i className="slide-next" onClick={() => slider?.current?.slickPrev()}>
        <MdArrowForwardIos />
      </i>
      <Slider className="silder-img" arrows={false} ref={slider} {...set}>
        {maps}
      </Slider>
    </div>
  );
};

export default Brand;
