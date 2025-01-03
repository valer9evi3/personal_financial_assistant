import { SUPPORTED_CURRENCIES } from '../config/currencies';
import { SUPPORTED_LANGUAGES } from '../config/languages';
import type { CurrencyCode } from '../config/currencies';
import type { LanguageCode } from '../config/languages';

export function formatCurrency(
  amount: number,
  currency: CurrencyCode = 'USD',
  language: LanguageCode = 'en'
): string {
  return new Intl.NumberFormat(SUPPORTED_LANGUAGES[language].code, {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

export function formatDate(
  date: Date | string,
  language: LanguageCode = 'en'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString(SUPPORTED_LANGUAGES[language].code, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatNumber(
  number: number,
  language: LanguageCode = 'en'
): string {
  return new Intl.NumberFormat(SUPPORTED_LANGUAGES[language].code).format(number);
}