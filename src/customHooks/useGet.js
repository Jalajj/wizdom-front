import { useEffect, useState, useCallback } from "react";
import axios from 'axios';
import { useGlobalContext } from "../context";
import { useErrorHandler } from 'react-error-boundary';

const useGet = (query) => {
    const handleError = useErrorHandler();
    
    // const URL ='https://wizdom-qa.herokuapp.com'
    const URL = 'http://localhost:4000'
    const [getData, setGetData] = useState([]);
    const { setIsLoading} = useGlobalContext();

    const fetchGetData = async () => {
        try{
            setIsLoading(true);
            const res = await axios.get(`${URL}${query}`);
            setGetData(res.data);
            setIsLoading(false);
        }catch(err){
            handleError(err)
            setIsLoading(false);
        }
    }
    // , [query, setIsLoading])
    
    useEffect(() => {
        fetchGetData();
    },[]);

    
    return {getData, setGetData, fetchGetData};
}

export default useGet;