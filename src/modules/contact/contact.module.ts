import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { MessageSchema } from './models/message.schema';
import { MessageService } from './services/message/message.service';
import { MessageController } from './controllers/message/message.controller';

const modelDefinitions = [
    { name: 'Messages', schema: MessageSchema }
];

@Module({
    imports: [
        MongooseModule.forFeature(modelDefinitions)
    ],
    providers: [MessageService],
    controllers: [MessageController]
})
export class ContactModule { }
