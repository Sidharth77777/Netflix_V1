import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'



export default function Registration4({ setthirdShow, setsecondShow, setforthShow }) {

    const reShow = () => {
        setsecondShow(true);
        setthirdShow(false);
    }
    const changeShow = () => {
        setthirdShow(false);
        setforthShow(true);
    }

    return (
        <div id="registration4">
            <div className='wrapper'>
                <div className='logo'>
                    <img src={require("./../../assets/circle-tick.png")} alt='circle' className='circle' />
                </div>

                <button className='btn' onClick={reShow}><FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ecedef", marginRight: "8px" }} />Go Back</button>
                <p className='black margin'>STEP 2 OF 3</p>
                <h1 className='black'>Choose your plan.</h1>
                <div className='para'>
                    <div className='tick'>
                        <img alt='tick' src={require("./../../assets/tick.png")} />
                    </div>
                    <p className='black style'>No commitments, cancel anytime.</p>
                </div>
                <div className='para'>
                    <div className='tick'>
                        <img alt='tick' src={require("./../../assets/tick.png")} />
                    </div>
                    <p className='black style'>No ads and no extra fees. Ever.</p>
                </div>
                <div className='para'>
                    <div className='tick'>
                        <img alt='tick' src={require("./../../assets/tick.png")} />
                    </div>
                    <p className='black style'>Everything on Netflix for one low price.</p>
                </div>
                <div className='button'>
                <button className='btn' onClick={changeShow}>Next</button>
                </div>
            </div>
        </div>
    )
}
