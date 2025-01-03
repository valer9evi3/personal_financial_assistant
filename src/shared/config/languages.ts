export const SUPPORTED_LANGUAGES = {
  en: {
    name: 'English',
    code: 'en-US',
    flag: '🇺🇸',
  },
  es: {
    name: 'Español',
    code: 'es-ES',
    flag: '🇪🇸',
  },
  fr: {
    name: 'Français',
    code: 'fr-FR',
    flag: '🇫🇷',
  },
  de: {
    name: 'Deutsch',
    code: 'de-DE',
    flag: '🇩🇪',
  },
} as const;

export type LanguageCode = keyof typeof SUPPORTED_LANGUAGES;