import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
    NavigationStyles,
} from '@expo/ex-navigation';
import React from 'react';
import { Image, Text, View, StyleSheet,TouchableHighlight,TextInput,ScrollView ,FlatList,Dimensions,BackHandler} from 'react-native';

import cs from '../helper/customStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Container, Content, Grid, Col, Row, List, ListItem, Input } from 'native-base';
import Router from '../NavigationHelper/Router';
import Constant from '../helper/constants';
import csFont from '../helper/fontsize';
import strings from '../helper/language';
const width=Dimensions.get('window').width;
const iconSize=(width*20)/326;

export default class DrawerNavigationLayout extends React.Component {

    constructor(props){
        super(props);
    }

    handleBackPress1 = () => {
        BackHandler.exitApp();
        return true
    };

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress1', this.handleBackPress1);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress1', this.handleBackPress1);
    }

    static route = {
        navigationBar: {
            visible: false,
        }
    };

    closePressed = () => {
        const { navigation } = this.props;
        const navigator = navigation.getNavigator('mainDrawer');
        navigator.toggleDrawer()
    };

    render() {
        return (
            <DrawerNavigation
                id='mainDrawer'
                navigatorUID="drawerNav"
                initialItem='home'
                drawerWidth={Constant.screenWidth}
                renderHeader={this._renderHeader}
            >
                <DrawerNavigationItem
                    id='home'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle(strings.home, isSelected)}
                >
                    <StackNavigation
                        id='home'
                        initialRoute={Router.getRoute('homescreen')}
                        defaultRouteConfig={{
                                         navigationBar: {
                                             visible: false,
                                         },
            styles: {
              ...NavigationStyles.SlideHorizontal,
            }

                                     }}/>
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id='allsites'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle(strings.site, isSelected)}
                >
                    <StackNavigation
                        id='allsites'
                        initialRoute={Router.getRoute('sites')}
                        defaultRouteConfig={{
                            navigationBar: {
                                visible: false,
                            },
                            styles: {
                                ...NavigationStyles.SlideHorizontal,
                            }

                        }}/>
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id='footsteps'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle(strings.Footsteps, isSelected)}
                >
                    <StackNavigation
                        id='footsteps'
                        initialRoute={Router.getRoute('footsteps')}
                        defaultRouteConfig={{
                            navigationBar: {
                                visible: false,
                            },
                            styles: {
                                ...NavigationStyles.SlideHorizontal,
                            }

                        }}/>
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id='store'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle(strings.store, isSelected)}
                >
                    <StackNavigation
                        id='store'
                        initialRoute={Router.getRoute('stores')}
                        defaultRouteConfig={{
                            navigationBar: {
                                visible: false,
                            },
                            styles: {
                                ...NavigationStyles.SlideHorizontal,
                            }

                        }}/>
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id='settings'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle(strings.settings, isSelected)}
                >
                    <StackNavigation
                        id='settings'
                        initialRoute={Router.getRoute('settings')}
                        defaultRouteConfig={{
                            navigationBar: {
                                visible: false,
                            },
                            styles: {
                                ...NavigationStyles.SlideHorizontal,
                            }

                        }}/>
                </DrawerNavigationItem>

            </DrawerNavigation>
        );
    }

 _renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text style={[cs.jcCenter,{padding:15}]}
                      onPress={() => this.closePressed()}>
                    <FontAwesome name='close' size={27} style={[cs.transparentBackground, cs.colorA8,cs.selfCenter]}/>
                </Text>
            </View>
        );
    };



    getIcon = (title) =>{
        debugger
        if (title === strings.home){
            return <FontAwesome name='home' size={iconSize} style={[cs.transparentBackground, cs.colorA8]} />
        }
        if (title === strings.site){
            return <FontAwesome name='paper-plane' size={iconSize-5} style={[cs.transparentBackground, cs.colorA8]} />
        }
        if (title === strings.Footsteps){
            return <FontAwesome name='home' size={iconSize} style={[cs.transparentBackground, cs.colorA8]} />
        }
        if (title === strings.store){
            return <FontAwesome name='shopping-cart' size={iconSize} style={[cs.transparentBackground, cs.colorA8]} />
        }
        if (title === strings.settings){
            return <FontAwesome name='cog' size={iconSize} style={[cs.transparentBackground, cs.colorA8]} />
        }
    };

    _renderTitle(text: string, isSelected: boolean) {
        return (
            <Row style={{paddingLeft: 20,paddingRight: 0,paddingTop: 0,paddingBottom: 0,marginLeft: 10}}>
                <Col size={1} style={[cs.jcCenter]}>
                    <Text style={[cs.jcCenter]}>
                        {this.getIcon(text)}
                    </Text>
                </Col>
                <Col size={4} style={[cs.pl1,cs.jcCenter]}>
                    <Text style={[cs.colorA8, csFont.MEDIUM_FONT]}>{text}</Text>
                </Col>
            </Row>
        );
    };
}


const styles = StyleSheet.create({
    header: {
        height: 45,
        alignItems: 'flex-end',
        backgroundColor: '#fff'
    },

    selectedItemStyle: {
    },

    titleText: {
        fontWeight: 'bold'
    },

    selectedTitleText: {
        color: 'white'
    }
});