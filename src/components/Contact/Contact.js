import React,  { Component } from 'react';
import styled from 'styled-components';
import { Bold, Desc, Desc2 } from './../HOC.js';

export default class Contact extends Component{

    render(){
        return(
            <ContactCont>
                <ContactH1>Contact Us</ContactH1>
                <Desc>
                Kaplan Business Group
                <br/>
                </Desc>
                <Desc2>
                <span><Bold>Tel:</Bold> 858-349-1809</span><br/>
                <span><Bold>e-mail:</Bold> contact@KaplanBG.com</span>
                </Desc2>
            </ContactCont>
        )
    }
}
//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const ContactCont = styled.div`
    font-family: 'Encode Sans Semi Expanded', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0px 27%;
`
const ContactH1 = styled.h1`
    margin: 20px auto 10px auto;
    font-size: 30px;
    font-weight: 300;
`