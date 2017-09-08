import  CardSection  from './CardSection';
import React, { Component } from 'react';
import {Image,Text,View,Dimensions} from 'react-native';
import Constant from '../helper/constants';
import font  from '../helper/fontsize';
import cs from '../helper/customStyles'


const StoreItem = (props) =>{

        return (

            <CardSection style={{flex:1}}>
                <View style={{flexDirection:'column', }}>
                      <Image source={{uri:props.user.image}} style = {{ width: Constant.storeScreen,
                          height: Constant.storeScreen }} />
                </View>
                <View style={{flex:1,marginLeft:10,flexDirection:'row'}}>
                    <View style={{alignSelf:'flex-start'}}>
                         <Text style={[font.MEDIUM_FONT]}>
                             {props.user.title}
                         </Text>
                         <Text style={[cs.b,font.MEDIUM_FONT]}>
                             {props.user.artist}
                         </Text>
                    </View>
                 </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',marginRight:5}}>
                    <View style={{alignSelf:'flex-end'}}>
                          <Text style={[cs.b,font.TITLE_FONT, {color:'rgba(15,102,177,1)'}]} >
                                {props.user.title}
                          </Text>
                    </View>
                </View>

            </CardSection>
        );

}
export default StoreItem