import { Injectable } from '@nestjs/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';
import { EmailTemplateParams } from './email.interface';

@Injectable()
export class EmailService {
    constructor() {
        emailjs.init({
            publicKey: process.env.EMAIL_JS_PUBLIC_KEY,
            privateKey: process.env.EMAIL_JS_PRIVATE_KEY,
        });
    }

    async sendEmail(params: EmailTemplateParams) {
        try {
            await emailjs.send(process.env.EMAIL_JS_SERVICE_KEY, process.env.EMAIL_JS_TEMPLATE_ID, params);
            return { status: true, message: 'Email sent successfully' };
        }
        catch (err) {
            if (err instanceof EmailJSResponseStatus) {
                return false;
            }
            return false;
        }
    }
}
