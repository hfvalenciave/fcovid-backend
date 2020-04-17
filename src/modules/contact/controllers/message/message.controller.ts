import { Controller, Get, Response, HttpStatus, Param, Post, Body } from '@nestjs/common';

import { Message } from './../../models/message.interface';
import { MessageService } from './../../services/message/message.service';
import { response } from 'express';

@Controller('message')
export class MessageController {

    constructor(private messageService: MessageService) { }

    @Get()
    async findAll(@Response() response): Promise<Message> {
        const messages = await this.messageService.findAll();
        return response.status(HttpStatus.OK).json(messages);
    }

    @Get(':idMessage')
    async findById(@Response() response, @Param() params): Promise<Message> {
        const message = await this.messageService.findById(params.id);
        return response.status(HttpStatus.OK).json(message);
    }

    @Post()
    async create(@Response() response, @Body() message): Promise<Message> {
        const created = await this.messageService.create(message);
        return response.status(HttpStatus.OK).json(created);
    }
}
