import React from 'react'
import { View, Text ,Image,Button,ImageBackground } from 'react-native'
import { styles } from '../styles/global'
import {MaterialIcons} from '@expo/vector-icons'

const Header = ({navigation,title}) => {
    const openMenu = ()=>{
    navigation.openDrawer() 
    }
    
    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>
            <MaterialIcons style={styles.icon} onPress={openMenu}  name='menu' size={28} />
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{title}</Text>
                <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
            </View>
                
                
        
          
        </ImageBackground>
    )
}

export default Header
