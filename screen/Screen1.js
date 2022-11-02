import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { Animated, Text, View ,TouchableOpacity, Button } from 'react-native';


const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default function App({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: '#66ff99'}}>
        <Text style={{fontSize: 14, textAlign: 'center', margin: 10}}>Welcome to animtion react native</Text>
      </FadeInView>
      <View style={{marginTop:20}}>
        <Button title='Screen2'
            onPress={()=>{
                navigation.navigate('Animation2')
            }}
        />
      </View>
      <View style={{marginTop:20}}>
        <Button title='Screen3'
            onPress={()=>{
                navigation.navigate('Animation3')
            }}
        />
      </View>
    </View>
  );
};
