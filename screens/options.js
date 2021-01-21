import * as React from 'react';
import { Surface, Text,Title,TouchableRipple,Button,IconButton,Colors } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { LinearGradient } from 'expo-linear-gradient';
const MyComponent = (props) => (
  
  <TouchableRipple rippleColor="darkblue" 
  onPress={()=>{console.log('youpressed')}}>
   
   <Surface style={styles.surface}>
    <LinearGradient
        // Background Linear Gradient
        colors={['#00d2ff','#3a7bd5', 'transparent']}
        style={{ padding: 8,
    height: 200,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20,}}
      >
    <Title style={{color:'darkblue'}}>{props.name}</Title>
    </LinearGradient>
  </Surface>
  
  
  </TouchableRipple>
  
);

export default MyComponent;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 200,
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius:20,
    margin:10,
    
    
    
    
  },
});