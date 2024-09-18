import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { join } from 'path';


@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: '<host>',
                port: Number('<port>'),
                secure: false,
                auth: {
                    user: '<username>',
                    pass: '<password>',
                },
            },
            defaults: {
                from: '"From Name" <from@example.com>',
            },
            template: {
                dir: join(__dirname, 'templates'),
                adapter: new EjsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
    ],
    controllers: [EmailController],
    providers: [EmailService],
})
export class EmailModule { }
