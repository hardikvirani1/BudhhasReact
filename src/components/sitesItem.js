import  CardSection  from './CardSection';
import React from 'react';
import {TouchableOpacity,Image,Text,View,Dimensions} from 'react-native';
import Constant from '../helper/constants';
import Router from '../NavigationHelper/Router';
import font  from '../helper/fontsize';
const width=Dimensions.get('window').width;
const fontsize=(25*width)/375;

const SitesItem = (props) =>{

    return (
        <CardSection>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.push('videodetailedview',{isFromHomeScreen: true})}>
                <Image source={{uri:props.user.image}} style = {{opacity:0.9, width: Constant.screenWidth-((Constant.screenWidth*6)/100), height: Constant.sitesHeight }} >
                    <Text style={{ color:'white',marginRight:5,alignSelf:'flex-end',backgroundColor: 'rgba(0,0,0,0)',backgroundColor:'transparent',fontSize:fontsize}}>
                        {props.user.title}
                    </Text>
                </Image>
            </TouchableOpacity>
        </View>
        </CardSection>
    );

};
const styles= {
    container: {
        marginTop:5,
        flex: 1, padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
}
export default SitesItem