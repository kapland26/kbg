import React, { Component } from 'react';
import styled from 'styled-components';
import LJ_Cove from './LJ_Cove.jpg';
import HomeText from './HomeText/HomeText.js';

class Home extends Component {

    constructor(){
      super();
  
      this.state={
      }
    }
  
    render() {
  
      return (
          <HomeCont>
            <LJImg src={LJ_Cove} alt=""/>
            <HomeText />
          </HomeCont>
      );
    }
  }
  
  export default Home;
  //  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
  const HomeCont = styled.div`
    position: relative;
    width: 100%;
  `
  const LJImg = styled.img`
    width: 100%;
    height: auto;
  `