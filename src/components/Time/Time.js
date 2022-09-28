import React from 'react';
import './Time.css'

const Time = (props) => {
    return (
        <div className='time-cintainer'>
            <h3>{props.name}</h3>
            <p>m</p>
        </div>
    );
};

export default Time;