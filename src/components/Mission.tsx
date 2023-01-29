import React from 'react';
import '../styles/Mission.css'
import '../styles/Home.css'


function Mission() {
  return (
    <div className='mission'>
        <p className='mission-tagline'>A Card with All the <span className='savings'>Savings to Grow</span></p>
        <p className='mission-statement'>
            Building a startup is hard. Which is why we are trying to gather all the tools a startup needs
            and provide cashback and rewards for all of them. This is includes your favourite databases, web hosting platforms,
            payment/learning subscriptions, and software platforms... 
        </p>
    </div>
  );
}

export default Mission;