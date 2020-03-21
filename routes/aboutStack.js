import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import Header from '../shared/header'

import About from "../screens/about";

const Stack = createStackNavigator();
function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={({ navigation }) => { return ({ headerTitle: () => <Header navigation={navigation} title={'About GameZone'} /> }) }}   name="About"  component={About} />
      
    </Stack.Navigator>
  );
}
export default AboutStack