import React from 'react';
import './summary.css'
import Player from '../Player/Player';
import BreakPoint from '../BreakPoint/BreakPoint';
import Time from '../Time/Time';

const Summary = () => {
    return (
        <div className='summary'>
         
        <Player></Player>
        <BreakPoint></BreakPoint>
        <Time name={'Exercise time'} ></Time>
        <Time name={'Break time'}></Time>
         
        </div>
    );
};

export default Summary;