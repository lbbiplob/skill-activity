import React from 'react';
import image from '../../images/Biplab.jpg'
import './Player.css'

const Player = () => {
    return (
          <div className='player'>
                <img src={image} alt="" />
                <div className='player-info'>
                    <h4>Biplab Hossain</h4>
                    <p>Mujibnagar,Dhaka</p>
                </div>
         </div>
    );
};

export default Player;