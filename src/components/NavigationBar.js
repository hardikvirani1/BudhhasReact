import React from 'react';
import { Image, Text, View, StyleSheet,TouchableHighlight} from 'react-native';
import cs from '../helper/customStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  Button, Grid, Col} from 'native-base';
import {
    NavigationStyles
} from '@expo/ex-navigation';
import csFont from '../helper/fontsize';
import Constant from '../helper/constants'
export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftButtonType:  this.props.leftButtonType || 'menu'
        };
    }
    render() {
        return (
            <View style={[cs.jcBetween,cs.navHeight,cs.bg000,cs.itemsCenter,{shadowColor: '#000000', shadowOffset: { width: 0, height: 3 },
                         zIndex: 100, height: 54}]}
                  elevation={15}>
                <Grid>
                    <Col size={1.5} style={[cs.selfCenter]}>
                        <TouchableHighlight underlayColor='transparent'
                                            onPress={ this.props.leftButtonPressed }>
                            {
                                (this.state.leftButtonType === Constant.navButtonType.menu) &&
                                <FontAwesome name='navicon' size={25} style={[cs.bg000,cs.ml105]} />
                                ||
                                <Ionicons name='ios-arrow-back' size={35} style={[cs.fw3, cs.bg000,cs.ml105]} />
                            }
                        </TouchableHighlight>
                    </Col>
                    <Col size={7} style={[cs.selfCenter]}>
                        <Text numberOfLines={1} style={[cs.bg000,cs.tc,cs.fontKorolevBold,csFont.TITLE_FONT,{fontWeight:'bold'}]}>{ this.props.navTitle }</Text>
                    </Col>
                    <Col size={1.5}>
                        <Text/>
                    </Col>
                </Grid>
            </View>
        )
    }
}