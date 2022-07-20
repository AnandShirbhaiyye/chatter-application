import React from 'react';
import './SendMessage.css';

function SendMessage(props) {
  return (
   <>
   <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
            <div className='card_send'>
                <h6 className='heading_h1'>{props.user}</h6>
                <span className='heading_h1'>{props.message}</span>
                <span className='span_time'>{props.time}</span>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default SendMessage