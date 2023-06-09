import styled from "styled-components";
import { Confortaa } from '../../assets';



export const SameLevel = styled.div`
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
  padding-top: 35px;
`;

export const CarouselBox = styled.div`
  flex-direction: row; 
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  
`;

export const CarouselSectionContainer = styled.div`
  display: flex;
  flex-direction: row; 
  align-items: center; 
  padding-bottom: 100px !important;
  width: center;
`;

export const Title = styled.div`
  font-family: 'Xilosa';
  font-style: normal;
  font-size: 46px;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  color: #731803;
  padding-bottom: 20px;
`;

export const CarouselContainer = styled.div`
  background: rgba(245, 177, 19, 0.4);
  border-radius: 25px 25px 25px 25px;
  display: flex; 
  width: 550px;
  height: 1040px;
  flex-direction: column; 
  align-items: center; 
  padding-bottom: 100px !important;
  // margin-left: 50px;
  // margin-bottom: 70px;
  margin: auto;
  margin-bottom: 70px !important;
  
  @media (max-width: 768px) {
    width: 80%;
    height: 1350px;
    padding-bottom: 0px !important;
    margin: auto;
  }

`;

export const VideoContainer = styled.div` 
  border-radius: 25px 25px 0px 0px;
`;

export const Video = styled.video`
  border-radius: 25px 25px 0px 0px;
  width: 530px;
  height: 360px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
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

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ArtistDescription = styled.div`
  font-family: 'Confortaa';
  font-size: 16px;
  color: #731803;
  padding-left: 4%;
  padding-right: 4%;
  height: 150px;
  align-items: center;
  display: flex;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }

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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ProductImageBox = styled.div`
  border-radius: 25px;
  width: 135px;
  height: 135px;
  overflow: hidden;
  align-itens: center;
  justify-content: center;
`;

export const InfoProductContainer = styled.div`
  font-family: 'Confortaa';
  font-size: 16px;
  gap: 8px;
  margin-left: 10px;
  flex-direction: column; 
  text-align: left;
  width: 360px;
  height: 127px;
  color: #731803;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const ProductName = styled.div`
  font-family: 'Xilosa';
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 34px;
  color: #731803;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ProductDescription = styled.div`
  font-family: 'Confortaa';
  font-size: 14px;
  color: #731803;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
`;

