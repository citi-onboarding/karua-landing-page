import styled from "styled-components";

export const SameLevel = styled.div`
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // gap: 40px;
  width: 100%;
  height: 100%;
`;

export const CarouselBox = styled.div`
  flex-direction: row; 
  display: flex;
  gap: 200px;
`;

export const CarouselSectionContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; 
`;

export const Title = styled.div`
  font-family: 'Xilosa';
  font-style: normal;
  font-size: 48px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  color: #731803;
`;

export const CarouselContainer = styled.div`
  background: rgba(245, 177, 19, 0.4);
  border-radius: 25px 25px 25px 25px;
  display: flex; 
  width: 620px;
  height: 100%;
  flex-direction: column; 
  align-items: center; 
`;

export const VideoContainer = styled.div` 
  border-radius: 25px 25px 0px 0px;
`;

export const Video = styled.video`
  border-radius: 25px 25px 0px 0px;
  width: 615px;
  height: 371px;
`;

export const ArtistComponent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 10px;
`;

export const ArtistName = styled.div`
  margin-top: 20px;
  font-family: 'Xilosa';
  font-size: 36px;
  color: #731803;
`;

export const ArtistDescription = styled.div`
  font-family: 'Comfortaa';
  font-size: 16px;
  color: #731803;
  padding-left: 2%;
  padding-right: 2%;

`;

export const ProductsComponents = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column; 
  gap: 20px;
`;

export const ProductBox = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
  gap: 10px;
`;

export const ProductImageBox = styled.div`
  border-radius: 25px;
  width: 150px;
  height: 150px;
  overflow: hidden;
`;

export const InfoProductContainer = styled.div`
  font-family: 'Comfortaa';
  font-size: 16px;
  gap: 10px;
  margin-left: 10px;
  flex-direction: column; 
  text-align: left;
  width: 392px;
  height: 127px;
  color: #731803;
`;

export const ProductName = styled.div`
  font-family: 'Xilosa';
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 36px;
  color: #731803;
`;

export const ProductDescription = styled.div`
  font-family: 'Comfortaa';
  font-size: 16px;
  color: #731803;
`;