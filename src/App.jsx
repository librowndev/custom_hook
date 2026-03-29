import React from 'react';
import FetchData from './Components/FetchData';
import FetchYogaData from './Components/FetchYogaData';
import FetchFruitsData from './Components/FetchFruitsData.jsx';
import FetchYogaJson from "./Components/FetchYogaJson.jsx";

/**
 * Main application component that renders the data fetching components.
 *
 * @component
 * @returns {JSX.Element} The root component of the application.
 */
function App() {
  return (
    <>
      <FetchData />
      <FetchYogaData />
      <FetchFruitsData />
       <FetchYogaJson/>

    </>
  );
}

export default App;

