import styled from "styled-components";

export const CarouselBox = styled.div`
  flex-direction: row; 
  display: flex;
  gap: 200px;
`;

export const CarouselSectionContainer = styled.div`
  background: #F5F5F5;
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

export const Title = styled.div`
  font-family: 'Xilosa';
  font-style: normal;
  font-size: 48px;
  text-align: center;
  color: #731803;
`;

export const CarouselContainer = styled.div`
  background: rgba(245, 177, 19, 0.4);
  border-radius: 25px 25px 25px 25px;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
`;

export const VideoContainer = styled.div` 
  border-radius: 25px 25px 0px 0px;
`;

export const Video = styled.video`
  border-radius: 25px 25px 0px 0px;
`;

export const ArtistComponent = styled.div`
  text-align: center;
  flex-direction: column; 
  align-items: center; 
`;

export const ArtistName = styled.div`
  font-family: 'Xilosa';
  font-size: 36px;
  color: #731803;
`;

export const ArtistDescription = styled.div`
  font-family: 'Comfortaa';
  font-size: 16px;
  color: #731803;
`;

export const ProductsComponents = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column; 
  align-items: center; 
`;

export const ProductBox = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row; 
  align-items: center; 
`;

export const ProductImageBox = styled.div`
  border-radius: 25px;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

export const InfoProductContainer = styled.div`
  font-family: 'Comfortaa';
  font-size: 16px;
  flex-direction: column; 
  align-items: center; 
  color: #731803;
`;

export const ProductName = styled.div`
  font-family: 'Xilosa';
  font-size: 36px;
  color: #731803;
`;

export const ProductDescription = styled.div`
  font-family: 'Comfortaa';
  font-size: 16px;
  color: #731803;
`;