import React from 'react';
import './Activity.css'


const Activity = ({activity , addTime}) => {
    const {body , name, picture, time} = activity;
    return (
        <div className='cart-container'>
            <img src={picture} alt="" />
            <div className='cart-info'>
                <h3>{name}</h3>
                <p>{body.slice(0,80)}...</p>
                <p>Time: {time} min </p>
            </div>
            <button onClick={()=>{addTime(time)}}  className='cart-button'>Add to Cart </button>
            
        </div>
    );
};

export default Activity;