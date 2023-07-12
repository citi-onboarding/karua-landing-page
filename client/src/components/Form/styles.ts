import styled from "styled-components";
import { Input, Radio } from 'antd';
import { Xilosa, Confortaa } from '../../assets';


export const StyledSubscriptionComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px !important;
    width: 85%;

`;

export const SubscriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 515px;
    width: 100%;
    border-radius: 20px;

    padding: 30px 60px;

    background-color: #731803;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;


export const StyledSubscriptionField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #731803;
    margin: 20px 0; 
    width: 100%;

`;

export const StyledButton = styled.button`
    display: flex;

    width: 223px;
    height: 55px;
    
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    
    background-color: #F5B113;
    color: #731803;
    border: none;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100% !important;
     
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const FormTitle = styled.h1`

    @font-face {
        font-family: 'Xilosa';
        src: url(${Xilosa}) format('woff');
    }
    font-family: Xilosa;
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    color: #731803;
    padding-bottom: 50px !important;
`;

export const NameInput = styled(Input)`
    @font-face {
        font-family: 'Confortaa';
        src: url(${Confortaa}) format('woff');
    }
    font-family: 'Confortaa';
    display: flex;
    height: 50px;
    font-size: 20px;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: #F5F5F5;
    color: #731803 !important;
    width: 100% !important;

    &::placeholder{
        color: #731803;
    }

    @media (max-width: 768px) {
        width: 100% !important;
    }

`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
    gap: 15px;
    width: 100%;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column; 
    }
`;

export const EmailInput = styled(Input)`
    @font-face {
        font-family: 'Confortaa';
        src: url(${Confortaa}) format('woff');
    }
    font-family: 'Confortaa';
    display: flex;
    font-size: 20px;
    height: 50px;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: #F5F5F5;
    width: 100% !important;

    &::placeholder{
        color: #731803;
    }

    @media (max-width: 768px) {
        width: 100% !important;
    }

`;

export const CategorySelect = styled.div`

    @font-face {
        font-family: 'Confortaa';
        src: url(${Confortaa}) format('woff');
    }
    font-family: 'Confortaa';
    display: flex;
    font-size: 20px;
    height: 50px;
    padding: 15px;
    border: none;
    border-radius: 20px;
    background-color: #F5F5F5;
    gap: 40px;
    flex-direction: row;
    align-itens: center;

    @media (max-width: 768px) {
        width: 100% !important;
        height: 100px;
    }

`;

export const PhoneInput = styled(Input)`
    @font-face {
        font-family: 'Confortaa';
        src: url(${Confortaa}) format('woff');
    }
    font-family: 'Confortaa';
    display: flex;
    font-size: 20px;
    padding: 15px;
    height: 50px;
    border: none;
    border-radius: 20px;
    background-color: #F5F5F5;
    //width: 100% !important;

    &::placeholder{
        color: #731803;
    }

    @media (max-width: 768px) {
        width: 100% !important;
        
    }
`;

export const MensageInput = styled(Input)`

    @font-face {
        font-family: 'Confortaa';
        src: url(${Confortaa}) format('woff');
    }
    font-family: 'Confortaa';
    display: flex;
    font-size: 20px;
    padding: 15px;
    height: 87px;
    border: none;
    border-radius: 20px;
    background-color: #F5F5F5;
    align-itens: center;
    justify-content: center;
    gap: 15px;

    &::placeholder{
        color: #731803;
    }

    @media (max-width: 768px) {
        width: 100% !important;
        height: 50px;
    }

`;

export const FieldTitle = styled.h1`
    font-size: 20px;
    text-align: left;
    color: #731803;
    font-weight: 400;
    margin-top: -5px !important;

    @media (max-width: 768px) {
        display: none;
    }

`;

export const SelectBox = styled(Radio)`
    align-itens: center;
    font-size: 20px;

    
    @font-face {
        font-family: 'Confortaa';
        src: url(${Confortaa}) format('woff');
    }
    font-family: 'Confortaa';
    color: #731803;

    @media (max-width: 768px) {
        width: 100% !important;
    }

`;

export const HatImage = styled.img`
    width: 95%;
    height: 100%;
    object-fit: cover;
    padding-bottom: 50px;

    @media (max-width: 768px) {
        display: none;
    }
`;