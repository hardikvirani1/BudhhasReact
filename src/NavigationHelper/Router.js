import {createRouter} from '@expo/ex-navigation';
import React from 'react';

import mainscreen from '../components/Drawer'
import homescreen from '../components/homeScreen'
import firstscreen from '../components/firstscreen';
import secondscreen from '../components/secondscreen';
import register from '../components/register';
import signin from "../components/signin";
import videodetailedview from '../components/videoDetailedView';
import stores from '../components/store';
import sites from "../components/sites";
import footsteps from "../components/footSteps";
import settings from '../components/settings';
import about from '../components/aboutView';

export default createRouter(() => ({

    mainscreen: () => mainscreen,
    homescreen: () => homescreen,
    firstscreen: () => firstscreen,
    secondscreen: () => secondscreen,
    register: () => register,
    signin: () => signin,
    videodetailedview: () => videodetailedview,
    stores: () => stores,
    sites: () => sites,
    footsteps: () => footsteps,
    settings: () => settings,
    about: () => about,

}),{ignoreSerializableWarnings: true});
