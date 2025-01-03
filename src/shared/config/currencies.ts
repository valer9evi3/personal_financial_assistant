export const SUPPORTED_CURRENCIES = {
  USD: {
    name: 'US Dollar',
    symbol: '$',
    code: 'USD',
  },
  EUR: {
    name: 'Euro',
    symbol: '€',
    code: 'EUR',
  },
  RUB: {
    name: 'Русский рубль',
    symbol: '₽',
    code: 'RUB',
  },
} as const;

export type CurrencyCode = keyof typeof SUPPORTED_CURRENCIES;
