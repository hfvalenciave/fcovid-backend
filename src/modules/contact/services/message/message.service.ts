import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MessageService {
    constructor(@InjectModel('Messages') private readonly messageModel: Model<any>) {}

    async findAll(): Promise<any[]> {
        const messages = await this.messageModel.find().exec();
        return messages;
    }

    async findById(idMessage): Promise<any> {
        const message = await this.messageModel.findById(idMessage).exec();
        return message;
    }

    async create(message): Promise<any> {
        const createdMessage = new this.messageModel(message);
        const created = await createdMessage.save();
        return created;
    }
}
