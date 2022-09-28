import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Body = () => {
    const [activitys, setActivitys] = useState([]);
    useEffect(()=>{
    fetch('fake.json')
    .then(res => res.json())
    .then(data=> setActivitys(data))
  },[])
    return (
        <div>
            {
                activitys.map(activity=> <Activity activity={activity}></Activity> )
            }
        </div>
    );
};

export default Body;