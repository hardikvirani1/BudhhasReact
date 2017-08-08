import {
    createRouter,
} from '@expo/ex-navigation';
import React from 'react';


import mainscreen from '../components/Drawer'
import homescreen from '../components/homeScreen'
import firstscreen from '../components/firstscreen';
import secondscreen from '../components/secondscreen';
import register from '../components/register';
import signin from "../components/signin";
import videoplayer from '../components/videoPlayer';
import main from "../main";

export default createRouter(() => ({

    mainscreen: () => mainscreen,
    homescreen: () => homescreen,
    firstscreen: () => mainscreen,
    secondscreen: () => secondscreen,
    register: () => register,
    signin: () => signin,
     videoplayer: () => videoplayer,

}),{ignoreSerializableWarnings: true});
