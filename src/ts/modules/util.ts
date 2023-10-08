// * utilities methodes

export const toCapitalizeString = (str: string): string =>
  `${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`;


export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export const getRandomId: () => string = () =>
  `id-${Math.random().toString(32).substring(2, 10)}-0x-${Date.now().toString(16).substring(3, 11)}`;
  // `id_${Math.random().toString(32).substring(2, 10)}_0x${Date.now().toString(16).substring(3, 11)}`;

