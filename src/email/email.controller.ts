import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    constructor(private readonly emailService: EmailService) { }

    @Get()
    sendEmail() {
        return this.emailService.sendEmail({
            to_name: 'bhaktixdev',
            from_name: 'Bhakti',
            message: 'hi thereeee',
            to_email: 'bhaktixdev@gmail.com',
        });
    }
}
