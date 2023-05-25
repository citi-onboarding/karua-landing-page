import styled from 'styled-components';

export const NavegBar = styled.div`
  position: absolute;
  width: 1920px;
  height: 200px;
  left: 0px;
  top: 0px;

  background: rgba(245, 177, 19, 0.4);
  box-shadow: 0px 4px 90px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
`;

export const TitleImg = styled.img`
  width: 25%;
`;

export const NavPages = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NavTag = styled.div`
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: right;

  /* Marrom */
  color: #731803;
`;

export const NavButton = styled.button`
  background: transparent;
  border: 1.5px solid #731803;
  border-radius: 10px;
  padding: 8px 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
