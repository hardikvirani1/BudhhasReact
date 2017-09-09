import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, Image, Dimensions, AsyncStorage} from 'react-native';
import {connect, } from 'react-redux';
import font  from '../helper/fontsize';
import strings from '../helper/language';
import NavigationBar from './NavigationBar';
const {height, width} = Dimensions.get('window');
import * as actions from '../actions'
import Constant from '../helper/constants';

class FirstScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    componentWillMount(){
        let lang = AsyncStorage.getItem('selected_lang');

        if(!lang){
            strings.setLanguage('en-US');
        } else {
            strings.setLanguage('en-US');
        }


    }

    backPressed = () => {
        this.props.navigator.pop()
    };

    menuPressed = () => {
        const { navigation } = this.props;
        const navigator = navigation.getNavigatorByUID('drawerNav');
        navigator.toggleDrawer()
    };


    onSelectLang = (lang) => {
        this.props.userSelectLang(lang, this.props);
    };

    render() {
        return (
            <View style={styles.mainView}>
                {
                    (this.props.route.params.isFromSettingScreen === true)&&
                    <NavigationBar
                        navTitle="Select Language"
                        leftButtonPressed = { this.backPressed }
                        leftButtonType = {Constant.navButtonType.back}
                    />
                }
                {
                    (this.props.route.params.isFromSettingScreen != true)&&
                    <View style={styles.titleView}>
                        <Text style={[font.TITLE_FONT,styles.titleText, {fontFamily:'Futura'}]}>{strings.in}</Text>
                        <Text style={[font.XLARGE_FONT,styles.titleText, {fontFamily:'Futura'}]}>{strings.buddha}</Text>
                        <Text style={[font.MEDIUM_FONT,styles.titleText, {fontFamily:'Futura'}]}>{strings.footsteps}</Text>
                    </View>
                }


                <View style={styles.languageView}>
                    <TouchableHighlight onPress={() => this.onSelectLang('en-US') }
                                        underlayColor='transparent' style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>English</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.onSelectLang('en') }
                                        underlayColor='transparent' style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>Español</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() => this.onSelectLang('it') }
                                        underlayColor='transparent' style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>français</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } underlayColor='transparent' style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>Pyccknn</Text>
                    </TouchableHighlight>

                    <TouchableHighlight onPress={() =>{} } underlayColor='transparent'  style={styles.btnStyle}>
                        <Text style={[font.MEDIUM_FONT,styles.titleText]}>English</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection:'column',
        flex:1,
    },
    titleView:{
        justifyContent:'center',
        width,
        height: height/2.5,
    },
    languageView: {
        alignItems:'center',
        width,
        flexDirection:'column',
    },
    titleText: {
        alignSelf:'center',
        margin:2,
    },
    btnStyle: {
        borderBottomWidth:1,
        borderBottomColor: 'rgba(116,196,248,1)',
        padding:7,
        width: width/2,
    }
});

mapStateToProps = state => {
    const {selected_lang} = state.selectedLang;
    return {
        selected_lang
    }
};

export default connect(mapStateToProps, actions)(FirstScreen);