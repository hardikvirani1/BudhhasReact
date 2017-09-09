import React,{ Component} from 'react';
import {ScrollView,View,Dimensions, StyleSheet, Text, Image} from 'react-native';
import axios from 'axios';
import {NavigationStyles} from '@expo/ex-navigation';
import NavigationBar from './NavigationBar';
import strings from '../helper/language';
import Constant from '../helper/constants';
import cs from '../helper/customStyles';
import font  from '../helper/fontsize';
const width=Dimensions.get('window').width;

class Store extends Component{
    state={users:[], loaded: false,};

    componentWillMount(){
        console.log(width);
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({users:response.data, loaded: true}));
    }

    renderUsers(){
        /*return this.state.users.map(user =>
            <StoreItem key={user.title} user={user} />)*/
        return this.state.users.map(user => {
            return (
                <View style={styles.mainView} key={user.title}>
                    <View style={styles.img}>
                        <Image source={require('../../images/stores.png')} style = {{ width: Constant.screenWidth/3.5,
                            height: Constant.screenWidth/3.5 }} />
                    </View>

                    <View style={styles.titleText}>
                            <Text style={[font.MEDIUM_FONT]}>
                                {user.title}
                            </Text>
                            <Text style={[font.MEDIUM_FONT, cs.b]}>
                                {user.artist}
                            </Text>
                    </View>

                    <View style={styles.titleTextLast}>
                        <Text style={[font.TITLE_FONT, cs.b, {color:'rgba(15,102,177,1)',alignItems:'flex-end',}]}>
                            {user.title}
                        </Text>
                    </View>
                </View>
            )
        });
    }

    menuPressed = () => {
        const { navigation } = this.props;
        const navigator = navigation.getNavigatorByUID('drawerNav');
        navigator.toggleDrawer()
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
                    <NavigationBar
                        navTitle={strings.store}
                        leftButtonPressed = { this.menuPressed }
                        leftButtonType = {Constant.navButtonType.menu}
                    />
                    <View style={styles.container}>
                        {this.renderLoadingView()}
                    </View>
                </View>
            );
        }

        return(
            <View style={{flex:1}}>
                <NavigationBar
                    navTitle={strings.store}
                    leftButtonPressed = { this.menuPressed }
                    leftButtonType = {Constant.navButtonType.menu}
                />

                <ScrollView>
                    {this.renderUsers()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainView:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'lightgray',
        //backgroundColor:'red'
    },
    img:{
        flex:1,
        padding:10,
        alignItems:'center',
    },
    titleText:{
        padding:10,
        alignItems:'flex-start',
        paddingLeft:0,
    },
    titleTextLast:{
        flex:1,
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginRight:10,
        marginBottom:10
    }
});

export default Store;