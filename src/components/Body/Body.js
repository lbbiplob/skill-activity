import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import Summary from '../Summary/Summary';


import './Body.css'

const Body = () => {
    const [activitys, setActivitys] = useState([]);
    const [time, setTime] = useState(0)
    useEffect(()=>{
    fetch('fake.json')
    .then(res => res.json())
    .then(data=> setActivitys(data))
  },[]);
    
    const addTime = time  =>{
    setTime(time);
        
    };
    return (
        <div className='full-container' >
            <div className='main-container'>
                <Header></Header>
                <div className='body-container'>
                    {
                    activitys.map(activity=> <Activity addTime={addTime} key={activity.id} activity={activity} ></Activity> )
                }
                </div>
            </div>

            <div className='summary-container'>
                <Summary time={time}></Summary>
             </div> 
        </div>
        
    );
};

export default Body;