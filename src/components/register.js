import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, TextInput} from 'react-native';
import {connect, } from 'react-redux';
const {height, width} = Dimensions.get('window');
import * as actions from '../actions'
import Strings from '../helper/language';

class Register extends Component {
    static navigationOptions = {

    };

    onCreateSet = () => {
        const {email, password, repassword, coupon} = this.props;
        this.props.userCreates({email, password, repassword, coupon});
    };

    render() {
        return (
            <View style={styles.mainView}>
                <View style={styles.titleView}>
                    <Text style={styles.titleText}>In the</Text>
                    <Text style={styles.titleText}>Buddha's</Text>
                    <Text style={styles.titleText}>footsteps</Text>
                </View>

                <View style={styles.contentView}>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Email"
                               autoCapitalize = "none"
                               value={this.props.email}
                               onChangeText={(text) => {this.props.userRegisterUpdate({ prop: 'email', value: text});}}
                    />


                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Password"
                               autoCapitalize = "none"
                               value={this.props.password}
                               onChangeText={(text) => {this.props.userRegisterUpdate({ prop: 'password', value: text});}}
                    />

                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Confirm Password"
                               autoCapitalize = "none"
                               value={this.props.repassword}
                               onChangeText={(text) => {this.props.userRegisterUpdate({ prop: 'repassword', value: text});}}
                    />

                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Coupon Code"
                               autoCapitalize = "none"
                               value={this.props.coupon}
                               onChangeText={(text) => {this.props.userRegisterUpdate({ prop: 'coupon', value: text});}}
                    />

                    <TouchableHighlight style = {styles.submitButton} onPress={this.onCreateSet}>
                        <Text style = {styles.submitButtonText}>Register</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection:'column',
    },
    titleView:{
        justifyContent:'center',
        width,
        height: height/3,
    },
    contentView: {
        justifyContent:'center',
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
    const {email, password, repassword, coupon} = state.userRegisterForm;
    return {
        email, password, repassword, coupon
    }
};

export default connect(mapStateToProps, actions)(Register);