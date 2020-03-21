import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import {styles} from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'
import {  } from 'react-native-gesture-handler';
const Home = ({navigation}) => {
    const press = () => 
    {
          
            navigation.navigate('Review')

    };
    const [reviews, setReviews] = React.useState([
      {
        title: "LOL",
        rating: 5,
        body: "that shit is awesome",
        key: '0'
      },
      {
        title: "The witcher",
        rating: 5,
        body: "the witcher is a badass",
        key: '1'
      },
      {
        title: "PUBG",
        rating: 4,
        body: "That's cool",
        key: '2'
      }
    ]);
    const [modalOpen, setModalOpen] = React.useState(false)
    const toggleModal = ()=>{
    setModalOpen(!modalOpen);
    }
    const addReview = (review)=>{
          const key = Number(reviews[reviews.length-1].key)+1       
          setReviews([...reviews,{...review,key:key.toString()}])
    }
    return (
      <View style={styles.container}>
        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name={"close"}
                size={24}
                onPress={toggleModal}
                style={{ ...styles.modalToggle, marginTop: 30 }}
              />
              <ReviewForm toggleModal={toggleModal} addReview={addReview} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
        <MaterialIcons
          name={"add"}
          size={24}
          onPress={toggleModal}
          style={styles.modalToggle}
        />
        <FlatList
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => navigation.navigate("Review", item)}
            >
              <Card>
                <Text style={styles.titleText}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      </View>
    );
}

export default Home
