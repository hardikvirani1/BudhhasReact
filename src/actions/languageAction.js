import { SELECT_LANGUAGE } from './types';
import {AsyncStorage} from 'react-native';
import strings from '../helper/language';
import Router from '../NavigationHelper/Router'
import { NavigationActions } from '@expo/ex-navigation';
import Store from '../reducers';

export const userSelectLang = (selected_lang) => {
    console.log('selected-lang:',selected_lang);
    return (dispatch) => {
        dispatch({
            type: SELECT_LANGUAGE,
            payload: selected_lang
        });
        AsyncStorage.setItem('selected_lang', selected_lang);
        strings.setLanguage(selected_lang);

        let navigatorUID = Store.getState().navigation.currentNavigatorUID;
        Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute('secondscreen')));
    };
};
