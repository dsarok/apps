// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from "./screens/Welcome";
import Newsfeed from './screens/Newsfeed';
import Signup from "./screens/Signup";
import Greet from "./screens/Greet";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Signin" component={Signup}
      options={{
        headerStyle:{
          height:0
        }
      }} />
      <Stack.Screen name="Greet" component={Greet} 
        options={
          {title:"Greeting"}
        }
      />
        <Stack.Screen name="Home" component={Welcome}
        options={{
           title:'',
          headerStyle:{
          height:0,
          
         }}
          } />
        <Stack.Screen name="Newsfeed" component={Newsfeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;