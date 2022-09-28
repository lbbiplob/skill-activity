import React, { useState } from 'react';
import './summary.css'
import Player from '../Player/Player';
import BreakPoint from '../BreakPoint/BreakPoint';
import Time from '../Time/Time';

const Summary = ({time}) => {
    console.log(time);
    let setTime = 0;
    
   
    
    return (
        <div className='summary'>
         
        <Player></Player>
        <BreakPoint></BreakPoint>
        <Time name={'Exercise time'} time={setTime + time} ></Time>
        <Time name={'Break time'}></Time>
         
        </div>
    );
};

export default Summary;