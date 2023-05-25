import styled from 'styled-components';

export const NavegBar = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  left: 0px;
  top: 0px;
  

  background: rgba(245, 177, 19, 0.4);
  box-shadow: 0px 4px 90px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 250px;

  font-family: 'Comfortaa', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: right;

`;

export const TitleImg = styled.img`
  margin-top: -5.0%;
  width: 20%;
`;

export const NavPages = styled.div`
  top: 3.06%;
  bottom: 96.55%;
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const NavTag = styled.div`
  color: #731803;
  font-family: inherit;
  font-size: inherit;
`;

export const NavButton = styled.button`
  background: transparent;
  border: 1.5px solid #731803;
  border-radius: 10px;
  font-family: inherit;
  font-size: inherit;
  padding: 8px 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
