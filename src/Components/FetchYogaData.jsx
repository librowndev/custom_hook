import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css';

/**
 * Component that fetches and displays yoga pose data using the UseFetch custom hook.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying yoga pose data.
 */
const FetchYogaData = () => {
    const [data] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(data);
    // console.log("here I am")

    return (
        <>
            <h1 className='usefetch_heading'>Use Fetch Custom Hook with Yoga API</h1>
            <ul className='list_data_main'>
                {data && data.map((e, index) => (
                    <li key={index} className='list_data'>
                        <h3>{e.name}</h3>
                        <p><strong>Importance: </strong>{e.importance} </p>
                        <p><strong>Benefits: </strong>{e.benefits} </p>
                        <p><strong>Time Duration: </strong>{e.time_duration} </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FetchYogaData;

