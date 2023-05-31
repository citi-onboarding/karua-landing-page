import styled from 'styled-components';

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

export const IntroBackground = styled.div`
  margin-block:auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const IntroTitle = styled.div`
  font-family: 'Xilosa';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 30px;
  text-align: center;
  font-feature-settings: 'tnum' on, 'lnum' on;
  position: relative;

  z-index: 1;
  width: 100%;
`;

export const IntroTitleText = styled.div`
  font-family: 'Xilosa';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 64px;
  position: relative;
  z-index: 1;
  width: 100%;
  margin-bottom: 5%;
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: center;
  align-items: center;

  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 40%;
  margin-right: 0%;

`;

export const SameLevel = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5%;
`;

export const IntroText = styled.div`
  padding-top: 5%;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  flex: 1;
  width: 100%;
`;

export const BoxImage = styled.div`
  margin-top: 15%;
  margin-bottom: 10%;
  margin-left: 10%;
  vertical-align: middle;

`;

export const IntroImg = styled.img`
 
`;