import { SELECT_LANGUAGE } from './types';
import {AsyncStorage} from 'react-native';
import strings from '../helper/language';

export const userSelectLang = (selected_lang, navigation) => {
    console.log('selected-lang:',selected_lang);
    return (dispatch) => {
        dispatch({
            type: SELECT_LANGUAGE,
            payload: selected_lang
        });
        AsyncStorage.setItem('selected_lang', selected_lang);
        strings.setLanguage(selected_lang);
        navigation.navigate('secondscreen');
    };
};
