import React, {Component} from 'react';
import { View, Text, } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {StackNavigator} from 'react-navigation';
import reducer from './reducers';
import FirstScreen from './components/firstscreen';
import SecondScreen from './components/secondscreen';
import Register from './components/register';
import Signin from "./components/signin";

export default class main extends Component {
    render(){
        return(
            <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
                <StackNavBar/>
            </Provider>
        );
    }
}

const StackNavBar = StackNavigator({
    firstscreen: {screen: FirstScreen},
    secondscreen: {screen: SecondScreen},
    register: {screen: Register},
    signin: {screen: Signin},
});