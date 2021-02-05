interface MessagesUserModel {
    _id: number | string;
    name: string;
    avatar: string;
}

export interface ResponseMessagesModel {
    _id: number | string;
    text: string;
    createdAt: number;
    user: MessagesUserModel;
}