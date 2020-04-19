import { Module } from '@nestjs/common';
import { MailerModule, PugAdapter } from '@nestjs-modules/mailer';

import { ContactModule } from './modules/contact/contact.module';

@Module({
    imports: [
        ContactModule,
        MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'fcovid@hf.cx',
                    pass: 'xdksxdexllqbrccu'
                },
            },
            defaults: {
                from: '"No Reply" <fcovid@hf.cx>'
            },
            preview: false,
            template: {
                dir: process.cwd() + '/template',
                adapter: new PugAdapter(),
                options: {
                    strict: true
                }
            }
        })
    ],
    controllers: [
    ],
    providers: [
    ]
})
export class AppModule { }
