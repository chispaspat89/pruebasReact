import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform,Text, View,Dimensions } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Constant from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from "@react-navigation/native"
import { WebView } from 'react-native-webview';


export default function videos() {
    const route = useRoute()
    const videoId = route.params?.videoId;
    const title =  route.params?.title;
    

  return (
    <View style={{
        flex:1,
     marginTop:Constant.statusBarHeight
     }}>
        <View style={{
            width:"100%",
            height:200
        }}>
           <WebView
           javaScriptEnabled={true}
           domStorageEnabled={true}
            source={{uri:`https://www.youtube.com/embed/${videoId}`}}
           />

        </View>
        <Text style={{
            fontSize:20,
            width:Dimensions.get("screen").width - 50,
            margin:9
        }}
        numberOfLines={2}
        ellipsizeMode="tail"
        >
          {title}
        </Text>
        <View
          style={{borderBottomWidth:1}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
