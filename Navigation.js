import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'

import VideoPlayer from '@/components/videoplayer';

const HomeStack = createNativeStackNavigator();

function mystack(){


    return (
        <HomeStack.Navigator initial    >
         
        </HomeStack.Navigator>
      );
}