import { Data } from './../../models/data.interface';
import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Message } from '../../models/message.interface';

@Injectable()
export class MessageService {
    constructor(@InjectModel('Messages') private readonly messageModel: Model<any>,
        private readonly mailerService: MailerService) {}

    async findAll(): Promise<any[]> {
        const messages = await this.messageModel.find().exec();
        return messages;
    }

    async findById(idMessage): Promise<any> {
        const message = await this.messageModel.findById(idMessage).exec();
        return message;
    }

    async create(message: Message): Promise<any> {
        const createdMessage = new this.messageModel(message);
        const created = await createdMessage.save();

        this.mailerService
            .sendMail({
                to: 'ceaf.21@gmail.com, bernardo.pena.ramos@gmail.com',
                from: 'bernardo.pena.ramos@gmail.com',
                subject: message.messageType,
                text: this.parseText(message.data),
                html: this.parseHtml(message.data)
            }).then(value => {
                console.log('mensaje enviado', value);
            }).catch(error => {
                console.log('mensaje no enviado', error);
            });


        return created;
    }

    private parseText(data: Data) {
        return `
            profession: ${data.profession}\n
            comments: ${data.comments}\n
            fullname: ${data.fullname}\n
            email: ${data.email}\n
            phone: ${data.phone}\n
            timezone: ${data.timeZone}
        `;
    }

    private parseHtml(data: Data) {
        return `
            profession: <b>${data.profession}</b><br>
            comments: <b>${data.comments}</b><br>
            fullname: <b>${data.fullname}</b><br>
            email: <b>${data.email}</b><br>
            phone: <b>${data.phone}</b><br>
            timezone: <b>${data.timeZone}</b>
        `;
    }
}
