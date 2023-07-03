import React, { useState } from "react";
import { StyledSubscriptionComponent, SubscriptionContainer, StyledSubscriptionForm, StyledSubscriptionField, StyledButton, ButtonContainer, FormContainer, FormTitle } from "./styles";
import axios from "axios";
import {
    Button,
    Input,
    Select,
    Form,
    Radio,
  } from 'antd';
import { NameInput, InputBox, PhoneInput, EmailInput, MensageInput, CategorySelect} from "./styles";


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
        <FormContainer>
            <FormTitle>GOSTARIA DE ADQUIRIR UMA PEÇA? FALE CONOSCO!</FormTitle>
            <StyledSubscriptionComponent>         
                <SubscriptionContainer>
                    <SubscriptionForm />
                </SubscriptionContainer>
            </StyledSubscriptionComponent>
        </FormContainer>
    );
}


const SubscriptionForm: React.ElementType = () => {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [field, setField] = useState("");
    const [message, setMessage] = useState("");

    // const handleSubmit = async (data: any) => {
    //     console.log(data);

    //     try {
    //         const response = await axios.post('http://localhost:3001/email', data);
    //         console.log(response);
    //     } catch (error) {
    //         console.log('error occurred while making post request', error);
    //     }
    // }

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <StyledSubscriptionField>
            <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed} 
            >
                <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Por favor insira seu Nome!',
                      },
                    ]}
                >
                    <NameInput placeholder="Nome" />
                </Form.Item>
                <InputBox>
                    <Form.Item
                        name="email"
                        rules={[

                          {
                            required: true,
                            message: 'Por favor insira seu E-mail!',
                          },
                        ]}
                    >
                        <EmailInput placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: 'Por favor insira seu Telefone!',
                          },
                        ]}
                    >
                        <PhoneInput placeholder="Telefone" />
                    </Form.Item>
                </InputBox>
                <Form.Item
                    name="field"
                    rules={[
                      {
                        required: true,
                        message: 'Por favor selecione sua Categoria!',
                      },
                    ]}
                >
                    <Radio.Group>
                        <Radio value="a">Obras</Radio>
                        <Radio value="b">Souvenirs</Radio>
                        <Radio value="c">Vasos</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    name="message"
                    rules={[
                    {
                        required: true,
                        message: 'Por favor insira sua Mensagem!',
                    },
                    ]}
                >
                    <MensageInput placeholder="Deixe sua mensagem" />
                </Form.Item>
                <ButtonContainer>
                    <Form.Item>
                        <StyledButton>ENVIAR</StyledButton>
                    </Form.Item>
                </ButtonContainer>
            </Form>
        </StyledSubscriptionField>

    )
}

