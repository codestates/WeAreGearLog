import React, { useState } from 'react';
import g304 from '../../Img/brands/g304.png';
import './Brands.css';
import { Link } from 'react-router-dom';
import { LogiDummy } from '../../DummyData';

const Logi = () => {
  const [logi, setLogi] = useState(LogiDummy);

  const gear = logi.map((el) => {
    return (
      <div className="card">
        <img src={el.img} alt=""></img>

        <p className="card-1">
          {el.title}

          <br></br>
          {el.Review}
        </p>

        <Link to={el.path}>
          <span className="card-2">{el.click}</span>
        </Link>
      </div>
    );
  });

  console.log(logi);
  return (
    <section className="Logitech-page">
      <div className="top-wrap">
        <div className="logi-top">
          <div className="logi-top1">Logitech</div>
        </div>
      </div>
      <div className="flex-warp">
        <div className="flexContainer">
          <div className="card-container">{gear}</div>
        </div>
      </div>
    </section>
  );
};

export default Logi;

// import React, { useState } from 'react';
// import g304 from '../../Img/brands/g304.png';
// import './Brands.css';
// import { Link } from 'react-router-dom';
// import { LogiDummy } from '../../DummyData';

// const Logi = () => {
//   const [logi, setLogi] = useState(LogiDummy);

//   const gear = logi.map((el) => {
//     return (
//       <div className="card">
//         <img src={el.img} alt=""></img>

//         <p className="card-1">
//           {el.title}<br></br>{el.Review}
//         </p>

//         <Link to={el.path}>
//           <span className="card-2">{el.click}</span>
//         </Link>
//       </div>
//     );
//   });

//   console.log(logi);
//   return (
//     <section className="Logitech-page">
//       <div className="top-wrap">
//         <div className="logi-top">
//           <div className="logi-top1">Logitech</div>
//         </div>
//       </div>
//       <div className="flex-warp">
//         <div className="flexContainer">
//           <div className="card-container">
//             <div className="card">
//               <img src={g304}></img>

//               <p className="card-1">
//                 Logitech G304<br></br>Review
//               </p>

//               <Link to="/brands/review/logitech">
//                 <span className="card-2">리뷰보기</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Logi;
