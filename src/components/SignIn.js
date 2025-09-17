import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'


export default function SignIn() {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [visible, setVisible] = useState(false);

  const changeView = (e) => {
    setVisible(!visible);
  }

  return (
    <div id='SignIn'>
      <div className='logo container'>
        <img src={require("./../assets/netflix-removebg-preview.png")} alt='logo' />
      </div>

      <div className='wrapper'>
        <div className='sign'>
          <h1>Sign In</h1>
          <form action='' method='post'>
            <div className='input'>
              <input required placeholder='Email or Phone number' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='input'>
              <input type={visible ? "text" : "password"} required placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              {visible ? <FontAwesomeIcon icon={faEyeSlash} style={{ color: "#fcfcfc", }} className='eye' onClick={(e) => changeView(e)} /> :
                <FontAwesomeIcon icon={faEye} style={{ color: "#fcfcfc", }} className='eye' onClick={(e) => changeView(e)} />}

            </div>
            <Link className='link' to="/home"><button type='submit' className='btn'>Sign In</button></Link>

            <div className='flexed'>
              <div className='check'>
                <input type='checkbox' id='checkbox' />
                <label for='checkbox' className='color-grey size'>Remember me</label>
              </div>
              <Link className='link color-grey size' to="/unavailable">Need help?</Link>
            </div>
          </form>

          <div className='captcha'>
            <h5 className='color-grey size-m'>New to Netflix? <Link to="/" className='link'>Sign Up now.</Link></h5>
            <p className='color-grey size-l'>This page is protected by Google reCAPTCHA to <br />ensure you're not a bot. <Link className='link blue' to="/unavailable">Learn more.</Link></p>
          </div>

        </div>
      </div>
    </div>
  )
}
