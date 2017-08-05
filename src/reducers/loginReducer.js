import {USER_LOGIN, USER_LOGIN_UPDATE} from '../actions/types';

const INITIAL_STATE = { email:'', password:''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGIN_UPDATE :
            return { ...state, [action.payload.prop] : action.payload.value };

        case USER_LOGIN :
            return { ...state, INITIAL_STATE };

        default :
            return state;
    }
}
