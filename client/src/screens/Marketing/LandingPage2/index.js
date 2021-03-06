import React from 'react';
import styled from 'styled-components';

import BannerBackground from './images/bannerObjects/bannerBackground.jpg';
import { GlobalStyle } from './styles';

import NavBar from './nav';
import Banner from './banner';
import Services from './services';
import HowItWorks from './howItWorks';

const Background = styled.div`
  background-image: url(${BannerBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const LandingPage2 = () => (
  <Background>
    <GlobalStyle />
    <NavBar />
    <Banner />
    <Services />
    <HowItWorks />
  </Background>
);

export default LandingPage2;
