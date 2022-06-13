import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {

    const [result, setResult] = useState({});
    const [error, setError] = useState('')
    const { name, rating, review_count } = result;
    console.log(result)
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        try {
            const res = await yelp.get(`/${id}`);
            setResult(res.data)
        } catch (err) {
            setError('Data is not available 🔙')
        }
    }

    useEffect(() => {
        getResult(id)
    }, [])
    
    if(!result){
        return null;
    }

    return (
        <View>
            {!result ?<Text>{error}</Text> : null}
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.rating}> {rating} ★   {review_count} reviews</Text>
            <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={ (photo) => photo }
            data={result.photos}
            renderItem={({item}) => {
                return(
                <Image style={styles.imageStyle} source={{uri: item}} />
            )}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        height:150,
        width: 300,
        borderRadius:5,
        marginTop: 10
        
    },
    title:{
        fontSize:25,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight:'bold',
    },
    rating:{
        textAlign:'center',
        fontSize:15
    },
    address:{
        textAlign:'center',
        fontSize:18,
        marginTop: 20
    }
})

export default ResultShowScreen;
