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

class AboutView extends React.Component {

    constructor(props) {
        super(props);
    }


    backPressed = () => {
        this.props.navigator.pop()
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
                    navTitle={strings.about}
                    leftButtonPressed = { this.backPressed }
                    leftButtonType = {Constant.navButtonType.back}
                />

                <ScrollView>
                    <View style={styles.languageView}>
                    <View style={styles.imgView}>
                        <Image source={require('../../images/about.png')} style={styles.img} />
                    </View>

                    <View style={styles.txtData}>
                        <Text style={[font.MEDIUM_FONT, {fontWeight: 'bold', paddingBottom:15}]}>Thupten jinpa</Text>
                        <Text style={[font.MEDIUM_FONT,{padding:2}]}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    languageView: {
        flex:1,
    },
    titleText: {
    },
    txtData: {
        padding:10,
    },
    imgView:{
        alignItems: 'center',
        padding:5,
        margin:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderBottomColor:'rgba(198,199,199,1)'
    },
    img:{
        width: Constant.screenWidth-20,
        height: Constant.screenWidth/1.75
    }
});

export default AboutView;