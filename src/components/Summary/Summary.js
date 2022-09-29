import React, { useEffect, useState } from 'react';
import './summary.css'
import Player from '../Player/Player';
import BreakPoint from '../BreakPoint/BreakPoint';
import Time from '../Time/Time';
import { getData, myDb } from '../MyDb/MyDb';
import ActivityCompleted from '../ActivityCompleated/ActivityCompleted';

const Summary = ({times}) => {

    const [breakTime, setBreakTime] = useState(0)

    useEffect(()=>{
        const storedData = getData();
        setBreakTime(storedData)
    },[breakTime]);
    
    let totalTime = 0;
    for (const time of times ){
        totalTime = totalTime + time;
    }
    const clicked = e =>{
        setBreakTime(e);
        myDb(e)

    }
    return (
        <div className='summary'>
         
        <Player></Player>
        <BreakPoint click={clicked} ></BreakPoint>
        <Time name={'Exercise time'} time={totalTime}></Time>
        <Time name={'Break time'} time={breakTime} ></Time>
        <ActivityCompleted></ActivityCompleted>
         
        </div>
    );
};

export default Summary;