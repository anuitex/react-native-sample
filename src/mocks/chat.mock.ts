import { getRandomBoolean } from "../helpers/utils";

export const chats = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date(),
        user: {
            name: "Jina",
            id: 1,
            avatar: 'http://placeimg.com/640/480/people',
            isOnline: getRandomBoolean(),
        }
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date(),
        user: {
            name: "Hanky",
            id: 2,
            avatar: 'http://placeimg.com/640/480/people',
            isOnline: getRandomBoolean(),
        }
    },
    {
        id: 3,
        text: "TEST TEST TEST TEST.",
        createdAt: new Date(),
        user: {
            name: "Jim",
            id: 3,
            avatar: 'http://placeimg.com/640/480/people',
            isOnline: getRandomBoolean(),
        }
    },
    {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date(),
        user: {
            name: "Jack",
            id: 4,
            avatar: 'http://placeimg.com/640/480/people',
            isOnline: getRandomBoolean(),
        }
    },
    {
        id: 5,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        createdAt: new Date(),
        user: {
            name: "Morgan",
            id: 5,
            avatar: 'http://placeimg.com/640/480/people',
            isOnline: getRandomBoolean(),
        }
    },
    
]