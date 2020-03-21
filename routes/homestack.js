import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import Header from '../shared/header'
import Home from '../screens/home'
import Review from "../screens/review";

const Stack = createStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen 
        options={({ navigation }) => { return ({ headerTitle : ()=> <Header navigation={navigation} title={'GameZone'} /> }) }}    
       name="Home" 
        component={Home} />
      <Stack.Screen 
        options={{title : 'Review'}}
      name="Review"  
      component={Review} />
    </Stack.Navigator>
  );
}
export default HomeStack