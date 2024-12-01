import React, { useEffect, useReducer, useState } from 'react';
import axios from "axios";

const Fetch = () => {
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([])


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then(response => response.json()).then(json => setData(json));
        
        axios.get("https://jsonplaceholder.typicode.com/todos").then(response => setNewData(response.data)).catch(error => {
            console.log("Error while fetching : ", error);
        });

    }, [])
    return (
        <div>

            <h1 className='font-bold text-2xl'>Fetched data using fetch method</h1>

            {
                newData.map((ele, index) => (
                    <p key={index}>{ele.id}     {ele.title}</p>
                ))
            }
        </div>
    )
}

export default Fetch
