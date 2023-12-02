import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import Login2ndPage from './includes/Login2ndPage'
import Login3rdPage from './includes/Login3rdPage'
import LoginFooter from './includes/LoginFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function LoginPage() {

    const divIdAsHref = "Login3";

    const [email, setEmail] = useState("");

    return (
        <>
        <Helmet>
            <title>Netflix India- Watch TV shows Online</title>
        </Helmet>
        <div id='Login'>
            
            <header className='container'>
                <div className='logo'>
                    <img src={require("./../assets/netflix-removebg-preview.png")} alt='logo' className='img-fluid' />
                </div>
                <div className='nav navbar nav-options'>
                    <ul>
                        <li>
                            <Link to="/signIn"><button type='button' className='btn'>Sign In</button></Link>
                        </li>
                    </ul>
                </div>
            </header>

            <div className='Started container'>
                <div className='form'>
                    <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                    <h3>Endless entertainment starts at just FREE!!!. Cancel anytime.</h3>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <form action='' method='post'>
                    <div className='input'>
                        <input type='text' placeholder='Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <Link className='link' to="/registration"><button type='submit' className='btn'>Get Started<FontAwesomeIcon icon={faArrowRight} style={{color: "#ecedef",marginLeft:"8px"}} /></button></Link>
                </form>
                </div>
            </div>
            
        </div>

        <Login2ndPage />
        <Login3rdPage />
        <LoginFooter divId={divIdAsHref} />

        </>
    )
}
