import styled from "styled-components";

export const StyledSubscriptionComponent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

export const StyledSubscriptionForm = styled.div`
    width: 100%;

    padding: 20px 20px;

    @media (max-width: 500px) {
        padding: 0;
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

`;

export const FormTitle = styled.h1`
    font-family: Xilosa;
    font-size: 48px;
    font-weight: 400;
    text-align: center;
    color: #731803;
`;