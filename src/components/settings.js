import React from 'react';
import { Image, Text, View, StyleSheet,TouchableHighlight, TouchableOpacity,TextInput,ScrollView ,
    FlatList,Dimensions,AsyncStorage, } from 'react-native';
import cs from '../helper/customStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {  Content,  Grid, Row, List, ListItem, } from 'native-base';
import {Icon} from 'react-native-elements';
import VideoPlayer from 'react-native-video-player';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Constant from '../helper/constants'
import {NavigationStyles} from '@expo/ex-navigation';
import NavigationBar from './NavigationBar'
import {withNavigation, createFocusAwareComponent} from '@expo/ex-navigation/src/ExNavigationComponents'
import strings from '../helper/language';
import font  from '../helper/fontsize';
import Store from '../reducers';

type Props = {
    isFocused: boolean,
};

@createFocusAwareComponent
@withNavigation

class Settings extends React.Component {

    constructor(props) {
        super(props);
    }


    backPressed = () => {
        this.props.navigator.pop()
    };

    menuPressed = () => {
        const { navigation } = this.props;
        const navigator = navigation.getNavigatorByUID('drawerNav');
        navigator.toggleDrawer()
    };

    render() {
        return (
            <View style={[cs.flx1]}>
                <NavigationBar
                    navTitle={strings.settings}
                    leftButtonPressed = { this.menuPressed }
                    leftButtonType = {Constant.navButtonType.menu}
                />

                <View style={styles.languageView}>
                    <TouchableHighlight onPress={() => {}}
                                        underlayColor='transparent' style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.cleardata}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.props.navigator.push('firstscreen',{isFromSettingScreen: true}) }
                                        underlayColor='transparent' style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.changelang}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.onSelectLang('it') }
                                        underlayColor='transparent' style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.changepass}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } underlayColor='transparent' style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.terms}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{this.props.navigator.push('secondscreen')} } underlayColor='transparent'  style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.signout}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{this.props.navigator.push('about')}}
                                        underlayColor='transparent'  style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.about}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    languageView: {
        width:Constant.screenWidth,
        padding:10
    },
    titleText: {
    },
    btnStyle: {
        borderBottomWidth:1,
        borderBottomColor: 'rgba(185,186,187,1)',
        padding:10,
        //width: Constant.screenWidth,
    }
});

export default Settings;