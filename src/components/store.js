import React,{ Component} from 'react';
import {ScrollView,View,Dimensions, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import StoreItem from './storeItem';
import {NavigationStyles} from '@expo/ex-navigation';
import NavigationBar from './NavigationBar';
import strings from '../helper/language';
import Constant from '../helper/constants';

const width=Dimensions.get('window').width;
class Store extends Component{
    state={users:[], loaded: false,};
    componentWillMount(){
        console.log(width);
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response =>this.setState({users:response.data, loaded: true}));
    }
    renderUsers(){
        return this.state.users.map(user =>
            <StoreItem key={user.title} user={user} />)
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
});

export default Store;