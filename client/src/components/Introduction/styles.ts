import styled from 'styled-components';

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const IntroBackground = styled.div`
  position: fixed;
  width: 1920px;
  height: 745px;
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
`;

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  justify-content: center;
  align-items: center;
  width: 50%;
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
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  width: 100%;
`;

export const BoxImage = styled.div`
  height: 50%;
  align-items: space around;
  justify-content: center;
  display: flex;
  margin-top: 10%;
  margin-right: 0 important!; 
  margin-left: 0 important!;
`;

export const IntroImg = styled.img`
  width: 300px;
  height: 300px;
`;