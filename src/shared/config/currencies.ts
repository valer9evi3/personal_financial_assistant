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
  GBP: {
    name: 'British Pound',
    symbol: '£',
    code: 'GBP',
  },
  JPY: {
    name: 'Japanese Yen',
    symbol: '¥',
    code: 'JPY',
  },
} as const;

export type CurrencyCode = keyof typeof SUPPORTED_CURRENCIES;