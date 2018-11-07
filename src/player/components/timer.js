import React from 'react';
import './timer.css';

/* Challenge: Move this functions to a single file and currentTime and duration
   should be formated on parent component */
const leftPad = number => {
  const pad = '00';
  return pad.substr(0, pad.length - number.length) + number;
}

const formattedTime = secs => {
  const minutes = parseInt(secs / 60, 10)
  const seconds = parseInt(secs % 60, 10)
  return `${minutes} : ${leftPad(seconds.toString())}`
}


const Timer = props => (
  <div className="Timer">
    <p>
      <span>{formattedTime(props.currentTime)} / {formattedTime(props.duration)}</span>
    </p>
  </div>
)

export default Timer
