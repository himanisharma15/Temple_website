import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { commonI18n } from './common.i18n';
const Context = createContext(null);
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');
  useEffect(() => { localStorage.setItem('language', language); document.documentElement.lang = language === 'od' ? 'or' : language; }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: (key) => commonI18n[language]?.[key] || commonI18n.en[key] || '[TRANSLATE]' }), [language]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export const useLanguage = () => useContext(Context);
