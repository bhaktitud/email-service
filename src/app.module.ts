import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserModule } from './user/user.module';
import { TypedEventEmitterModule } from './event-emitter/typed-event-emitter.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        EmailModule,
        EventEmitterModule.forRoot(),
        UserModule,
        TypedEventEmitterModule
    ],
    controllers: [AppController, EmailController],
    providers: [AppService, EmailService],
})
export class AppModule { }
