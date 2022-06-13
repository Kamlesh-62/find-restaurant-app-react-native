import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = (props) => {

    const { onTermChange, searchTerm, onTermSubmit } = props;

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
            style={styles.inputStyle} 
            placeholder='Search'
            value={searchTerm}
            onChangeText={onTermChange}
            autoCapitalize= "none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius: 5,
        marginHorizontal:15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:5
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
    
    
})

export default SearchBar;