import { Data } from './../../models/data.interface';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

import { Message } from '../../models/message.interface';

@Injectable()
export class MessageService {
    constructor(private readonly mailerService: MailerService) { }

    async create(message: Message): Promise<any> {
        this.mailerService
            .sendMail({
                to: 'j@hf.cx, fcovid@hf.cx, bernardo.pena.ramos@gmail.com',
                from: 'bernardo.pena.ramos@gmail.com',
                subject: message.messageType,
                text: this.parseText(message.data),
                html: this.parseHtml(message.data)
            }).then(value => {
                console.log('mensaje enviado', value);
            }).catch(error => {
                console.log('mensaje no enviado', error);
            });


        return true;
    }

    private parseText(data: Data) {
        let message = '';
        Object.keys(data).forEach(key => {
            message += `${key}: ${data[key]}\n`
        })
        return message;
    }

    private parseHtml(data: Data) {
        let message = '';
        Object.keys(data).forEach(key => {
            message += `${key}: <b>${data[key]}</b><br>`
        })
        return message;
    }
}
