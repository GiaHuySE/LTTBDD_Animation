import { View, Text,Animated ,StyleSheet,TouchableOpacity} from 'react-native'
import React, { useRef ,useEffect} from "react";



const MovingBall = (props) =>{
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const startValue = new Animated.Value(-150);
    const endValue = 150;
    const duration = 1500;
    const animStyle = {
        transform: [
            {
                translateX:startValue,
            },
        ],
    };
  useEffect(() => {

    Animated.sequence([
        Animated.timing(fadeAnim,{
            toValue: 1,
            duration: 1000,
            }
        ),
        Animated.timing(startValue,{
            toValue: endValue,
                duration: duration,
                // useNativeDriver: true,
        }),
        Animated.timing(fadeAnim,{
            toValue:0,
            duration:1000,
        })
    ]).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={[styles.ball,{
        ...props.style,
        opacity: fadeAnim,  
      },animStyle]}
    >
      {props.children}
    </Animated.View>
  );
}

const MovingBall2 = (props) =>{
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const startValue = new Animated.Value(-300);
    const endValue = 150;
    const duration = 2000;
    const animStyle = {
        transform: [
            {
                translateY:startValue,
            },
        ],
    };
  useEffect(() => {

    Animated.sequence([
        Animated.timing(fadeAnim,{
            toValue: 1,
            duration: 1000,
            delay:3000
            }
        ),
        Animated.timing(startValue,{
            toValue: endValue,
                duration: duration,
                // useNativeDriver: true,
        }),
        Animated.timing(fadeAnim,{
            toValue:0,
            duration:1000,
        })
    ]).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={[styles.ball2,{
        ...props.style,
        opacity: fadeAnim,  
      },animStyle]}
    >
      {props.children}
    </Animated.View>
  );
}

const MovingBall3 = (props) =>{
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
    const startValue = new Animated.ValueXY({ x: -150, y: -350 });;
    const endValue = 150;
    const duration = 2000;
    const animStyle = {
        transform: [{ translateY: startValue.y }, { translateX: startValue.x }]
    };
  useEffect(() => {

    Animated.sequence([
        Animated.timing(fadeAnim,{
            toValue: 1,
            duration: 1000,
            delay:6000
            }
        ),
        Animated.timing(startValue,{
            toValue: endValue,
                duration: duration,
                // useNativeDriver: true,
        }),
        Animated.timing(fadeAnim,{
            toValue:0,
            duration:1000,
        })
    ]).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={[styles.ball3,{
        ...props.style,
        opacity: fadeAnim,  
      },animStyle]}
    >
      {props.children}
    </Animated.View>
  );
}


export default function Screen3() {

    return (
        <View style={styles.container}>
            <MovingBall>
            </MovingBall>
            <MovingBall2/>
            <MovingBall3/>
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
    ball2: {
        height: 50,
        width: 50,
        backgroundColor: 'red',
        borderRadius: 100,
        borderWidth: 1,
    },
    ball3: {
        height: 50,
        width: 50,
        backgroundColor: 'yellow',
        borderRadius: 100,
        borderWidth: 1,
    },
    fadingContainer: {
        padding: 20,
        backgroundColor: "powderblue"
    },
});