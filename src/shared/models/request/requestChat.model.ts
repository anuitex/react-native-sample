import { RequestMessageModel } from "./requestMessage.model";

export interface RequestChatModel {
    chatId?: string; 
    chatTitle: string;
    usersMessages: RequestMessageModel[];
}