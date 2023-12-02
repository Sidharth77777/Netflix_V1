import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Registration2 from './includes/Registration2'
import Registration3 from './includes/Registration3'
import Registration4 from './includes/Registration4'
import Registration5 from './includes/Registration5'
import { Helmet } from 'react-helmet'

export default function Registration() {

    const [firstShow, setfirstShow] = useState(true);
    const [secondShow, setsecondShow] = useState(false);
    const [thirdShow, setthirdShow] = useState(false);
    const [fourthShow, setforthShow] = useState(false);

    const [signIn, setSignIn] = useState(true);
    const [signOut, setSignOut] = useState(false);

    return (
        <div id='registration'>
            <Helmet>
                <title>Registration | Netflix</title>
            </Helmet>
            <header>
                <div className='logo'>
                    <img src={require("./../assets/netflix.png")} alt='logo' />
                </div>
                {signIn && <Link className='link black' to="/signIn">Sign In</Link>}
                {signOut && <Link className='link black' to="/">Sign Out</Link> }

            </header>
            <div className='main'>

                {/* Rendering via states */}

                {firstShow && <Registration2 setsecondShow={setsecondShow} setfirstShow={setfirstShow} />}
                {secondShow && <Registration3 setsecondShow={setsecondShow} setthirdShow={setthirdShow} setfirstShow={setfirstShow}
                    setSignIn={setSignIn} setSignOut={setSignOut} />}
                {thirdShow && <Registration4 setthirdShow={setthirdShow} setsecondShow={setsecondShow} setforthShow={setforthShow} />}
                {fourthShow && <Registration5 setthirdShow={setthirdShow} setfourthShow={setforthShow} />}

                {/* End */}

            </div>
        </div>
    )
}
