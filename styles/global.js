import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create(
    {
        container :
        {   flex : 1 ,
            padding: 24
        },
        titleText : {
            fontFamily:'monospace' , 
            fontSize : 18 ,
            color : '#333'
        },
        paragraph :
        {
          marginVertical : 8 , 
          lineHeight : 20 ,      
        },
        header : 
        {
            
            width : 350
            , height : '100%',
            
            alignItems : 'center' , 
            justifyContent : 'center',
            
            
        }, 
        headerTitle : 
        {
            flexDirection: 'row',

        }
        ,
        headerText : 
        {
            
            fontWeight : 'bold' , 
            color : '#333' , 
            fontSize : 20 , 
            letterSpacing : 1 , 
            fontFamily : 'monospace'
        },
        icon : 
        {
            position : 'absolute' ,
            left : 16   
        },
        card : {
                borderRadius : 6 , 
                elevation : 3 , 
                backgroundColor : '#fff' , 
                shadowOffset : { width : 1 , height : 1 },
                shadowColor : '#333',
                shadowOpacity : 0.3,
                shadowRadius : 2 ,
                marginHorizontal : 4 , 
                marginVertical : 6
        },
        cardContent : 

        {
                marginHorizontal : 18 , 
                marginVertical : 10
        },
        rating : {
            flexDirection : 'row',
            justifyContent : 'center' , 
            paddingTop : 16 , 
            marginTop : 16 , 
            borderTopWidth : 1,
            borderTopColor : '#eee'
        },
        headerImage : {
            height : 26 , 
            width : 26 ,
            marginHorizontal : 10 , 

        },
        modalToggle :{
            marginBottom : 10 ,
            borderWidth : 1 , 
            borderColor : '#f2f2f2',
            padding : 10 ,
            borderRadius : 10 , 
            alignSelf  : 'center' 
        },
        modalContent : {
            flex : 1
        },  
        input :{
            padding : 12 ,

            borderColor : '#ddd' , 
            borderWidth : 1 , 
            fontSize : 20 , 
            borderRadius : 6
        },
        errorText : 
        {
            color : 'crimson',
            fontWeight : 'bold',
            marginTop : 6 , 
            marginBottom : 10 , 
            textAlign : 'center'
        }
    }
)
export const images = {
    ratings : {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}