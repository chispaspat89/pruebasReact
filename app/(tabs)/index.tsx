import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useTheme} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import { Text, View,ScrollView,TextInput,FlatList,ActivityIndicator,Animated} from 'react-native';
import Header from '@/components/Header';
import Card from '@/components/Card';
import MiniCard from '@/components/MiniCard';
import {useSelector} from 'react-redux'
import React, { useState, useEffect, ChangeEvent } from "react";

import VideoData from '@/types/video';
import itemVideoData from '@/types/itemVideo';
import VideoService from "@/Services/videoService";
import {useNavigation} from '@react-navigation/native'


export default function HomeScreen() {
  const scrollY = new Animated.Value(0)
  const diffClamp = Animated.diffClamp(scrollY,0,45)
  const translateY = diffClamp.interpolate({
    inputRange:[0,45],
    outputRange:[0,-45]
  })

  const [videos, setVideos] = useState<Array<itemVideoData>>([]);

  const navigation =  useNavigation();

  useEffect(() => {
    retrieveVideos();
  }, []);

  const retrieveVideos = () => {
    VideoService.getAll()
      .then((response: any) => {
        setVideos(response.data.items);
        console.log("respuesta del api de youtube");
        console.log(response.data.items);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };


  return (
    <View style={{flex:1}}>
  
    <ScrollView>

    <Text style={{
        margin:8,
        fontSize:22,
        borderBottomWidth:1
    }}>Listado de videos</Text>
     <FlatList 
         data={videos}

         
         renderItem={({item})=>{
             return <MiniCard
             videoId={item.id.videoId}
             title={item.snippet.title}
             channel={item.snippet.channelTitle}
         
             />
         }}

       

         keyExtractor={item=>item.id.videoId}
         />
         </ScrollView>
    
</View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
