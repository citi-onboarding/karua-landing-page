
import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ImageText = styled.p`
  color: black;
  font-size: 24px;
  margin: 0;
`;

export const OutputImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const CarouselStyled = styled(Carousel)`
  width: 100%;
`;
