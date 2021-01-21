import  React, { useState } from "react";
import  { View} from "react-native";
import * as Google from 'expo-google-app-auth';
import { Button } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import * as Facebook from 'expo-facebook';



export default function Signup({navigation}) {
    const [login,setlogin]=useState(false);

  async function logiIn() {
  try {
    await Facebook.initializeAsync({
      appId: '161586785429043',
    });
    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile','email'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
      .then((res)=>(res.json()));
      
     var x={
       name:response.name,
       url: `https://graph.facebook.com/${response.id}/picture?type=large&access_token=${token}`
     }
    navigation.navigate("Greet",{
      name:response.name,
      url:response.picture.url
    })
    
      
    
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}

async function signInWithGoogleAsync(navigation) {
  try {
    const result = await Google.logInAsync({
      androidClientId: "510002198118-3ovsn2cu99alucspsellakvkhhrbvavr.apps.googleusercontent.com",
      iosClientId: "510002198118-e24p9ffn2b0j5a5df8ers6vghq6gkr2o.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      
      navigation.navigate('Greet',{
            name:result.user.name,
            url:result.user.photoUrl        
          });

      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (error) {
    return { error: true };
  }
}

    return(
      <View style={{flex:1}}>
      <Appbar.Header>
      <Appbar.Action icon="lock"  />
      <Appbar.Content title="Authentication"  style={{justifyContent:'center',alignItems:'center'}} />
      </Appbar.Header>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Button icon="facebook" mode="contained" uppercase={false} labelStyle={{fontSize:20}}
          onPress={()=>{logiIn()}} style={{margin:15}}>
          Sign in with facebook
         </Button>
         <Button icon="google" mode="contained" uppercase={false} labelStyle={{fontSize:20}} style={{margin:15}}
          onPress={()=>{setlogin(signInWithGoogleAsync(navigation))}}>
       Sign in with Google
         </Button>
       
          </View>
      </View>
        
    )
}