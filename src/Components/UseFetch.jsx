
import React, { useEffect, useState } from 'react';

/**
 * Custom hook to fetch data from a given URL.
 * 
 * @param {string} url - The URL to fetch data from.
 * @returns {Array} An array containing the fetched data.
 */
const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!url) return; // prevent fetch if url is empty or undefined

        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => {
                console.error('Fetch error:', error);
                setData(null);
            });
    }, [url]); // add url as dependency

    return [data];
};

export default useFetch;