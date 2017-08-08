import React from 'react';
import { Image, Text, View, StyleSheet,TouchableHighlight, TouchableOpacity,TextInput,ScrollView ,FlatList,Dimensions,AsyncStorage} from 'react-native';
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
            resizeMode: 'cover',
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
                        style={{ width: Constant.screenWidth,  height: Constant.screenHeight/3, backgroundColor: 'red' }}
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
                <TouchableOpacity onPress={() => {this.setState({paused: !this.state.paused})}}>
                    <Icon name="pause" />
                </TouchableOpacity>
                <Text style={{color:'white', backgroundColor:'transparent'}}>{this.state.currentTime}</Text>
            </View>
        );
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
        flex: 1,
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        backgroundColor: "transparent",
        borderRadius: 5,
        position: 'absolute',
        bottom: 10,
        left: 5,
        right: 5,
    },
    backView:{
        height:60,
        width:60,
        position:'absolute',
        top:10,
        left:10,
        paddingLeft:5,
        paddingTop:10,
        backgroundColor:Constant.transparent
    },
    outerView:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: Constant.transparent,
        height:50,
        bottom: 10,
        left: 5,
        right: 5,
        position: 'absolute'
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 2,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 5,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 5,
        backgroundColor: '#2C2C2C',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        // overflow: 'hidden',
        justifyContent: 'center',
        alignItems:'center'
    },
    skinControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ignoreSilentSwitchControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: "white",
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    },
    nativeVideoControls: {
        top: 184,
        height: 300
    }
});

export default HomeScreen;