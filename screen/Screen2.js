import { View, Text,Animated ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

export default function Screen2() {
    const startValue = new Animated.Value(-100);
    const endValue = 150;
    const duration = 5000;

    const movingObject = () => {
        Animated.timing(startValue, {
            toValue: endValue,
            duration: duration,
            useNativeDriver: true,
        }).start();
    }
    
    const resetObject = () => {
        Animated.timing(startValue, {
            toValue: startValue,
            duration: 0,
            useNativeDriver: true,
        }).start();
    }

    const stopAnimation = () => {
        Animated.timing(startValue, {
            toValue: endValue,
            duration: duration,
            useNativeDriver: true,
        }).stop();
    }

    const animStyle = {
        transform: [
            {
                translateX: startValue,
            },
        ],
    };

  return (
    <View style={styles.container}>
        <Animated.View
                style={[
                    styles.ball,
                    animStyle
                ]}
            />
          <TouchableOpacity style={{ width: 100, height: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: 30, alignItems: 'center', backgroundColor: '#dcdcdc' }}
                onPress={movingObject}>
                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Move</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: 30, alignItems: 'center', backgroundColor: '#dcdcdc' }}
                onPress={resetObject}>
                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 100, height: 30, marginLeft: 'auto', marginRight: 'auto', marginTop: 30, alignItems: 'center', backgroundColor: '#dcdcdc' }}
                onPress={stopAnimation}>
                <Text style={{ marginTop: 'auto', marginBottom: 'auto' }}>stop</Text>
            </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ball: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        borderRadius: 100,
        borderWidth: 1,
    },
});