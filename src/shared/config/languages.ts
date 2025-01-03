export const SUPPORTED_LANGUAGES = {
  en: {
    name: 'English',
    code: 'en-US',
    flag: '🇺🇸',
  },
  ru: {
    name: 'Russian',
    code: 'ru-RU',
    flag: 'ru',
  },
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;
