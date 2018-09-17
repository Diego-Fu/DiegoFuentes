import { SWITCH_LANGUAGE } from '../actions/types';
import lang from '../translations/translations.js';

const initialState = {
  language: 'es',
  languageData: lang
};

const rootReducer = (state = initialState, action) => {
  const language = action.payload === 'en' ? 'en' : 'es'

  switch (action.type) {
    case SWITCH_LANGUAGE:
    return { ...state, language };
    default:
      return state;
  }
};
export default rootReducer;