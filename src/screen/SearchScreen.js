import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {

const[searchTerm, setSearchTerm] = useState('');
const [searchApi, results, errorMessage] = useResults();

const filterResultsByPrice = (price) => {
    return results.filter( (result) => {
        return result.price === price;
    });
};


    return(
        <>
            <SearchBar 
            searchterm= {searchTerm}
            onTermChange={setSearchTerm}
            onTermSubmit={() => searchApi(searchTerm)}
            />
            { errorMessage ? <Text>{errorMessage}</Text>: null}
            <ScrollView>
                <ResultList 
                title='Cost Effective'
                results = {filterResultsByPrice('$')}
                />
                <ResultList 
                results = {filterResultsByPrice('$$')}
                title='Bit Pricer'
                />
                <ResultList 
                results = {filterResultsByPrice('$$$')}
                title='Big Spender'
                />
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    
})

export default SearchScreen;