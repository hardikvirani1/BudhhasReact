import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, TextInput} from 'react-native';
import {connect, } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import font from '../helper/fontsize';
import * as actions from '../actions'
const {height, width} = Dimensions.get('window');
import strings from '../helper/language';

const backAction = NavigationActions.back({
    key: null
});

class Signin extends Component {
    static navigationOptions = {
        header:null

    };

    onLoginSet = () => {
        const {email, password} = this.props;
        this.props.userLogin({email, password});
    };

    btnBack = () => {
        this.props.navigation.dispatch(backAction)
    };

    render() {
        return (
            <View style={styles.mainView}>
                <View style={[styles.titleView,]}>
                    <View style={{marginLeft:12,marginTop:-35}}>
                        <TouchableHighlight onPress={this.btnBack} style={{width:50, height:50}}>
                            <Image source={require('../../images/left-arrow.png')} style={{width:25, height:25}} />
                        </TouchableHighlight>
                    </View>
                    <Text style={[font.TITLE_FONT,styles.titleText]}>{strings.in}</Text>
                    <Text style={[font.XLARGE_FONT,styles.titleText]}>{strings.buddha}</Text>
                    <Text style={[font.MEDIUM_FONT,styles.titleText]}>{strings.footsteps}</Text>
                </View>

                <View style={styles.contentView}>
                    <View>
                        <TextInput style = {[font.TEXTBOX_FONT,styles.input]}
                                   underlineColorAndroid = "transparent"
                                   placeholder = {strings.email}
                                   autoCapitalize = "none"
                                   autoCorrect={false}
                                   value={this.props.email}
                                   onChangeText={(text) => {this.props.userLoginUpdate({ prop: 'email', value: text});}}
                        />

                        <TextInput style = {[font.TEXTBOX_FONT,styles.input]}
                                   underlineColorAndroid = "transparent"
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