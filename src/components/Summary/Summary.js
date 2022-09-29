import React, { useState } from 'react';
import './summary.css'
import Player from '../Player/Player';
import BreakPoint from '../BreakPoint/BreakPoint';
import Time from '../Time/Time';

const Summary = ({times}) => {
    let totalTime = 0;
    for (const time of times ){
        totalTime = totalTime + time;
    }
    const clicked = cl =>{
        const time = cl;


    }
    return (
        <div className='summary'>
         
        <Player></Player>
        <BreakPoint click={clicked} ></BreakPoint>
        <Time name={'Exercise time'} time={totalTime}></Time>
        <Time name={'Break time'}  ></Time>
         
        </div>
    );
};

export default Summary;