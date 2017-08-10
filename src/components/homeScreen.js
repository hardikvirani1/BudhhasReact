import React from 'react';
import { Image, Text, View, StyleSheet,TouchableHighlight, TouchableOpacity,TextInput,ScrollView ,
    FlatList,Dimensions,AsyncStorage} from 'react-native';
import cs from '../helper/customStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {  Content,  Grid, Row, List, ListItem, } from 'native-base';
import {Icon} from 'react-native-elements';
import Video from 'react-native-video';
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
        this.onLoad = this.onLoad.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onBuffer = this.onBuffer.bind(this);
        this.state = {
            isLoad:true,
            rate: 1,
            volume: 1,
            muted: false,
            resizeMode: 'stretch',
            duration: 0.0,
            currentTime: 0.0,
            controls: false,
            paused: true,
            skin: 'custom',
            ignoreSilentSwitch: null,
            isBuffering: false,
        };
    }

    onLoad(data) {
        console.log('On load fired!');
        this.setState({
            duration: data.duration,
            isLoad:false
        });
        console.log('time',data.duration)
    }

    onBuffer({ isBuffering }: { isBuffering: boolean }) {
        this.setState({ isBuffering });
    }

    onProgress(data) {
        console.log('On progress------'+data.currentTime);
        this.setState({currentTime: data.currentTime});
    }

    renderCustomVideo = () => {
        {console.log('renderVideo')}
        return (
            <View style={styles.container}>
                    <Video
                        source={require('../../images/baadshah.mp4')}
                        style={{ width: Constant.screenWidth,  height: Constant.screenHeight/3, }}
                        rate={this.state.rate}
                        paused={this.state.paused}
                        volume={this.state.volume}
                        muted={this.state.muted}
                        ignoreSilentSwitch={this.state.ignoreSilentSwitch}
                        resizeMode={this.state.resizeMode}
                        onLoad={this.onLoad}
                        onBuffer={this.onBuffer}
                        onProgress={this.onProgress}
                        repeat={true}
                    />
                    <View style={{flexDirection:'row', backgroundColor:'rgba(232,232,232,1)'}}>
                        <View style={{margin:8, justifyContent:'center',}}>
                            <Text style={{fontWeight:'bold', backgroundColor:'transparent'}[font.LARGE_FONT]}>
                                Information
                            </Text>
                        </View>
                        <View style={{margin:8}}>
                            <TouchableOpacity onPress={() => {this.setState({paused: !this.state.paused})}}>
                                {this.renderVideoPlayerImage()}
                            </TouchableOpacity>
                        </View>
                        <View style={{margin:8, justifyContent:'center' }}>
                            <Text style={{ backgroundColor:'transparent'}[font.TITLE_FONT]}>
                                {parseInt(this.state.currentTime)}
                            </Text>
                        </View>
                    </View>
            </View>
        );
    };

    renderVideoPlayerImage = () => {
        if(this.state.paused){
            return <Icon name="play-arrow" />
        }
        else {
            return <Icon name="pause" />
        }
    };

    renderImages = () => {
        return(
            <View style={styles.viewImages}>
                <TouchableHighlight style={styles.btnimages} onPress={() => {
                    this.props.navigator.push('sites',{isFromHomeScreen: true});
                }}>
                    <Image source={require('../../images/buddha.jpeg')}
                           style={{ width: Constant.screenWidth-30, height: Constant.screenWidth/1.75}}/>
                </TouchableHighlight>
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
                <NavigationBar
                    navTitle={strings.home}
                    leftButtonPressed = { this.menuPressed }
                    leftButtonType = {Constant.navButtonType.menu}
                />

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
        marginTop:4
    },
    btnimages: {
        marginTop:4,
    }
});

export default HomeScreen;