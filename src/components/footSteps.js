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

type Props = {
    isFocused: boolean,
};

@createFocusAwareComponent
@withNavigation

class FootSteps extends React.Component {

    constructor(props) {
        super(props);
    }

    renderCustomVideo = () => {
        {console.log('renderVideo')}
        return (
            <View style={styles.container}>
                <VideoPlayer
                    endWithThumbnail
                    thumbnail={require('../../images/footSteps.png')}
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
                <View style={styles.titleTexts}>
                    <Text style={[font.MEDIUM_FONT, { margin:7 , marginLeft:0}]}>Lorem Ipsum Dolor Sit Amet.!</Text>
                </View>

                <ScrollableTabView renderTabBar={()=><DefaultTabBar  />}>

                    <ScrollView tabLabel='Lumbini'>
                        <View style={styles.viewImages}>
                            <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                                <Image source={require('../../images/lumbini.png')}
                                       style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                    <ScrollView tabLabel='Bodhgaya'>
                        <View style={styles.viewImages}>
                            <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                                <Image source={require('../../images/bodhgayas.png')}
                                       style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                    <ScrollView tabLabel='Sarnath'>
                        <View style={styles.viewImages}>
                            <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                                <Image source={require('../../images/sarnath.png')}
                                       style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                    {/*<ScrollView tabLabel='Kushinagara'>
                        <View style={styles.viewImages}>
                            <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                                <Image source={require('../../images/kushinagara.png')}
                                       style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                    <ScrollView tabLabel='Sravasthi'>
                        <View style={styles.viewImages}>
                            <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                                <Image source={require('../../images/sravasathi.png')}
                                       style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                    <ScrollView tabLabel='Vaishali'>
                        <View style={styles.viewImages}>
                            <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                                <Image source={require('../../images/vaishali.png')}
                                       style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                    <ScrollView tabLabel='Rajagir'>
                        <View style={styles.viewImages}>
                            <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                                <Image source={require('../../images/rajagir.png')}
                                       style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                    <ScrollView tabLabel='Sankasya'>
                        <View style={styles.viewImages}>
                            <TouchableHighlight style={styles.btnimages} onPress={() => {}}>
                                <Image source={require('../../images/sankasya.png')}
                                       style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>*/}

                </ScrollableTabView>
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
                        navTitle={strings.footsteps}
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
        marginTop:5
    },
    btnimages: {
        marginBottom:4,
    },
    titleTexts:{
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        margin:10,
        marginTop:0,
    }
});

export default FootSteps;