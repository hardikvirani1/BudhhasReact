import { USER_LOGIN_UPDATE, USER_LOGIN } from './types';

export const userLoginUpdate = ({ prop, value }) => {
    return {
        type: USER_LOGIN_UPDATE,
        payload: { prop, value }
    }
};

export const userLogin = ({email, password }) => {
    return (dispatch) => {
        dispatch({ type: USER_LOGIN });
        //Actions.employeeLists({type: 'reset'})
    };
};