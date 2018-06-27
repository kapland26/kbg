import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const KBGlink = styled(Link)`
  text-decoration: none;
  color: #18385F;
  font-weight: 600;
`
export const Bold = styled.h2`
    font-weight: 600;
    display: inline-block;
`
export const Desc = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  background-color:	#F5F5F5;
  border-radius: 15px 15px 0 0;
  padding: 18px 25px;
  margin-left: 100px;
  margin-right: 100px;
`
export const Desc2 = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 300;
  line-height: 25px;
  background-color:	#3569A2;
  border-radius: 0 0 15px 15px;
  padding: 18px 25px;
  margin-left: 100px;
  margin-right: 100px;
`
export const Ul = styled.ul`
display:inline-block;
zoom:1;
*display:inline;
`
export const Li = styled.li`
  text-align: left;
  color: #18385F;
  font-size: 14px;
  font-weight:600;
`