import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight, Image, Dimensions, TextInput} from 'react-native';
import {connect, } from 'react-redux';
import * as actions from '../actions'
const {height, width} = Dimensions.get('window');
import Strings from '../helper/language';

class Signin extends Component {
    static navigationOptions = {
    };

    onLoginSet = () => {
        const {email, password} = this.props;
        this.props.userLogin({email, password});
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
                               onChangeText={(text) => {this.props.userLoginUpdate({ prop: 'email', value: text});}}
                    />

                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "Password"
                               autoCapitalize = "none"
                               value={this.props.password}
                               onChangeText={(text) => {this.props.userLoginUpdate({ prop: 'password', value: text});}}
                    />


                    <TouchableHighlight style = {styles.submitButton} onPress={this.onLoginSet}>
                        <Text style = {styles.submitButtonText}>Sign In</Text>
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
    const {email, password} = state.userLoginForm;
    return {
        email, password
    }
};

export default connect(mapStateToProps, actions)(Signin);