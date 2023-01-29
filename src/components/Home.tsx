import React from 'react';
import '../styles/Home.css'

function Home() {
  return (
    <div className='wrapper'>
        <p className='indent title'><span className='growth'>Growth</span>Card</p>
        <p className='indent tagline'>Making <span className='startup'>STARTUPS</span> <span className='number'>100x</span> more viable through tech <span className='cash'>cashbacks</span></p>
    </div>
  );
}

export default Home;