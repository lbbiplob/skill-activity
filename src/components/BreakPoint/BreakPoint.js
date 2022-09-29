import React from 'react';
import './BreakPoint.css'

const BreakPoint = ({click}) => {
    return (
        <div className='breckpoint-container'>
            <button onClick={(e)=>click(e.target.value)} className='break-btn' value={20}>20m</button>
            <button onClick={(e)=>click(e.target.value)} className='break-btn' value={30}>30m</button>
            <button onClick={(e)=>click(e.target.value)} className='break-btn' value={40}>40m</button>
            <button onClick={(e)=>click(e.target.value)} className='break-btn' value={50}> 50m</button>
            <button onClick={(e)=>click(e.target.value)} className='break-btn' value={60}>60m</button>
            
        </div>
    );
};

export default BreakPoint;