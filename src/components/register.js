import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, TextInput} from 'react-native';
import {connect, } from 'react-redux';
import NavigationBar from './NavigationBar';
import Constant from '../helper/constants';
import font from '../helper/fontsize';
import * as actions from '../actions'
import strings from '../helper/language';

const {height, width} = Dimensions.get('window');

class Register extends Component {
    static navigationOptions = {
        header:null,
    };

    onCreateSet = () => {
        const {email, password, repassword, coupon} = this.props;
        this.props.userCreates({email, password, repassword, coupon});
    };

    backPressed = () => {
        this.props.navigator.pop()
    };

    render() {

        return (
            <View style={styles.mainView}>
                <NavigationBar
                    leftButtonPressed = { this.backPressed }
                    leftButtonType = {Constant.navButtonType.back}
                />
                <View style={[styles.titleView,]}>
                    <Text style={[font.TITLE_FONT,styles.titleText]}>{strings.in}</Text>
                    <Text style={[font.XLARGE_FONT,styles.titleText]}>{strings.buddha}</Text>
                    <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.footsteps}</Text>
                </View>

                <View style={styles.contentView}>
                    <View>
                        <TextInput style = {[font.TEXTBOX_FONT,styles.input]}
                                   underlineColorAndroid = "transparent"
                                   placeholder = {strings.email}
                                   autoCorrect={false}
                                   autoCapitalize = "none"
                                   value={this.props.email}
                                   onChangeText={(text) => {this.props.userRegisterUpdate({ prop: 'email', value: text});}}
                        />


                        <TextInput style = {[font.TEXTBOX_FONT,styles.input]}
                                   underlineColorAndroid = "transparent"
                                   placeholder = {strings.password}
                                   secureTextEntry
                                   autoCorrect={false}
                                   autoCapitalize = "none"
                                   value={this.props.password}
                                   onChangeText={(text) => {this.props.userRegisterUpdate({ prop: 'password', value: text});}}
                        />

                        <TextInput style = {[font.TEXTBOX_FONT,styles.input]}
                                   underlineColorAndroid = "transparent"
                                   placeholder = {strings.confirmpassword}
                                   secureTextEntry
                                   autoCorrect={false}
                                   autoCapitalize = "none"
                                   value={this.props.repassword}
                                   onChangeText={(text) => {this.props.userRegisterUpdate({ prop: 'repassword', value: text});}}
                        />

                        <TextInput style = {[font.TEXTBOX_FONT,styles.input]}
                                   underlineColorAndroid = "transparent"
                                   placeholder = {strings.couponcode}
                                   autoCorrect={false}
                                   autoCapitalize = "none"
                                   value={this.props.coupon}
                                   onChangeText={(text) => {this.props.userRegisterUpdate({ prop: 'coupon', value: text});}}
                        />
                    </View>

                    <View style={{flex:1, justifyContent:'flex-end', marginBottom:20}}>
                        <TouchableHighlight style = {styles.submitButton}
                                            underlayColor='transparent' onPress={this.onCreateSet}>
                            <Text style = {[styles.submitButtonText, font.TEXTBOX_FONT]}>{strings.register}</Text>
                        </TouchableHighlight>
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
    },
    input: {
        width:width-100,
        margin: 10,
        height: 30,
        borderBottomColor: '#007AFF',
        borderBottomWidth: 1
    },

    submitButton: {
        height: 30,
        margin:10,
        borderColor:'#007AFF',
        borderWidth:1,
        justifyContent:'center',
        width:width-100,
        alignItems:'center'
    },

    submitButtonText:{
        color: 'black',
    }
});

mapStateToProps = state => {
    //console.log('sign up',state);
    const {email, password, repassword, coupon} = state.userRegisterForm;
    return {
        email, password, repassword, coupon
    }
};

export default connect(mapStateToProps, actions)(Register);