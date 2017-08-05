import { SELECT_LANGUAGE } from './types';

export const userSelectLang = (selected_lang, navigation) => {
    console.log('selected-lang:',selected_lang);
    return (dispatch) => {
        dispatch({
            type: SELECT_LANGUAGE,
            payload: selected_lang
        });
        navigation.navigate('secondscreen');
    };
};
