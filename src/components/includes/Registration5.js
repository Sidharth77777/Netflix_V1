import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Registration5Main from './Registration5Main'

export default function Registration5({ setthirdShow, setfourthShow }) {

    const reShow = () => {
        setfourthShow(false);
        setthirdShow(true);
    }

    return (
        <div id='registration5'>
            <div className='wrapper'>
                <button className='btn' onClick={reShow}><FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ecedef", marginRight: "8px" }} />Go Back</button>
                <p className='black'>STEP 3 OF 3</p>
                <h2 className='black'>Choose the plan thats right for you</h2>
                <div className='flex'>
                    <div className='para'>
                        <div className='logo'>
                            <img src={require("./../../assets/tick.png")} alt='tick' />
                        </div>
                        <p className='black'>Watch all you want. Ad-free.</p>
                    </div>
                    <div className='para'>
                        <div className='logo'>
                            <img src={require("./../../assets/tick.png")} alt='tick' />
                        </div>
                        <p className='black'>Recommendations just for you.</p>
                    </div>
                    <div className='para'>
                        <div className='logo'>
                            <img src={require("./../../assets/tick.png")} alt='tick' />
                        </div>
                        <p className='black'>Change or cancel your plan anytime.</p>
                    </div>
                </div>

                <Registration5Main />
                
            </div>
        </div>
    )
}
