export const toCapitalizeString = (str) => `${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`;
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getRandomId = () => `id-${Math.random().toString(32).substring(2, 10)}-0x-${Date.now().toString(16).substring(3, 11)}`;
