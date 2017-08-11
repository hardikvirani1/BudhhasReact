import React from 'react';
import { Image, Text, View, StyleSheet,TouchableHighlight, TouchableOpacity,TextInput,ScrollView ,
    FlatList,Dimensions,AsyncStorage, } from 'react-native';
import cs from '../helper/customStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {  Content,  Grid, Row, List, ListItem, } from 'native-base';
import {Icon} from 'react-native-elements';
import VideoPlayer from 'react-native-video-player';
import Constant from '../helper/constants'
import {NavigationStyles} from '@expo/ex-navigation';
import NavigationBar from './NavigationBar'
import {withNavigation, createFocusAwareComponent} from '@expo/ex-navigation/src/ExNavigationComponents'
import strings from '../helper/language';
import font  from '../helper/fontsize';

type Props = {
    isFocused: boolean,
};

@createFocusAwareComponent
@withNavigation

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    renderCustomVideo = () => {
        {console.log('renderVideo')}
        return (
            <View style={styles.container}>
                <VideoPlayer
                    endWithThumbnail
                    thumbnail={require('../../images/buddha.jpeg')}
                    video={require('../../images/baadshah.mp4')}
                    videoWidth={Constant.screenWidth}
                    resizeMode="contain"
                    videoHeight={Constant.screenHeight/2.75}/>

                <View style={{flexDirection:'row', backgroundColor:'rgba(232,232,232,1)'}}>
                    <View style={{margin:8, justifyContent:'center',}}>
                        <Text style={[font.MEDIUM_FONT, cs.b]}>
                            Lumbini
                        </Text>
                    </View>
                </View>

            </View>
        );
    };

    backPressed = () => {
        this.props.navigator.pop()
    };

    renderImages = () => {
        return(
            <View>
                <View>
                    <Text style={{marginLeft:8, margin:10}}>Lorem Ipsum Dolor Sit Amet.!</Text>
                </View>

                <View style={styles.viewImages}>
                    <Text style={[font.MEDIUM_FONT, cs.b, cs.centered]}>Next Site</Text>

                    <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                        <Image source={require('../../images/buddha.jpeg')}
                               style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                    </TouchableHighlight>
                </View>
            </View>
        )
    };

    menuPressed = () => {
        const { navigation } = this.props;
        const navigator = navigation.getNavigatorByUID('drawerNav');
        navigator.toggleDrawer()
    };

    render() {
        return (
            <View style={[cs.flx1]}>
                {
                    (this.props.route.params.isFromHomeScreen === true)&&
                    <NavigationBar
                        navTitle="Lumbini"
                        leftButtonPressed = { this.backPressed }
                        leftButtonType = {Constant.navButtonType.back}
                    />
                    ||
                    <NavigationBar
                        navTitle={strings.site}
                        leftButtonPressed = { this.menuPressed }
                        leftButtonType = {Constant.navButtonType.menu}
                    />


                }
                {this.renderCustomVideo()}

                <ScrollView>
                    {this.renderImages()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        //backgroundColor:'red'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    container: {
        //flex: 1,
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    viewImages: {
        alignSelf:'center',
        borderTopWidth:1,
        borderTopColor:'lightgray',
    },
    btnimages: {
        marginBottom:4,
    }
});

export default HomeScreen;