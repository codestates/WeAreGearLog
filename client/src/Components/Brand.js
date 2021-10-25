import { useState, useRef } from 'react';
import corsair from '../Img/corsair.png';
import logi from '../Img/logi.png';
import razer from '../Img/razer.png';
import roccat from '../Img/roccat.png';
import Slider from 'react-slick';
import still from '../Img/still.png';
import '../App.css';
import { useHistory, Link } from 'react-router-dom';

import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

let dummyImage = [
  {
    id: 1,
    src: corsair,
    path: '/brands/cosair',
  },
  {
    id: 2,
    src: logi,
    path: '/brands/list/logitech',
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

const Brand = () => {
  const history = useHistory();
  const [img, setIag] = useState(dummyImage);
  const slider = useRef(null);

  const maps = img.map((el) => {
    return (
      <a key={el.id} className="brand-link">
        <Link to={el.path}>
          <img className="brand-image-name" key={el.id} src={el.src} alt="" />
        </Link>
      </a>
    );
  });

  const set = {
    slidesToShow: 3,
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
