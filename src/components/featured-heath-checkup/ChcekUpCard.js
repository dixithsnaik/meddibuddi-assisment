import React from 'react';


export default function CheckUpCard({item}) {

  return (
    <div className='fhc-main-card-item' >

        <span>item.title</span>
        <div className='fhc-reports-time'>
            <image src={'./assets/icons/time.svg'} alt='image'/>
            <span>Reorts in {item.time}</span>
        </div>
        
      
    </div>
  );
}