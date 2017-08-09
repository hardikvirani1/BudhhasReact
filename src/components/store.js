import React,{ Component} from 'react';
import {ScrollView,View,Dimensions} from 'react-native';
import axios from 'axios';
import StoreItem from './storeItem';
import {NavigationStyles} from '@expo/ex-navigation';
import NavigationBar from './NavigationBar';
import strings from '../helper/language';
import Constant from '../helper/constants';

const width=Dimensions.get('window').width;
class Store extends Component{
    state={users:[]};
    componentWillMount(){
        console.log(width);
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response =>this.setState({users:response.data}));
    }
    renderUsers(){
        return this.state.users.map(user => <StoreItem key={user.title} user={user} />)
    }
    menuPressed = () => {
        const { navigation } = this.props;
        const navigator = navigation.getNavigatorByUID('drawerNav');
        navigator.toggleDrawer()
    };
    render(){
        console.log(this.state);
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
export default Store;