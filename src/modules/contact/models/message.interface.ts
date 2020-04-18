import { Document } from 'mongoose';

import { Data } from './data.interface';

export class Message extends Document {
    readonly messageType: string;
    readonly data: Data;
}