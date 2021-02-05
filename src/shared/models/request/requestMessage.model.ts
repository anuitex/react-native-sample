export interface RequestMessageModel {
    id: number;
    text: string;
    createdAt: Date;
    user: {
        id: number;
        name: string;
        avatar: string;
        isOnline: boolean;
    }
}