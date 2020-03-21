import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { styles, images } from '../styles/global'
import Card from '../shared/card'
const Review = ({ navigation,route }) => {
  const rating = route.params.rating;
  return (
    <View style={styles.container}>
    <Card>

       <Text style={styles.titleText}>{route.params.title}</Text>
      <Text style={styles.titleText}>{route.params.body }</Text>
      <View style={styles.rating}>
          <Text style={styles.titleText} >GameZone rating : </Text>
        <Image source={images.ratings[rating]} />
      </View>
      </Card>

    </View>
  );
};

export default Review
