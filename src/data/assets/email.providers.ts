import * as nodemailer from 'nodemailer';
import { transporter } from 'nodemailer';

import { EmailTemplates } from './email.templates'


export class EmailSender {
    private transporter: transporter
    private templates: EmailTemplates

    constructor() {
        this.templates = new EmailTemplates()
        this.transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',                  // hostname
            service: 'outlook',                             // service name
            secureConnection: false,
            tls: {
                ciphers: 'SSLv3'                            // tls version
            },
            port: 587,                                      // port
            auth: {
                user: "coasthub@outlook.com.br",
                pass: "co@$thub2021"
            }
        })
    }

    public async sendEmail(reciverEmail: string, bussines: boolean) {

        const emailTemplate = bussines ? this.templates.emailBussinesUser : this.templates.emailClientUser 

        const info = await this.transporter.sendMail({
            from: '"CoastHub 🌊" <coasthub@outlook.com.br>',
            to: reciverEmail,
            subject: '🏖️ Seja bem vindo a CoastHub',
            text: 'Seja bem vindo a CoastHub',
            html: emailTemplate
        })
    }

}

export default new EmailSender()