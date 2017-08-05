import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';
import languageReducer from './languageReducer';

export default combineReducers({
    userRegisterForm: registerReducer,
    userLoginForm: loginReducer,
    selectedLang: languageReducer
});