import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Body.css'

const Body = () => {
    const [activitys, setActivitys] = useState([]);
    useEffect(()=>{
    fetch('fake.json')
    .then(res => res.json())
    .then(data=> setActivitys(data))
  },[])
    return (
        <div className='body-container'>
            {
                activitys.map(activity=> <Activity key={activity.id} activity={activity}></Activity> )
            }
        </div>
    );
};

export default Body;