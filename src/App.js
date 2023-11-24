import {Region} from './components/region/Region';
import './App.css';
import { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';

function App () {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() =>{
        fetch('https://restcountries.comv3.1/all')
        .then(res => res.jason())
        .then(resData => setData(resData))
        .catch(err => setIsError(true));
    }, []);

    console.log(data.region);
const regions=[];

for(const country of data {
    if(!regions.includes(countries.region)) {
        regions.push(country.region);
    }
}
console.log(regions);

const regionList = regions.map((region, idx) => ()<Region title={region}/>
));

return (
    <div className='App'>
        {regionList}
    </div>
);
}

export default App;

