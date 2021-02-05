import moment from 'moment';

export const formatDate = (date: Date) => moment(date).format(`dddd HH:MM`);

export const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777216).toString(16);

    return '#000000'.slice(0, - color.length) + color;
}

export const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
  
    return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomBoolean = () => Boolean(getRandomInteger(0, 1));