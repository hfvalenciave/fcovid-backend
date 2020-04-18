import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
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
                    user: 'bernardo.pena.ramos@gmail.com',
                    pass: 'vvtrtbihjdwziugp'
                },
            },
            defaults: {
                from: '"No Reply" <bernardo.pena.ramos@gmail.com>'
            },
            preview: true,
            template: {
                dir: process.cwd() + '/template',
                adapter: new PugAdapter(),
                options: {
                    strict: true
                }
            }
        }),
        MongooseModule.forRoot('mongodb://localhost/games', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
    ],
    controllers: [
    ],
    providers: [
    ]
})
export class AppModule { }
