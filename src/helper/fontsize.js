import React, { Component } from 'react';
import {
    Dimensions,
    Platform,  StyleSheet
} from 'react-native';

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

const isIOS = (Platform.OS === 'ios');

const isAndroid = (Platform.OS === 'android');

const XLARGE_FONT = (30*width)/375;

const LARGE_FONT = (25*width)/375;

const TITLE_FONT = (20*width)/375;

const MEDIUM_FONT = (16*width)/375;

const TEXTBOX_FONT = (15*width)/375;

const LMEDIUM_FONT = (13*width)/375;

const SMALL_FONT = (12*width)/375;

const XSMALL_FONT = (11*width)/375;

export default StyleSheet.create({

    XLARGE_FONT: { fontSize: XLARGE_FONT },
    LARGE_FONT: { fontSize: LARGE_FONT },
    TITLE_FONT: { fontSize: TITLE_FONT },
    MEDIUM_FONT: { fontSize: MEDIUM_FONT },
    TEXTBOX_FONT: { fontSize: TEXTBOX_FONT },
    SMALL_FONT: { fontSize: SMALL_FONT },
    XSMALL_FONT: { fontSize: XSMALL_FONT },
    LMEDIUM_FONT: { fontSize: LMEDIUM_FONT },
    width: {width:width},
    height: {height:height},

})