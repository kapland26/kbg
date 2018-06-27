import React from 'react';
import styled from 'styled-components';
import { Desc, Desc2, Ul, Li, KBGlink } from './../../HOC.js';

export default function HomeText( props ) {
    return (
      <HomeTextCont>
        <HomeH1>Your analytics partner.</HomeH1>
        <HomeSubTitle> Welcome to the Kaplan Business Group. </HomeSubTitle>
        <Desc>
        We are a company led by industrial engineers with more than 15 years worth of experience in industry. We apply 21st century solutions to age-old problems that affect businesses of all shapes and sizes.<br/><br/> 
        Using our specialist knowledge and experience, we work closely with our clients to identify areas of waste in their business and help them to develop comprehensive, bespoke solutions to enhance the performance of their company. <br/><br/>
        We offer a wide range of services, including:<br/>
        <Ul>
        <Li>•  Retail banking optimization</Li>
        <Li>•  Visitor experience optimization</Li>
        <Li>•  Supply chain optimization</Li>
        <Li>•  The Lean Banking Institute</Li>
        </Ul>
        </Desc>
        <Desc2>
           If you can't find what you're looking for, would like to find out more about what we offer or would like a quote for a project, please don’t hesitate to <KBGlink to='/contact'>contact us</KBGlink>.
          <br/><br/>
          Experienced with working alongside world-leading companies and some of the best names in the business, the Kaplan Business Group is perfectly-equipped to meet all of your business optimization needs.
        </Desc2>
      </HomeTextCont>
    )
  }

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const HomeTextCont = styled.div`
  width:100%;
  padding: 0px 70px;
  font-family: 'Encode Sans Semi Expanded', sans-serif;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const HomeH1 = styled.h1`
  margin: 30px auto 10px auto;
  font-size: 40px;
  font-weight: 300;
`
const HomeSubTitle = styled.h2`
  font-size: 13px;
  font-weight: 700;
  color: #18385F;
  margin: 3px auto 15px auto;
`