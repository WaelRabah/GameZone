import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react'

import HomeStack from './homestack'
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator  initialRouteName="Home">
      <Drawer.Screen  name="Home"  component={HomeStack} />
      <Drawer.Screen name="About"  component={AboutStack} />
    </Drawer.Navigator>
  );
}
export default MyDrawer