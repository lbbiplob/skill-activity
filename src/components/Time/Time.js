import React from 'react';
import './Time.css'

const Time = ({name, time}) => {
    return (
        <div className='time-cintainer'>
            <h3>{name}</h3>
            <p>{time}m</p>
        </div>
    );
};

export default Time;