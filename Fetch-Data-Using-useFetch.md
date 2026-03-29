# Lab: Fetch Data using useFetch

**Estimated time needed:** 40 minutes

---

## What you will learn

In this lab, you will learn how to fetch data in React using a custom hook (`useFetch`) and a corresponding component (`FetchData`). By encapsulating data-fetching logic into reusable hooks, you can improve code maintainability. You will master React's `useState` and `useEffect` hooks for managing state and asynchronous operations efficiently. Additionally, you learn to dynamically render fetched data on the UI with JSX, enabling the creation of dynamic and interactive components.

## Learning objectives

After completing this lab, you will be able to:

- Fetch data from an external API using the fetch API method within a React application
- Implement a custom React hook (`useFetch`) to encapsulate the logic to fetch data
- Render the data retrieved from the API onto the UI and display relevant information such as name, importance, benefits, and the best time to intake for each item

---

## Prerequisites

- Basic Knowledge of HTML
- Intermediate knowledge of JavaScript
- Basic Knowledge of React hooks and custom hook

---

## Setting up the Environment

1. From the menu on top of the lab, click on the **Terminal** tab at the top-right of the window, and then click **New Terminal**.

2. Write the following command in the terminal to clone the boiler template for this React application and hit Enter. The `custom_hook` application includes the class components named as `useFetch.jsx` and `FetchData.jsx` and a css file named as `FetchData.css`.

```html
git clone https://github.com/ibm-developer-skills-network/custom_hook.git
```

3. This will create a folder named **`custom_hook`** under the **project** folder with the following structure:

```
custom_hook/
└── src/
    ├── Components/
    │   ├── FetchData.css
    │   ├── FetchData.jsx
    │   └── UseFetch.jsx
    ├── App.css
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

4. Write the command to enter the `custom_hook` folder in the terminal:

```html
cd custom_hook
```

5. To make sure that the code you have cloned is working correctly, follow these steps:

   - Install all the necessary packages to execute the application:

```html
npm install
```

   - Then execute the following command to run the application (provides port number 4173):

```html
npm run preview
```

6. To view your React application, click the **Skills Network** icon on the left panel. This action will open the **SKILLS NETWORK TOOLBOX**. Next, click **Launch Application**. Enter port number **4173** in **Application Port** and click the launch button.

7. The output will display the heading: **Use Fetch Custom Hook**

---

## Create Custom Hook

1. Navigate to the `FetchData.jsx` component located within the `Components` folder of the `src` directory in your cloned `custom_hook` folder.

2. The basic structure of `FetchData.jsx` component has been provided with a default function component having one `<h1>` tag with heading and a `<ul>` tag with class named as `list_data_main`:

```javascript
import React from 'react'

const FetchData = () => {
  return (
    <>
      <ul className='list_data_main'>
        <h1 className='useFetch_heading'>Use Fetch Custom Hook</h1>
      </ul>
    </>
  )
}

export default FetchData
```

3. There are two approaches to fetch data:

   - **First approach:** Implement the logic using the fetch API method within each component that needs to fetch data. If you have 5 components that need to load data from an external source, you would need to write the similar logic to fetch details in each one.
   - **Second approach (recommended):** Create a reusable custom hook. This custom hook encapsulates the data fetching logic, allowing it to be reused across multiple components without the need to rewrite the entire code.

4. To create the custom hook, navigate to `useFetch.jsx` under the `Components` folder of the `src` folder. The basic layout provided is:

```javascript
const useFetch = (url) => {
}

export default useFetch
```

   - An arrow function is declared that takes a single parameter named `url`.
   - This method is exported as default.

5. In the basic layout, you need to implement the `useEffect` hook to create a template to fetch the data.

6. Create a variable named `data` using `useState` hook along with `setData` as the function. Include this code within the arrow function component:

```javascript
const [data, setData] = useState();
```

7. Include the following statement at the top of `useFetch.jsx` to ensure the working of the `useState` hook:

```javascript
import { useState } from "react";
```

8. Now implement the `useEffect` hook within the arrow function to create the logic to fetch data from any given URL:

```javascript
useEffect(() => {
  fetch(url).then((res) => res.json())
    .then((data) => setData(data))
}, [])
return [data]
```

   - **`useEffect`**: A React Hook used for performing side effects in functional components. Typically used for fetching data, subscribing to events, or any other side effects that don't involve rendering.
   - **`fetch(url)`**: Initiates an HTTP request to the specified `url`.
   - **`.then((res) => res.json())`**: Converts the response from the server to JSON format.
   - **`.then((data) => setData(data))`**: Sets the retrieved data to the state variable `data`. `setData` is a function that updates the state in React functional components.

9. Include the following code at the top of `useFetch.jsx` to ensure working of `useEffect` hook:

```javascript
import { useState, useEffect } from "react";
```

10. The entire `useFetch.jsx` code should look like this:

```javascript
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url).then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return [data]
}

