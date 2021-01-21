import * as React from 'react';
import { Surface, Text ,Button} from 'react-native-paper';
import { StyleSheet, View,Image } from 'react-native';

const MyComponent = ({route,navigation}) => (
    <View style={{flex:1,justifyContent:'space-around',alignItems:'center',backgroundColor:'orange '}}>
        <Surface style={styles.surface}>
        {route.params.url?<Image
        style={{height:200,width:200,borderRadius:100,margin:25}}
            source={{uri:route.params.url}}
        />:null}
        
        
      <Text style={{fontSize:30,color:'royalblue',marginTop:30}}>Welcome</Text>
     <Text style={{color:'coral',marginBottom:15,fontSize:20}}>{route.params.name}</Text>
     <Button  icon="arrow-right" mode="contained" color="blue" onPress={() => {navigation.navigate('Home',{
         accessToken:route.params.accessToken
     })}}>
         continue
     </Button>
  </Surface>
    </View>
  
);

export default MyComponent;

const styles = StyleSheet.create({
  surface: {
    backgroundColor:'lightyellow',
    height: 630,
    width: 360,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    borderRadius:50
  },
});
