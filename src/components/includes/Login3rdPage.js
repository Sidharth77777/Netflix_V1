import React,{useState} from 'react'
import { Questions } from './LoginQuestions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Login3rdPage() {

    const divId = 'Login3';

    const [toggleAns, setToggleAns] = useState(null);
    const [email, setEmail] = useState("");
    const [show,setNotShow] = useState(false);

    const handleItemClick = (id) => {
        setToggleAns(id);
    }

    return (
        <div id={divId}>
            <div className='container wrapper'>
                <h1>Frequently Asked Questions</h1>
                <div className='questions'>

                    {/* Mapping Questions */}
                    {Questions && Questions.map((q) => (
                        <>
                        <div className='box' key={q.id} onClick={() => {handleItemClick(q.id); setNotShow(!show)}}>
                        <h4>{q.question}</h4>
                        {show === false
                            ? <FontAwesomeIcon icon={faPlus} style={{color: "#fcfcfc",width:"50px",}} />
                            : <FontAwesomeIcon icon={faMinus} style={{color: "#fcfcfc",width:"50px",}} />
                        }
                        </div>
                        </>
                    ))}
                    {/* Done... */}
                    {show && toggleAns !== null && (
                        <div className='box'>
                            <p>
                                {Questions.find((q) => q.id === toggleAns).ans}
                            </p>
                        </div>
                    )}

                </div>

                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                <form action='' method='post'>
                    <div className='input'>
                        <input type='text' placeholder='Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <Link className="link" to="/registration"><button type='submit' className='btn'>Get Started</button></Link>
                </form>
            </div>
        </div>
    )
}
