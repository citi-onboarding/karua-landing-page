import React, { useState } from "react";
import { StyledSubscriptionComponent, SubscriptionContainer, StyledSubscriptionForm, StyledSubscriptionField, StyledButton, ButtonContainer, FormContainer, FormTitle } from "./styles";
//import apiAxios from "../../services/api";
import axios from "axios";
import {
    Button,
    Input,
    Select,
    Form,
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

    const [firstName, setFirstName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [partnersNumber, setPartnersNumber] = useState("");
    const [segment, setSegment] = useState("");
    const [solutionDescribe, setSolutionDescribe] = useState("");
    const [site, setSite] = useState("");

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
                    name="nome"
                    dependencies={['nome']}
                    rules={[
                    { required: true, message: 'Por favor digite seu nom!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('email') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(
                            new Error(
                            'The two passwords that you entered do not match!'
                            )
                        );
                        }
                    })
                    ]}
                >
                    <NameInput placeholder="Nome" />
                </Form.Item>
                <InputBox>
                    <Form.Item
                        name="nome"
                        dependencies={['nome']}
                        rules={[
                        { required: true, message: 'Por favor digite seu nom!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('email') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                'The two passwords that you entered do not match!'
                                )
                            );
                            }
                        })
                        ]}
                    >
                        <EmailInput placeholder="E-mail" />
                    </Form.Item>
                    <Form.Item
                        name="nome"
                        dependencies={['nome']}
                        rules={[
                        { required: true, message: 'Por favor digite seu nom!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('email') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(
                                new Error(
                                'The two passwords that you entered do not match!'
                                )
                            );
                            }
                        })
                        ]}
                    >
                        <PhoneInput placeholder="Telefone" />
                    </Form.Item>
                </InputBox>
                <Form.Item
                    name="nome"
                    dependencies={['nome']}
                    rules={[
                    { required: true, message: 'Por favor digite seu nom!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('email') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(
                            new Error(
                            'The two passwords that you entered do not match!'
                            )
                        );
                        }
                    })
                    ]}
                >
                    <CategorySelect placeholder="Categoria">
                        <Option value="">Obras</Option>
                        <Option value="">Souvenirs</Option>
                        <Option value="">Vasos</Option>
                    </CategorySelect>
                </Form.Item>
                <Form.Item
                    name="nome"
                    dependencies={['nome']}
                    rules={[
                    { required: true, message: 'Por favor digite seu nom!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('email') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(
                            new Error(
                            'The two passwords that you entered do not match!'
                            )
                        );
                        }
                    })
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

