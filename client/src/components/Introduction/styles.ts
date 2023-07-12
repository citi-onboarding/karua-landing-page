import styled from 'styled-components';
import { Confortaa } from '../../assets';

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 745px;
  
  @media (max-width: 768px) {
    background: #731803;
    height: 100%;
    padding-bottom: 30px;
    padding-top: 30px;
  }
`;

export const IntroBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 745px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Video = styled.video`
  height: 100%;
  object-fit: cover;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IntroTitle = styled.div`
  font-family: 'Xilosa';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  text-align: center;
  width: 100%;
  padding-bottom: 40px;
  padding-top: 20px;
`;

export const IntroTitleText = styled.div`
  font-family: 'Xilosa';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  white-space: nowrap;
  width: 100%;

  @media (max-width: 950px) {
    font-size: 40px;
    text-align: center;
  }
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 1100px){
    width: 40%;
  }

  @media (max-width: 950px) {
    text-align: justify;
    align-items: center;
  }

`;

export const SameLevel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space around;
  gap: 10%;
`;

export const IntroText = styled.div`
  padding-top: 5%;
  font-family: 'Confortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
`;

export const BoxImage = styled.div`
  height: 70%;
  align-items: space around;
  justify-content: center;
  display: flex;
  margin-top: 0%;
  margin-right: 0 important!; 
  margin-left: 0 important!;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const IntroImg = styled.img`
  width: 400px;
  height: 400px;
`;

export const IntroContent = styled.div`
  display: flex;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;