export default useFetch
```

> **Note:** The `url` variable is passed as a parameter in the `useFetch` arrow function to specify the exact URL of a specific website from which any component can easily fetch data. This enables seamless data fetching from various sources without the need for redundant code.

---

## Fetch Data Using Custom Hook

1. Navigate back to the `FetchData.jsx` file located within the `Components` folder of the `src` directory.

2. Implement the custom hook by passing the specific URL from which you want to fetch data inside the `FetchData` arrow function. Include this code before the `return` statement:

```javascript
const [data] = useFetch('https://api.npoint.io/9045c260b1565daa9e15');
console.log(data);
```

3. Import `useFetch` at the top of `FetchData.jsx`:

```javascript
import useFetch from './UseFetch';
```

4. To check the output, re-run the React application. In the browser, right-click, select **Inspect**, and click the **Console** tab. You should see an array of 20 objects, each containing food data (name, benefits, best_time_to_intake, importance, image).

---

## Retrieve Data in Front End

1. To retrieve the data, perform an iteration of the data array using the `map` array method within the `<ul>` tag, after the `<h1>...</h1>` tag of `FetchData.jsx`:

```javascript
{data && data.map((e) => (
  <>
  </>
))}
```

2. Create the `<li>` tag with the class name `list_data` within the fragments `<></>`. Each data object contains 5 distinct types of information: `benefits`, `best_time_to_intake`, `image`, `importance`, and `name`.

3. These distinct types can be accessed using the `e` variable passed as a parameter in the `map` method:

```javascript
<li key={index} className='list_data'>
  <h3>{e.name}</h3>
  <p><strong>Importance: </strong>{e.importance}</p>
  <p><strong>Benefits: </strong>{e.benefits}</p>
  <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
</li>
```

4. Include the CSS file inside `FetchData.jsx` using an import statement:

```javascript
import './FetchData.css'
```

5. The entire `FetchData.jsx` code will look like this:

```javascript
import React from 'react'
import useFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
  const [data] = useFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);

  return (
    <>
      <h1 className='useFetch_heading'>Use Fetch Custom Hook</h1>
      <ul className='list_data_main'>
        {data && data.map((e, index) => (
          <li key={index} className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FetchData
```

> **Note:** The `e` parameter contains the value of each array index for every iteration.

---

## Check the Output

1. To stop the execution of the React application in the terminal, perform `ctrl+c` to quit.

2. Re-run the application:

```javascript
npm run preview
```

3. To view your React application, refresh the already opened webpage. If not open, click the Skills Network icon, select **Launch Application**, enter port number **4173** in Application Port, and click the launch button.

4. The output will display a list of food items with their name, importance, benefits, and best time to eat.

> **Note:** To see the latest changes you need to execute `npm run preview` again in the terminal.

### Full Solutions

<details>
<summary>Click here to see the full solution for "FetchData.jsx"</summary>

```javascript
import React from 'react'
import useFetch from './UseFetch'
import './FetchData.css'

const FetchData = () => {
  const [data] = useFetch('https://api.npoint.io/9045c260b1565daa9e15');
  console.log(data);

  return (
    <>
      <h1 className='useFetch_heading'>Use Fetch Custom Hook</h1>
      <ul className='list_data_main'>
        {data && data.map((e, index) => (
          <li key={index} className='list_data'>
            <h3>{e.name}</h3>
            <p><strong>Importance: </strong>{e.importance}</p>
            <p><strong>Benefits: </strong>{e.benefits}</p>
            <p><strong>Time to eat: </strong>{e.best_time_to_intake}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default FetchData
```

</details>

<details>
<summary>Click here to see the full solution for "useFetch.jsx"</summary>

```javascript
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url).then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return [data]
}

export default useFetch
```

</details>

<details>
<summary>Click here to see the full solution for "App.jsx" parent component</summary>

```javascript
import React from 'react'
import FetchData from './Components/FetchData'

function App() {
  return (
    <>
      <FetchData />
    </>
  )
}

export default App
```

</details>

---

## Alternative Steps to Fetching Data

> **Note:** If you are having difficulty accessing the API, you can alternatively create a JSON file using the data given below. If you have already completed the lab using the API, you may skip this section and proceed to the Practice Exercise.

1. Create a file named `fruit.json` inside the `Components` folder to store all the fruit data.

2. Update `src/Components/FetchData.jsx` to fetch data from the `fruit.json` file instead of the API URL.

3. Add the `useFetch` hook by updating `src/Components/useFetch.jsx` with the same hook logic.

4. To check the output and fetch the fruits data using hooks, run the `npm run preview` command.

---

## Practice Exercise

1. In this practice exercise you will see how the custom hook `useFetch.jsx` component can be used in another component to fetch data.

2. You will fetch data for an API related to Yoga. The API URL is: `https://api.npoint.io/4459a9a10e43812e1152`

3. Create a new component by right-clicking on the `Components` folder and clicking **New File**. Name it **`FetchYogaData.jsx`**.

4. Create the basic layout for `FetchYogaData.jsx` using a function component structure.

5. Import the custom hook `useFetch.jsx` into `FetchYogaData.jsx` and pass the API link as the URL:

```javascript
import UseFetch from './UseFetch';
```

   Include the import statement at the top of the component and declare the data variable before the return statement.

6. Write a `console.log` statement to check if data is coming in the console tab:

```javascript
console.log(data)
```

7. Include `FetchYogaData.jsx` component in `App.jsx` parent component, then check the output by re-running the application.

8. Create a `<ul>` tag with `className` as `list_data_main`. Within this, create logic to map through the fetched data and display each item inside `<li>` tags.

   Expected output displays yoga poses with their name, benefits, and duration (e.g., Lotus Pose, Sukhasana, Corpse Pose, etc.).

---

## Conclusion

Congratulations! You have created your React application to fetch data using your own personalized custom hook!

In this lab, you:

- Created a React component named `FetchData` responsible for rendering fetched data onto the user interface using the `useFetch` custom hook.
- Built a custom React hook named `useFetch` that encapsulates the logic for fetching data from a specified URL, using `useState` and `useEffect` to manage the data fetching process asynchronously.
- Implemented the `map` method to iterate through the fetched data array and render each item onto the UI using JSX, displaying attributes such as name, importance, benefits, and best time to intake.
- Adopted a modular and reusable approach by separating the data fetching logic into a custom hook, promoting code efficiency and maintainability.

---

*Author: Richa Arora*  
*© IBM Corporation. All rights reserved.*  
*Licensed under Apache 2.0*
