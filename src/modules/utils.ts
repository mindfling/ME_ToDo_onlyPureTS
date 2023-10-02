// todo набор утилит общих методов

// * заглавный первый символ
export const toCapitalizeString = (s: string): string => 
  s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();



// * вывести случайное число от min до max
export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



// * get Random digits string with substring
export const getRandomId = () => 
  `i32${Math.random().toString(32).substring(2, 12)}_0x${Date.now().toString(16)}`;



// * transliterate name of user for hash storage key
export const trans = (word: string) => {
  // словарь транслитераций упрощенный
  const lib: {
    [s:string]: string
  } = {
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'э': 'e',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'ы': 'i',
    'й': 'j',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'c',
    'ч': '4',
    'ш': 'sh',
    'щ': 'w',
    'ъ': '',
    'ь': '',
    'ю': 'u',
    'я': 'a',
    ',': '',
    '-': '_',
    '+': '',
    '*': '',
    ' ': '_',
    '\'': '',
    '"': '',
    '\\': '',
    '`': '',
    '/': '',
    '': '',
  };
  // все символы к ниждему регистру
  word = word.toLowerCase();
  // переводим все символы в транслит по словарю
  const result = word.split('').map(ch => {
    return lib[ch] || (lib[ch] === '' ? lib[ch] : ch);
  }).join('');
  return result;
};




