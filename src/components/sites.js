import React,{ Component} from 'react';
import {ScrollView,View,Dimensions, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {NavigationStyles} from '@expo/ex-navigation';
import NavigationBar from './NavigationBar';
import strings from '../helper/language';
import Constant from '../helper/constants';
import cs from '../helper/customStyles';
import font  from '../helper/fontsize';

const width=Dimensions.get('window').width;
const data = [
    {id:1, uri: require('../../images/lumbini.png'), name:'Lumbini'  },
    {id:2, uri: require('../../images/bodhgayas.png'), name:'Bodhgaya'  },
    {id:3, uri: require('../../images/sarnath.png'), name:'Sarnath'  },
    {id:4, uri: require('../../images/kushinagara.png'), name:'Kushinagara'   },
    {id:5, uri: require('../../images/sravasathi.png'), name:'Sravasthi'  },
    {id:6, uri: require('../../images/vaishali.png'), name:'Vaishali'   },
    {id:7, uri: require('../../images/rajagir.png'), name:'Rajagir'   },
    {id:8, uri: require('../../images/sankasya.png'), name:'Sankasya'  },
];

class Sites extends Component{
    state={users:[], loaded: false,};
    componentWillMount(){
        console.log(width);
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({users:response.data, loaded: true}));
    }

    renderUsers(){
        /*return this.state.users.map(user =>
            <SitesItem key={user.title} user={user} navigation={this.props.navigator} />)*/
        return data.map(user => {
            return (
                <View style={styles.containers} key={user.id}>
                    <TouchableOpacity style={styles.btn}
                        onPress={() => this.props.navigator.push('videodetailedview',{isFromHomeScreen: true})}>
                        <Image source={user.uri} blurRadius={3}
                               style = {{opacity:0.9, width: Constant.screenWidth-30,
                                   height: Constant.screenWidth/1.75 }} >
                        </Image>
                        <View style={styles.txtView}>
                            <Text style={[font.TITLE_FONT, styles.txt]}>{user.name}</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            )
        });
    }

    menuPressed = () => {
        const { navigation } = this.props;
        const navigator = navigation.getNavigatorByUID('drawerNav');
        navigator.toggleDrawer()
    };
    backPressed = () => {
        this.props.navigator.pop()
    };

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    {strings.loading}
                </Text>
            </View>
        );
    }

    render(){
        if (!this.state.loaded) {
            return(
                <View style={{flex:1}}>
                    {
                        (this.props.route.params.isFromHomeScreen === true)&&
                        <NavigationBar
                            navTitle={strings.site}
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
                        <View style={styles.container}>
                            {this.renderLoadingView()}
                        </View>
                </View>
            );
        }

        return(
            <View style={{flex:1}}>
                {
                    (this.props.route.params.isFromHomeScreen === true)&&
                    <NavigationBar
                        navTitle={strings.site}
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
                <ScrollView>
                    {this.renderUsers()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        flexDirection:'row',
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        padding:10,
    },
    txt:{
        color:'#fff',
        backgroundColor:'transparent',
    },
    txtView:{
        alignItems:'flex-end',
        position:'absolute',
        alignSelf:'flex-end',
        padding:15}
});

export default Sites;