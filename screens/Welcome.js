
import React, { useState } from 'react';
import { StyleSheet, View,SafeAreaView,StatusBar ,Button,ScrollView} from 'react-native';
import Mycomponent from "./options";
import { Appbar } from 'react-native-paper';
import { TouchableOpacity , TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import * as Google from 'expo-google-app-auth';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


    

export default function Welcome({route,navigation}) {

  return (
    <ScrollView style={{flex:10,height:windowHeight}}>
    <Appbar style={styles.bottom,{height:100,flex:1} } >
      <Appbar.Content title="News Options" subtitle={'select any'}  titleStyle={{fontSize:25,textAlign:'auto'}}/>
      <Button
        title="Log out"
        onPress={()=>  {navigation.navigate('Signin');
        }}
      />
    </Appbar>
    <View style={{...styles.container}} >
    <LinearGradient
        // Background Linear Gradient
        colors={['#96DEDA','#50C9C3', 'transparent']}
        style={{flex:7,width:windowWidth,flexWrap:'wrap',flexDirection:'row',alignItems:'center',justifyContent:'space-around',padding:15}}
      >
               <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Newsfeed",{
          topic:"sports",
        }
        )}}>
          <Mycomponent name="Sports" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Newsfeed",{
          topic:"politics",
        })}}>
          <Mycomponent name="Buisness"/>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Newsfeed",{
          topic:"technology"
      })}}>
    <Mycomponent name="Technology"/>
      </TouchableWithoutFeedback>
<TouchableWithoutFeedback onPress={()=>{navigation.navigate("Newsfeed",{
          topic:"health"
      })}}>
    <Mycomponent name="Health"/>
      </TouchableWithoutFeedback>
    <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Newsfeed",{
          topic:"science"
      })}}>
    <Mycomponent name="Science"/>
      </TouchableWithoutFeedback>
 
    <TouchableWithoutFeedback onPress={()=>{navigation.navigate("Newsfeed",{
          topic:"entertainment"
      })}}>
    <Mycomponent name="Entertainment"/>
      </TouchableWithoutFeedback>
 
   
      </LinearGradient>
     </View>
     
      <StatusBar hidden={false}/>
        
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 7,
    backgroundColor: '#fff',
    flexDirection:'column',
    flexWrap:'wrap',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
