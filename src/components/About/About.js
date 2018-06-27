import React,  { Component } from 'react';
import styled from 'styled-components';
import Carousel, {Item} from 'react-bootstrap/lib/Carousel'
import { Desc, Desc2, Ul, Li, KBGlink  } from './../HOC.js';
import globe from './globe.jpg';
import about1 from './about1.jpg';
import about2 from './about2.jpg';
import about3 from './about3.jpg';

export default class About extends Component{

    render(){
        return (
            <AboutCont>
                <AboutH1>About Us</AboutH1>
                <AboutDiv />
                <AboutGlobe image={globe} />
                <Desc>
                    Kaplan Business Group is led by experienced industrial engineers. Our skills equipt us to analyze and improve businesses across a wide range of industries.
                    We take a client-focused approach in all of our work, using our analytics methods to provide highly customized, cost effective and targeted solutions to benefit clients’ businesses. Our processes and methods include the following:<br/>
                    <Ul>
                    <Li>•  Computer simulation<br/></Li>
                    <Li>•  Optimization<br/></Li>
                    <Li>•  Statistical analysis including clustering and regression analysis<br/></Li>
                    <Li>•  Data mining<br/></Li>
                    <Li>•  Software development<br/></Li>
                    </Ul><br/><br/>
                    Kaplan believes in teamwork; We measure our own success through your success and we enjoy building productive, long-lasting relationships with our clients which enable us to continue providing beneficial targeted solutions for ongoing improvement.<br/><br/>
                    Our company is small, meaning that we have very low overhead. We also apply our own optimization and lean business principles to our work, maximizing our efficiency. This means that despite our highly specialized and unique skillset, we are still able to offer an excellent value on all of our business optimization services.
                </Desc>
                <Desc2>
                    We are proud to have worked with some of the best businesses in the world, and are thrilled to have been a part of their successes. We were there during the creation of some current industry benchmark processes, giving us a unique insight into the world of business optimization.<br/><br/>
                    <AboutCar>
                        <AboutItem>
                            <AboutImg image={about1}/>
                            {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                        </AboutItem>
                        <AboutItem>
                            <AboutImg image={about2}/>
                        </AboutItem>
                        <AboutItem>
                            <AboutImg image={about3}/>
                        </AboutItem>
                    </AboutCar>
                    <br/>
                    We partner with the world's best specialized companies, such as Kiran Consulting Group and Leonardo Group, to provide successful solutions to your complex and large scale problems. <br/><br/>
                    Kaplan utilizes the best resources from around the world to provide you with the best solution for the best price. We take advantage of all the top technology and tools the 21st century has to offer to provide you with:<br/>
                    <Ul>
                        <Li>•  Best solutions </Li>
                        <Li>•  Best resources </Li>
                        <Li>•  Great value </Li>
                    </Ul>
                    <br/>
                    It is our aim to be better value than your in-house resources. <KBGlink to='/contact'>Contact us</KBGlink> to find out more.
                </Desc2>
            </AboutCont>
        )
    }

}

//  ↓↓↓↓↓  STYLES  ↓↓↓↓↓↓↓
const AboutCont = styled.div`
    font-family: 'Encode Sans Semi Expanded', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0px 70px;
    `
const AboutH1 = styled.h1`
    margin: 20px auto 10px auto;
    font-size: 30px;
    font-weight: 300;
`
const AboutDiv = styled.div`
width: 80%;
margin: 0px auto 5px auto;
box-sizing: border-box;
height: 1px;
background: #D6D6D6;
`
const AboutGlobe = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 200px;
    width: 200px;
    margin: auto;
    `
const AboutCar = styled(Carousel)`
    margin: auto;
    height: 200px;
    width: 400px;
`
const AboutItem = styled(Carousel.Item)`
    height: 200px;
    width: 100%;
`
const AboutImg = styled.div`
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;       
    height: 100%;
`