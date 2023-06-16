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
    
    width: 804px;
    padding: 30px 60px;

    background-color: #fff;
    color: #000;

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
    justify-content: flex-start;
    align-items: flex-start;
    
    margin: 20px 0;
    
    label{
        font-size: 28px;
    }
    
    input{

        display: flex;
        
        width: 100%;
        
        font-size: 20px;
        
        padding: 15px;
        
        border: none;
        border-radius: 5px;

        background-color: rgba(36, 158, 231, 0.16);

        #solutionDescribe{
            min-height: 120px;
        }

        @media (max-width: 500px) {
            width: 90%;
        }
    }
`;

export const StyledButton = styled.div`
    display: flex;

    width: fit-content;
    
    border-radius: 5px;
    
    background-color: #ff2c7d;
    color: #fff;
    
    button{

        font-size: 24px;
        
        padding: 10px;

        border: none;

        background-color: transparent;
        color: #fff;
    }

    :hover{
        background-color: #ff2c7dcc;
    }
`;