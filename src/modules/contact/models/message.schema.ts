import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    iAmA: String,
    interestedIn: String,
    helpWith: String
});