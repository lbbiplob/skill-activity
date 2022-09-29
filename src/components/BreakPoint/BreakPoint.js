import React from 'react';
import './BreakPoint.css'

const BreakPoint = ({click}) => {
    const first = 20;
    const second = 30;
    const thard = 40;
    const forth = 50;
    const fiveth = 55;
    ;
    return (
        <div className='breckpoint-container'>
            <button onClick={()=>click(first)} className='break-btn'>{first}m</button>
            <button onClick={()=>click(second)} className='break-btn'>{second}m</button>
            <button onClick={()=>click(thard)} className='break-btn'>{thard}m</button>
            <button onClick={()=>click(forth)} className='break-btn'> {forth}m</button>
            <button onClick={()=>click(fiveth)} className='break-btn'>{fiveth}m</button>
            
        </div>
    );
};

export default BreakPoint;