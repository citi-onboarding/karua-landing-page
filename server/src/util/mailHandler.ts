import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const MailServer = async (EmailConfig: {
  destinationUser: string,
  subjectText: string,
  htmlOption: string,
}) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: EmailConfig.subjectText,
    html: EmailConfig.htmlOption,
  }).then();
};

export default MailServer;