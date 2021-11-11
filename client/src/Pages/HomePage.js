import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import '../App.css';
import Home from '../Components/Home';
import Brand from '../Components/Brand';
import Brand2 from '../Components/Brand2';
import BrandCover from '../Components/BrandCover';

import Padding from '../Components/Padding';
import { Route } from 'react-router';

import Navbar from '../Components/Nevbar';

const HomePage = ({ isLogin, setIsLogin, setAuthRegi, authRegi }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <div className="nevv">
        <Navbar
          authRegi={authRegi}
          setAuthRegi={setAuthRegi}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      </div>
      <Padding />

      <Route exact path="/">
        <Home />

        <BrandCover />
        {isMobile ? <Brand2 /> : <Brand />}
      </Route>
    </>
  );
};

export default HomePage;
