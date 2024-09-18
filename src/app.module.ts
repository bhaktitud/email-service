import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [ ConfigModule.forRoot(), EmailModule ],
    controllers: [ AppController, EmailController ],
    providers: [ AppService, EmailService ],
})
export class AppModule { }
