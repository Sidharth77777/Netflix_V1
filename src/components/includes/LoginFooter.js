import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default function LoginFooter(props) {

    const { divId } = props;
    const [lang,setLang] = useState("English")

    return (
        <div>
            <footer id='LoginFooter'>
                <div className='container wrapper'>
                    <p>Questions? Call <span>000-800-919-1694</span></p>
                    <div className='footer'>
                        <div className='box'>
                            <ul>
                                <li><a href={`#${divId}`}>FAQ</a></li>
                                <li><Link to="/unavailable">Investor Relations</Link></li>
                                <li><Link to="/unavailable">Privacy</Link></li>
                                <li><Link to="/unavailable">Speed Test</Link></li>
                            </ul>
                        </div>
                        <div className='box'>
                            <ul>
                                <li><Link to="/unavailable">Help Centre</Link></li>
                                <li><Link to="/unavailable">Jobs</Link></li>
                                <li><Link to="/unavailable">Cookie Preferences</Link></li>
                                <li><Link to="/unavailable">Legal Notices</Link></li>
                            </ul>
                        </div>
                        <div className='box'>
                            <ul>
                                <li><Link to="/unavailable">Account</Link></li>
                                <li><Link to="/unavailable">Ways to Watch</Link></li>
                                <li><Link to="/unavailable">Corporate Informations</Link></li>
                                <li><Link to="/unavailable">Only on Netflix</Link></li>
                            </ul>
                        </div>
                        <div className='box'>
                            <ul>
                                <li><Link to="/unavailable">Media Centre</Link></li>
                                <li><Link to="/unavailable">Terms of Use</Link></li>
                                <li><Link to="/unavailable">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>


                    <div className='drop-menu'>
                        <div className='lang'>
                            <FontAwesomeIcon icon={faLanguage} style={{ color: "#fcfcfc", }} />
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">{lang} <FontAwesomeIcon icon={faCaretDown} style={{ color: "#fcfcfc", }} /></button>
                            <div class="dropdown-content">
                                <a href="#"  onClick={() => setLang('Malayalam')}>Malayalam</a>
                                <a href="#" onClick={() => setLang('Hindi')}>Hindi</a>
                                <a href="#" onClick={() => setLang('Tamil')}>Tamil</a>
                            </div>
                        </div>
                    </div>

                    <p>NetFlix Free</p>

                </div>
            </footer>
        </div>
    )
}
