import React from 'react';
import './Receivedmessage.css';

function ReceivedMessage(props) {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
            <div className='card_received'>
                <h6 className='heading_h1'>{props.user}</h6>
                <span className='heading_h1'>{props.message}</span>
                <span className='span_time'>{props.time}</span>
            </div>
        </div>
    </div>
   </div>
  )
}

export default ReceivedMessage