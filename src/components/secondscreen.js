import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, Image, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');
import font  from '../helper/fontsize';
import strings from '../helper/language';
import Router from '../NavigationHelper/Router'
import { NavigationActions } from '@expo/ex-navigation';


class SecondScreen extends Component {

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.titleView}>
                    <Text style={[font.TITLE_FONT,styles.titleText]}>{strings.in}</Text>
                    <Text style={[font.XLARGE_FONT,styles.titleText]}>{strings.buddha}</Text>
                    <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.footsteps}</Text>
                </View>

                <View style={styles.contentView}>
                    <View>
                        <Image source={require('../../images/buddha.jpeg')}
                               style={{height: height/2.5, width:width-40}} />
                    </View>

                    <View style={{flex:1,justifyContent:'flex-end', }}>
                        <View style={{flexDirection:'row',marginBottom:20, }}>
                            <TouchableHighlight style={[styles.btnStyle, {borderRightWidth:1, borderRightColor:'gray'}]}
                                                underlayColor='transparent' onPress={() => {this.props.navigator.push('register')}}>
                                <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.register}</Text>
                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.btnStyle, {}]} underlayColor='transparent'
                                                onPress={() => {this.props.navigator.push('signin')}}>
                                <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.signin}</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
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
    contentView: {
        flex:1,
        alignItems:'center',
        width,
        flexDirection:'column',
    },
    titleText: {
        alignSelf:'center',
        margin:2,
    },
    btnStyle: {
        width: width/2,
        alignItems:'center',
        padding:10
    }
});

export default SecondScreen;