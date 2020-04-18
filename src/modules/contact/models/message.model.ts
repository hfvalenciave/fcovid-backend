import { Data } from './data.interface';

export interface Message {
    readonly messageType: string;
    readonly data: Data;
}