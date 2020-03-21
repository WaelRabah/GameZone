import React from 'react'
import { View, Text , TextInput , Button , StyleSheet } from 'react-native'
import style, { styles } from '../styles/global'
import {Formik} from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button'
const reviewSchema = yup.object({
    title : yup
    .string()
    .required()
    .min(4),
    body : yup
    .string()
    .required()
    .min(8) ,
    rating : yup.string()
    .required()
    .test('is-num-1-5','Rating must be a number between 1 and 5 '
    ,(val)=>{return parseInt(val)<6 && parseInt(val)>0})
})
const ReviewForm = ({toggleModal,addReview}) => {
    return (
      <View style={styles.container}>
        <Formik
          initialValues={{ title: "", body: "", rating: "" }}
          validationSchema={reviewSchema}
          onSubmit={values => {
            addReview(values);
            toggleModal();
          }}
        >
          {props => (
            <View>
              <TextInput
                style={styles.input}
                placeholder={"Review Title"}
                onChangeText={props.handleChange("title")}
                value={props.values.title}
                onBlur={props.handleBlur("title")}
              />
              <Text style={styles.errorText}>
                {" "}
                {props.touched.title && props.errors.title}{" "}
              </Text>
              <TextInput
                multiline
                style={styles.input}
                placeholder={"Review Body"}
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              />
              <Text style={styles.errorText}>
                {" "}
                {props.touched.body && props.errors.body}{" "}
              </Text>
              <TextInput
                style={styles.input}
                placeholder={"Review Rating"}
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType={"numeric"}
                onBlur={props.handleBlur("rating")}
              />
              <Text style={styles.errorText}>
                {" "}
                {props.touched.rating && props.errors.rating}{" "}
              </Text>
              <FlatButton
                title="Submit"
                
                onPress={props.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    );
}

export default ReviewForm
