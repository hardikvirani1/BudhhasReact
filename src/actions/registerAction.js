import { USER_REGISTER_UPDATE, USER_CREATE } from './types';

export const userRegisterUpdate = ({ prop, value }) => {
    return {
        type: USER_REGISTER_UPDATE,
        payload: { prop, value }
    }
};

export const userCreates = ({email, password, repassword, coupon }) => {
    return (dispatch) => {
        dispatch({ type: USER_CREATE });
        //Actions.employeeLists({type: 'reset'})
    };
};