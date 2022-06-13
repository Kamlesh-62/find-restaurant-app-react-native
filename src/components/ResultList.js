import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetails from './ResultDetails';
import { withNavigation } from 'react-navigation';


const ResultList = (props) => {
    const {title, results, navigation} = props;

    if(!results.length){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={ ({item}) => {
                return (
                <TouchableOpacity
                onPress={() => navigation.navigate('ResultShowScreen', {
                    id: item.id,
                })}>
                    <ResultDetails result={item} /> 
                </TouchableOpacity>
                )
            }}
            />            
        </View>
    )
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
         marginLeft: 15
    },
    container : {
        marginBottom: 10
    }
})

export default withNavigation(ResultList);
