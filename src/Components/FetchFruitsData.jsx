import React from 'react';
import fruitData from './fruit.json';
import './FetchData.css';

/**
 * Component that displays fruit data from a local JSON file.
 *
 * @component
 * @returns {JSX.Element} The rendered component displaying fruit data.
 */
const FetchFruitsData = () => {
    const data = fruitData;
    console.log(data);
    // console.log("here I am")

    return (
        <>
            <h1 className='usefetch_heading'>Use Fetch Custom Hook with Fruit JSONs Data</h1>
            <ul className='list_data_main'>
                {data && data.map((e, index) => (
                    <li key={index} className='list_data'>
                        <h3>{e.name}</h3>
                        <p><strong>Importance: </strong>{e.importance} </p>
                        <p><strong>Benefits: </strong>{e.benefits} </p>
                        <p><strong>Time to eat: </strong>{e.best_time_to_intake} </p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FetchFruitsData;

