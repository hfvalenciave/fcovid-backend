import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './modules/contact/contact.module';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/games', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }),
        ContactModule
    ],
    controllers: [
    ],
    providers: [
    ]
})
export class AppModule { }
