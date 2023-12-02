import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default function Registration3({ email, setfirstShow, setsecondShow, setthirdShow, setSignIn, setSignOut }) {

    const reShow = () => {
        setsecondShow(false);
        setfirstShow(true);
    }
    const changeShow = () => {
        setSignIn(false);
        setSignOut(true);
        setsecondShow(false);
        setthirdShow(true);
    }

    const [visible, setVisible] = useState(false);
    const changeView = () => {
        setVisible(!visible);
    }


    return (
        <div id='registration3'>
            <div className='wrapper'>
                <p className='black'>STEP 1 OF 3</p>
                <button className='btn' onClick={reShow}><FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ecedef", marginRight: "8px" }} />Go Back</button>
                <h1 className='black'>Create a password to start<br />your FREE membership</h1>
                <p className='black'>Just a few more steps and you're done!<br />We hate paperwork, too..</p>
                <form action='' method='post'>
                    <div className='input'>
                        <input required placeholder='Email' type='email' value={email} className='black' />
                    </div>
                    <div className='input flex'>
                        <input required placeholder='Add a Password' type={visible ? 'text' : 'password'} className='black' />
                        
                        {visible ? <img alt='hide' src={require("./../../assets/eye-slash-regular.svg").default} className='eye'
                               onClick={changeView} /> : 
                            <img alt='show' src={require("./../../assets/eye-regular.svg").default} className='eye'
                                onClick={changeView} />
                        }
                    </div>
                    <div className='button'>
                        <button className='btn' type='submit' onClick={changeShow}>Next</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
