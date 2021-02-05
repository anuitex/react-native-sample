import { RequestChatModel } from "../request/requestChat.model";
import { RequestContactModel } from "../request/requestContact.model";

export  interface ResponseOwnerDataModel {
    name: string; 
    email: string; 
    gender: string; 
    id: string; 
    phone: string; 
    chats?: RequestChatModel[]; 
    contacts?: RequestContactModel[];
    age?: number;
}