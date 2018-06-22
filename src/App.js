import React, { Component } from 'react';
import styled from 'styled-components';

import './reset.css'
import { Link } from 'react-router-dom';

import Home from './components/Home/Home.js';
import logo from './images/customLogo.jpg';
import favicon from './images/favicon.ico';
import searchIcon from './images/searchIcon.png';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LogoCont>
          <LogoImg src={logo} alt="logo" />
        </LogoCont>
        <KBGul>
            <li><KBGlink to='/'>Home</KBGlink></li>
            <li><KBGlink to='/services'>Services <Carrot>&#709;</Carrot></KBGlink></li>
            <li><KBGlink to='/about'>About</KBGlink></li>
            <li><KBGlink to='/contact'>Contact</KBGlink></li>
            <li><KBGlink to='/'><SearchImg src={searchIcon} alt="Search Icon" /></KBGlink></li>
        </KBGul>
        {routes}
        <KBGDivider />
        <KBGFooter>
          <FooterImg src={logo} alt="logo" />
          <FootLi><FootLink to='/about'>About</FootLink></FootLi>
          <FootLi> | </FootLi>
          <FootLi><FootLink to='/contact'>Contact</FootLink></FootLi>
          <FootLi> | </FootLi>
          <FootLi>Site Map</FootLi>
        </KBGFooter>
        <KBGDivider />
        <KBGFooter2>
        858-349-1809  |  contact@kaplanbg.com
        </KBGFooter2>
      </div>
    );
  }
}

export default App;

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const LogoCont = styled.div`
`
const LogoImg = styled.img`
  margin-left: 15px;
  margin-top:15px;
  height: 70px;
  width: auto;
`
const KBGul = styled.ul`
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background: #424242;
  height: 40px;
  align-items: center;
`
const KBGlink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 15px;
  margin-right: 15px;
  font-family: 'Encode Sans Semi Expanded', sans-serif;
`
const Carrot = styled.span`
  font-size:10px;
`
const SearchImg = styled.img`
  height: 18px;
  width: 18px;
`
const KBGDivider = styled.div`
  width: 80%;
  margin-top: 18px;
  margin-left: 10%;
  margin-right: 10%;
  box-sizing: border-box;
  height: 1px;
  background: #D6D6D6;
`
const KBGFooter = styled.footer`
  width: 100%;
  margin-top: 10px;
  padding-right: 10%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style-type: none;
  align-items: center;
`
const FooterImg = styled.img`
  height: 30px;
  width: auto;
  margin-right: auto;
  margin-left: 10%;
`
const FootLi = styled.li`
  margin-left: 6px;
  font-size: 11px;
`
const KBGFooter2 = styled.footer`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  font-size: 11px;
`
const FootLink = styled(Link)`
  text-decoration: none;
  color: black;
`