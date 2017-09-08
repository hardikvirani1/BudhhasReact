import { SELECT_LANGUAGE } from './types';
import {AsyncStorage} from 'react-native';
import strings from '../helper/language';
import Router from '../NavigationHelper/Router'
import { NavigationActions } from '@expo/ex-navigation';
import Store from '../reducers';

export const userSelectLang = (selected_lang, props) => {
    console.log('selected-lang:',selected_lang);
    return (dispatch) => {
        dispatch({
            type: SELECT_LANGUAGE,
            payload: selected_lang
        });
        AsyncStorage.setItem('selected_lang', selected_lang);
        strings.setLanguage(selected_lang);


        if(props.route.params.isFromSettingScreen === true) {
            let navigatorUID = Store.getState().navigation.currentNavigatorUID;
            Store.dispatch(NavigationActions.pop(navigatorUID));
        }

        else{
            let navigatorUID = Store.getState().navigation.currentNavigatorUID;
            Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute('secondscreen')));
        }
    };
};
