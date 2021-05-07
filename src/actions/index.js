import { SWITCH_LANGUAGE } from './types';

export const switchLanguage = (language) => ({
  type: SWITCH_LANGUAGE,
  payload: language
})