import React, {Component} from 'react';
import { View, Text, } from 'react-native';
import { Provider } from 'react-redux';
import reducer from './reducers';


import Router from './NavigationHelper/Router'

import {
    StackNavigation,
    NavigationProvider,NavigationStyles,
    NavigationContext
} from '@expo/ex-navigation';
import navigationContext from './NavigationHelper/customNavigatorContex'

export default class main extends Component {
    render(){
        return(
            <Provider store={reducer}>
                <NavigationProvider router={Router}  context={navigationContext}>
                    <StackNavigation initialRoute={Router.getRoute('firstscreen')}
                                     navigatorUID="mainNav"
                                     defaultRouteConfig={{
                                         navigationBar: {
                                             visible: false,
                                         },
                                         styles: {
                                             ...NavigationStyles.SlideHorizontal,
                                             gestures: null,
                                         }
                                     }}/>
                </NavigationProvider>
            </Provider>
        );
    }
}
