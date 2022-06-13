import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ResultDetails = ({result}) => {
    const { name, image_url, rating, review_count} = result;

    return(
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri: image_url}} /> 
            <Text style= {styles.name} >{name}</Text>
            <Text>{rating} Stars, {review_count} Reviews</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    imageStyle: {
        width: 250,
        height: 150,
        borderRadius: 5,
        marginBottom: 5
    },
    name:{
        fontWeight:'bold',
        fontSize: 16,

    }
})

export default ResultDetails;