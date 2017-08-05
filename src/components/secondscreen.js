import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {StyleSheet, View, Text, TextInput, TouchableHighlight, Image, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

class SecondScreen extends Component {
    static navigationOptions = {
        header: null,
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
                    <View>
                        <Image source={require('../../images/buddha.jpeg')} style={{height: width/1.75}} />
                    </View>

                    <View style={{flexDirection:'row', marginTop:30}}>
                        <TouchableHighlight style={[styles.btnStyle, {borderRightWidth:0.5, borderRightColor:'black'}]}
                                            onPress={() => {this.props.navigation.navigate('register')}}>
                            <Text>Register</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={[styles.btnStyle, {borderLeftWidth:0.5, borderLeftColor:'black'}]}
                                            onPress={() => {this.props.navigation.navigate('signin')}}>
                            <Text>Sign In</Text>
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
    },
    titleView:{
        justifyContent:'center',
        width,
        height: height/2.5,
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
    }
});


export default SecondScreen;