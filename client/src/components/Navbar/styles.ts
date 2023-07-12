import styled from 'styled-components';
import { Confortaa } from '../../assets';

export const NavegBar = styled.div`
  width: 100%;
  height: 200px;
  left: 0px;
  top: 0px;
  
  background: rgba(245, 177, 19, 0.4);
  box-shadow: 0px 4px 90px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 25%;
  padding-left: 10%;

  font-family: 'Confortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 100%; // 18px
  color: #731803 !important;
  line-height: 20px;
  text-align: right;
`;

export const TitleImg = styled.img`
  margin-top: -10.0%;
  width: 30%;
`;

export const NavPages = styled.div`
  top: 3.06%;
  bottom: 96.55%;
  display: flex;
  align-items: center;
  gap: 50px;

  a{
    text-decoration: none;
    color: inherit;
  }

`;

export const NavTag = styled.div`
  font-family: 'Confortaa';
  color: #731803;
  font-size: inherit;
`;

export const NavButton = styled.button`
  background: transparent;
  font-family: 'CoNfortaa';
  border: 1.5px solid #731803;
  border-radius: 10px;
  font-size: inherit;
  padding: 8px 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;


