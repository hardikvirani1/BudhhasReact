import React,{ Component} from 'react';
import {ScrollView,View,Dimensions, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import SitesItem from './sitesItem';
import {NavigationStyles} from '@expo/ex-navigation';
import NavigationBar from './NavigationBar';
import strings from '../helper/language';
import Constant from '../helper/constants';

const width=Dimensions.get('window').width;

class Sites extends Component{
    state={users:[], loaded: false,};
    componentWillMount(){
        console.log(width);
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response =>this.setState({users:response.data, loaded: true}));
    }

    renderUsers(){
        return this.state.users.map(user =>
            <SitesItem key={user.title} user={user} navigation={this.props.navigator} />)
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
                    Loading sites...
                </Text>
            </View>
        );
    }

    render(){

        if (!this.state.loaded) {
            return this.renderLoadingView();
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
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
});

export default Sites;