import styled from 'styled-components';

export const Intro = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IntroBackground = styled.div`
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
  margin-left: 10%; /* Add margin to create spacing */
`;

export const IntroText = styled.div`
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  text-align: justify;
  flex: 1;
  width: 100%;
  margin: 0 10% 10%;
`;

export const SameLevel = styled.div`
  margin: auto:
`;

export const IntroImg = styled.img`
  max-width: 50%;
  margin: auto;
`;