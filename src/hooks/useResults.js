import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')


    const searchApi = async term => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    term,
                    limit: 50,
                    location: "Toronto"
                }
            });
            setResults(res.data.businesses)
            
        } catch (err) {
            setErrorMessage('something went wrong')
        }
    };

    useEffect(() => {
        searchApi('India')
    }, [])

    return [searchApi, results, errorMessage];
}
