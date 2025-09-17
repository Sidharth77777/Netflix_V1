import React,{useState} from 'react'

export default function Registration2({setsecondShow,setfirstShow}) {

    const changeShow = () => {
        setfirstShow(false);
        setsecondShow(true);
    }

    return (
        <div id='registration2'>
            <div className='wrapper'>
                <div className='img'>
                    <img alt='reg1' src={require("./../../assets/registration1.png")} />
                </div>
                <p className='black'>STEP 1 OF 3</p>
                <h2 className='black'>Finish setting up your<br />account</h2>
                <p className='black size'>Netflix is personalised for you.<br />Create a password to watch on any<br />device at any time.</p>
                <div className='button'>
                    <button className='btn' onClick={changeShow}>Next</button>
                </div>
            </div>
        </div>
    )
}
