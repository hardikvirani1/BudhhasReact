import React, {Component} from 'react';
import {StyleSheet,Alert, View, Text, TouchableHighlight, Image, Dimensions, TextInput, Platform} from 'react-native';
import {connect, } from 'react-redux';
import font from '../helper/fontsize';
import * as actions from '../actions'
import NavigationBar from './NavigationBar';
import Constant from '../helper/constants';

const {height, width} = Dimensions.get('window');
import strings from '../helper/language';

class Signin extends Component {
    static navigationOptions = {
        header:null

    };

    onLoginSet = () => {
        const {email, password} = this.props;
        if (email) {

            if (!this.validateEmail(this.props.email.trim())) {
                this.showAlertMsg('Enter valid Email Address');

            }
            else{
                this.props.userLogin({email, password});
            }
        }else {
            this.showAlertMsg('Enter Email Address.');
        }
    };

    backPressed = () => {
        this.props.navigator.pop()
    };

    focusNextField = (nextField) => {
        this.refs[nextField].focus();
    };
    showAlertMsg = (alertText)  => {
        Alert.alert("Buddha's App",
            alertText,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    };
    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    onSubmitPressed = () => {

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
                                   ref="email"
                                   returnKeyType={"next"}
                                   onSubmitEditing={() => this.focusNextField('password')}
                                   underlineColorAndroid = "transparent"
                                   placeholder = {strings.email}
                                   autoCapitalize = "none"
                                   autoCorrect={false}
                                   value={this.props.email}
                                   onChangeText={(text) => {this.props.userLoginUpdate({ prop: 'email', value: text});}}
                        />

                        <TextInput style = {[font.TEXTBOX_FONT,styles.input]}
                                   underlineColorAndroid = "transparent"
                                   ref="password"
                                   returnKeyType={"done"}
                                   placeholder = {strings.password}
                                   secureTextEntry
                                   autoCorrect={false}
                                   autoCapitalize = "none"
                                   value={this.props.password}
                                   onChangeText={(text) => {this.props.userLoginUpdate({ prop: 'password', value: text});}}
                        />
                    </View>

                    <View style={{flex:1, justifyContent:'flex-end', marginBottom:30}}>
                        <TouchableHighlight style = {styles.submitButton}
                                            underlayColor='transparent' onPress={this.onLoginSet}>
                            <Text style = {[styles.submitButtonText, font.TEXTBOX_FONT]}>{strings.signin}</Text>
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
        marginTop:-50,
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
        height: (Platform.OS === 'ios') ? 30 : 40,
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
        color: '#007AFF',
    }
});

mapStateToProps = state => {
    const {email, password} = state.userLoginForm;
    return {
        email, password
    }
};

export default connect(mapStateToProps, actions)(Signin);