import { SWITCH_LANGUAGE } from '../actions/types';
import lang from '../translations/translations.js';


let langSelected = 'es';

if (window.location.pathname.replace(/^\/([^/]*).*$/, '$1') === 'en'){
  langSelected = 'en'
}

const initialState = {
  language: langSelected,
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