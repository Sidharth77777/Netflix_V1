import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function NotFound() {

  const history = useNavigate();

  const redirectToPrev = () => {
    history(-1);
  }

  return (
    <div id='NotFound'>
      <div className='wrapper'>
        <div className='left'>
          <h1>ERROR 404!!!!
            <br />
            PAGE NOT FOUND!!!!!
          </h1>
          <button className='btn' onClick={redirectToPrev}>Go Back<FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ecedef", marginLeft: "8px" }} /></button>
        </div>
        <div className='right'>
          <img src={require("./../assets/notfound.png")} alt='notfound' />
        </div>
      </div>
    </div>
  )
}
