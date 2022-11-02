import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name='AnimationText'
            component={Screen1}
            options={{ title: 'AnimationObject' }}
        />
        <Stack.Screen
            name='Animation2'
            component={Screen2}
            options={{ title: 'AnimationObject' }}
        />
        <Stack.Screen
            name='Animation3'
            component={Screen3}
            options={{ title: 'AnimationObject' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
