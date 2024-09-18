import { Injectable } from '@nestjs/common';
import emailjs, { EmailJSResponseStatus } from '@emailjs/nodejs';
import { EmailTemplateParams } from './email.interface';
import { MailerService } from '@nestjs-modules/mailer';
import { EventPayloads } from 'src/event-emitter/event-emitter.interface';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {
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

    @OnEvent('user.welcome')
    async sendGreetingsEmail(data: EventPayloads['user.welcome']) {
        const { email, name } = data;

        const subject = `Welcome to Company: ${name}`;

        await this.mailerService.sendMail({
            to: email,
            subject,
            template: './greetings',
            context: {
                name,
            },
        });
    }
}
