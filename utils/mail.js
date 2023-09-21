// mail.js
import mailgun from 'mailgun-js';
import { config } from 'dotenv';

config();

const DOMAIN = process.env.MAILGUN_DOMAIN;
const API = process.env.MAILGUN_API_KEY;
const mg = mailgun({ apiKey: API, domain: DOMAIN });

function sendEmail(to, subject, text) {
    const data = {
        from: 'Order Taker <no-reply@order-taker.dgalanopoulos.eu>', // replace with your app's email
        to: to,
        subject: subject,
        text: text
    };

    mg.messages().send(data, (error, body) => {
        console.log(body);
    });
}

export default sendEmail;