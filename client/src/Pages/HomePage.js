import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import '../App.css';
import Home from '../Components/Home';
import Brand from '../Components/Brand';
import Brand2 from '../Components/Brand2';
import BrandCover from '../Components/BrandCover';
import Intro from '../Components/Intro';
import IntroCover from '../Components/IntroCover';

import { Route, Switch } from 'react-router';

import Navbar from '../Components/Nevbar';

const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  console.log(isMobile);
  return (
    <>
      <Navbar />

      <Route exact path="/">
        <Home />

        <IntroCover />
        <Intro />
        <BrandCover />
        {isMobile ? <Brand2 /> : <Brand />}
      </Route>
    </>
  );
};

export default HomePage;
