'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { SUPPORTED_CURRENCIES, type CurrencyCode } from '../config/currencies';
import { SUPPORTED_LANGUAGES, type LanguageCode } from '../config/languages';

interface SettingsContextType {
  language: LanguageCode;
  currency: CurrencyCode;
  setLanguage: (language: LanguageCode) => void;
  setCurrency: (currency: CurrencyCode) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    const savedCurrency = localStorage.getItem('currency') as CurrencyCode;

    if (savedLanguage && savedLanguage in SUPPORTED_LANGUAGES) {
      setLanguage(savedLanguage);
    }
    if (savedCurrency && savedCurrency in SUPPORTED_CURRENCIES) {
      setCurrency(savedCurrency);
    }
  }, []);

  const handleSetLanguage = (newLanguage: LanguageCode) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const handleSetCurrency = (newCurrency: CurrencyCode) => {
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  return (
    <SettingsContext.Provider
      value={{
        language,
        currency,
        setLanguage: handleSetLanguage,
        setCurrency: handleSetCurrency,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
