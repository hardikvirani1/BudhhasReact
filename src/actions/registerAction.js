import { USER_REGISTER_UPDATE, USER_CREATE } from './types';
import Router from '../NavigationHelper/Router'
import { NavigationActions } from '@expo/ex-navigation';
import Store from '../reducers';

export const userRegisterUpdate = ({ prop, value }) => {
    return {
        type: USER_REGISTER_UPDATE,
        payload: { prop, value }
    }
};

export const userCreates = ({email, password, repassword, coupon }) => {
    return (dispatch) => {
        dispatch({ type: USER_CREATE });
        let navigatorUID = Store.getState().navigation.currentNavigatorUID;
        Store.dispatch(NavigationActions.push(navigatorUID, Router.getRoute('mainscreen')));
    };
};


export const fetchLatestUpdates = () => (dispatch) => {
    return axios.get('')
        .then((response) => {
            dispatch(showLoadingIndicator(false));
            return dispatch({
                type: 'UPDATES_LATEST_DATA',
                payload: response.data,
            });
        })
        .catch((e) => {
            dispatch(showLoadingIndicator(false));
            console.log('catch error', e);
            return Promise.reject()
        });
};