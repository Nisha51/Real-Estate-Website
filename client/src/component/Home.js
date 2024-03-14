import React from 'react'
import { useState, useEffect } from 'react';
import Details from './Details';

const Home = () => {
    const [list, setList] = useState(null);
    const [isPennding, setIsPending] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:8000/list')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setList(data);
        })
    },[])
    return (
    <div className="home">
        {isPennding && <div>...Loading</div>}
        {list && <Details list={list}/>}
    </div>
    );
}
export default Home