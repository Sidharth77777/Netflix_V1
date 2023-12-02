import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Unavailable() {

    const history = useNavigate();
    
    const redirectToPrev = () => {
        history(-1);
    }

  return (
    <div id="unavailable">
      <h1>Sorry ...This Page is currently unavailable and is in development stage</h1>
      <button className='btn' onClick={redirectToPrev}>Go Back<FontAwesomeIcon icon={faArrowLeft} style={{color: "#ecedef",marginLeft:"8px"}} /></button>
    </div>
  )
}
