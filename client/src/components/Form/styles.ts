import styled from "styled-components";
import { Input, Radio } from 'antd';
import { Xilosa, Confortaa } from '../../assets';


export const StyledSubscriptionComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px !important;
`;

export const SubscriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 515px;
    width: 1181px;
    border-radius: 20px;

    padding: 30px 60px;

    background-color: #731803;

    h2{
        font-size: 45px;
        text-align: center;

        @media (max-width: 500px) {
            font-size: 36px;
        }
    }

    @media (max-width: 500px) {
        padding: 30px 20px;
    }
`;


export const StyledSubscriptionField = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #731803;
    margin: 20px 0;
    
    input{

        display: flex;
        
        width: 100%;
        
        font-size: 20px;
        
        padding: 15px;
        
        border: none;
        border-radius: 20px;

        background-color: #F5F5F5;
        

        #solutionDescribe{
            min-height: 120px;
        }

        input::placeholder {
            color: red;
        }

        @media (max-width: 500px) {
            width: 90%;
        }
    }
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
    width: 1036px !important;

    &::placeholder{
        color: #731803;
    }

`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: row;
    align-itens: center;
    gap: 15px;
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
    width: 550px !important;

    &::placeholder{
        color: #731803;
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
    width: 471px !important;

    &::placeholder{
        color: #731803;
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

`;

export const FieldTitle = styled.h1`
    font-size: 20px;
    text-align: left;
    color: #731803;
    font-weight: 400;
    margin-top: -5px !important;

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

`;

export const HatImage = styled.img`
    width: 95%;
    height: 100%;
    object-fit: cover;
    padding-bottom: 50px;
`;