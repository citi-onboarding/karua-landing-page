import React, { useState } from "react";
import { StyledSubscriptionComponent, SubscriptionContainer, StyledSubscriptionForm, StyledSubscriptionField, StyledButton } from "./styles";
//import apiAxios from "../../services/api";
import axios from "axios";

type SubscriptionFieldType = {
    labelTitle?: string;
    onChangeFunction: Function;
}

type Subscription = {
    firstName: string;
    phoneNumber: string;
    email: string;
    company: string;
    partnersNumber: number;
    segment: string;
    solutionDescribe: string;
    site: string;
}

export const SubscriptionComponent: React.FC = () => {
    return (
        <StyledSubscriptionComponent>
            
            <SubscriptionContainer>
                <h2 id="Forms">
                    Inscreva-se no nosso programa
                </h2>

                <SubscriptionForm />
            </SubscriptionContainer>

        </StyledSubscriptionComponent>
    );
}


const SubscriptionField = ({ labelTitle, onChangeFunction }: SubscriptionFieldType) => {
    return (
        <StyledSubscriptionField>
            <input 
                type="text"
                onChange={value => onChangeFunction(value.target.value)}
                placeholder = {labelTitle}
            />
        </StyledSubscriptionField>
    );
}


const SubscriptionForm: React.ElementType = () => {

    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [partnersNumber, setPartnersNumber] = useState("");
    const [segment, setSegment] = useState("");
    const [solutionDescribe, setSolutionDescribe] = useState("");
    const [site, setSite] = useState("");

    // const handleSubmit = () => {
    //     if (
    //         firstName &&
    //         phoneNumber &&
    //         email &&
    //         company &&
    //         partnersNumber &&
    //         segment &&
    //         solutionDescribe
    //     ) {

        // apiAxios.post('/subscription',       
    //         {
    //             "firstName": firstName,
    //             "phoneNumber": phoneNumber,
    //             "email": email,
    //             "company": company,
    //             "partnersNumber": partnersNumber,
    //             "segment": segment,
    //             "solutionDescribe": solutionDescribe,
    //             "site": site
    //         }
    //         ).then(log => {
    //             console.log(log);
    //             alert("Obrigado por sua inscrição!");
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             alert("Houve um erro e a inscrição não foi concluída. Por favor, tente de novo.");
    //         })
    
    //         apiAxios.post('/email',
    //         {
    //             "firstName": firstName,
    //             "phoneNumber": phoneNumber,
    //             "email": email,
    //             "company": company,
    //             "partnersNumber": partnersNumber,
    //             "segment": segment,
    //             "solutionDescribe": solutionDescribe,
    //             "site": site
    //         }
    //         ).then(log => {console.log(log)})
    //         .catch(err => {console.log(err)})
            
    //         console.log(
    //             `
    //             firstName: ${firstName}
    //             phoneNumber: ${phoneNumber}
    //             email: ${email}
    //             company: ${company}
    //             partnersNumber: ${partnersNumber}
    //             segment: ${segment}
    //             solutionDescribe: ${solutionDescribe}
    //             site: ${site}
    //             `
    //         )
    //     } else {
    //         alert('É obrigatório preencher todos os campos, exceto de "Site:"');
    //     }
    // }


    return (
        <StyledSubscriptionForm>
            <SubscriptionField 
                labelTitle="Nome:"

                onChangeFunction={setFirstName}
            />

            <SubscriptionField 
                labelTitle="E-mail:"
                
                onChangeFunction={setEmail}
            />

            <SubscriptionField 
                labelTitle="Telefone:"
                
                onChangeFunction={setCompany}
            />

            <SubscriptionField 
                labelTitle="Categoria:"
                
                onChangeFunction={setSegment}
            />
            

            <SubscriptionField 
                labelTitle="Deixe sua mensagem:"
                
                onChangeFunction={setSolutionDescribe}
            />


            <StyledButton>
                <button>
                    Enviar
                </button>
            </StyledButton>
        </StyledSubscriptionForm>
    );
}

