import React from 'react';
import '../styles/Mission.css'
import '../styles/Home.css'


function Mission() {
  return (
    <div className='mission'>
        <p className='mission-tagline'>Simplify Your <span className='simplify'>Learning With Sum<span className='Doc'>Doc</span></span></p>
        <p className='mission-statement'>
            Have you ever read thousands of words only to realize that the answer was in the last sentence? Or that moment
            when your History teacher gave you 15 different links to conduct research on? Reading and processing all this information
            can be tedious, annoying, and unnessesary. By using SumDoc you'll be able to summarize documents, text, websites, 
            PDFs, and virtually anything...
            <br></br>
            <br></br>
            Oh, and it also returns notes, and keywords (dates, numbers, anything important yk)... 
        </p>
    </div>
  );
}

export default Mission;