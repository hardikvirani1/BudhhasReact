import { USER_LOGIN_UPDATE, USER_LOGIN } from './types';
import Router from '../NavigationHelper/Router'
import { NavigationActions } from '@expo/ex-navigation';
import Store from '../reducers';

export const userLoginUpdate = ({ prop, value }) => {
    return {
        type: USER_LOGIN_UPDATE,
        payload: { prop, value }
    }
};

export const userLogin = ({email, password }) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN });
        let navigatorUID = Store.getState().navigation.currentNavigatorUID;
        Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute('mainscreen')));
    };
};