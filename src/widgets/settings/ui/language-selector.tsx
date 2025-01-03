'use client';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SUPPORTED_LANGUAGES, type LanguageCode } from '@/shared/config/languages';
import { useSettings } from '@/shared/hooks/use-settings';

export function LanguageSelector() {
  const { language, setLanguage } = useSettings();

  return (
    <FormControl sx={{ minWidth: 180 }}>
      <InputLabel>Language</InputLabel>
      <Select
        value={language}
        label="Language"
        onChange={(e) => setLanguage(e.target.value as LanguageCode)}
      >
        {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
          <MenuItem key={code} value={code}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </span>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}