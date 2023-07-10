import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { MailServer } from "src/services/MailServer";

dotenv.config();

const SendMail = async (request: Request, response: Response) => {
  try {
    const {
      name, email, phone, message, field
    } = request.body;

    await MailServer({
      destinationUser: process.env.EMAIL_WILL_RECEIVE,
      subjectText: 'Um futuro comprador entrou em contato',
      htmlOption: `<p>
        Um futuro comprador entrou em contato. Esse futuro comprador tem o nome ${name} e apresenta o email ${email} e o telefone ${phone} na categoria ${field}. Esse futuro comprador deixou a seguinte mensagem: ${message}
      </p>`,
    });

    return response.status(200).send({
      answer: 'Enviado.', 
    });
  } catch (error) {
    return response.status(500).send({
      answer: 'Algo deu errado.',
    });
  }
};

export default SendMail;