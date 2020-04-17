export interface Message extends Document {
    readonly _id: string;
    readonly fullname: string;
    readonly email: string;
    readonly iAmA: string;
    readonly interestedIn: string;
    readonly helpWith: string;
}