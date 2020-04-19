import { Body, Controller, HttpStatus, Post, Response } from '@nestjs/common';

import { Message } from './../../models/message.interface';
import { MessageService } from './../../services/message/message.service';

@Controller('messages')
export class MessageController {

    constructor(private messageService: MessageService) { }

    @Post()
    async create(@Response() response, @Body() message: any): Promise<Message> {
        const created = await this.messageService.create(message);
        return response.status(HttpStatus.OK).json(created);
    }
}
