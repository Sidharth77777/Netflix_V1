import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Registration5Main() {

    const[Box1,setBox1] = useState(true);
    const[Box2,setBox2] = useState(false);
    const[Box3,setBox3] = useState(false);
    const[Box4,setBox4] = useState(false);
    const [colors, setColors] = useState(false);

    const changeColor = () => {
        setBox1(true);
        setBox2(false);
        setBox3(false);
        setBox4(false);
        setColors(!colors);
    }
    const changeColor2 = () => {
        setBox1(false);
        setBox2(true);
        setBox3(false);
        setBox4(false);
        setColors(!colors);
    }
    const changeColor3 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(true);
        setBox4(false);
        setColors(!colors);
    }
    const changeColor4 = () => {
        setBox1(false);
        setBox2(false);
        setBox3(false);
        setBox4(true);
        setColors(!colors);
    }

    

    return (
        <div id='main'>
            <div className='first one'>
                <p className='black'>Video Quality</p>
                <div className='second'>
                    <div className='box pointer' onClick={changeColor}>
                        <div className='mobile' style={Box1 && colors ? {backgroundColor:"red"} : {backgroundColor:"#ef6b72"}} onClick={changeColor} >
                            <p>Mobile</p>
                        </div>
                        <p className='black' style={Box1 && colors ? { color: "#ef6b72" } : { color: "#000" }}
                            onClick={changeColor} >Good</p>
                    </div>
                    <div className='box pointer' onClick={changeColor2}>
                        <div className='mobile' style={Box2 && colors ? {backgroundColor:"red"} : {backgroundColor:"#ef6b72"}} onClick={changeColor2}>
                            <p>Basic</p>
                        </div>
                        <p className='black' style={Box2 && colors ? { color: "#ef6b72" } : { color: "#000" }}
                            onClick={changeColor2}>Good</p>
                    </div>
                    <div className='box pointer' onClick={changeColor3}>
                        <div className='mobile' style={Box3 && colors ? {backgroundColor:"red"} : {backgroundColor:"#ef6b72"}} onClick={changeColor3}>
                            <p>Standard</p>
                        </div>
                        <p className='black' style={Box3 && colors ? { color: "#ef6b72" } : { color: "#000" }}
                            onClick={changeColor3}>Better</p>
                    </div>
                    <div className='box pointer' onClick={changeColor4}>
                        <div className='mobile' style={Box4 && colors ? {backgroundColor:"red"} : {backgroundColor:"#ef6b72"}} onClick={changeColor4}>
                            <p>Advanced</p>
                        </div>
                        <p className='black' style={Box4 && colors ? { color: "#ef6b72" } : { color: "#000" }}
                            onClick={changeColor4}>Best</p>
                    </div>
                </div>
            </div>
            <hr className='black' />

            <div className='first two'>
                <p className='black'>Resolution</p>
                <div className='box'>
                    <p className='black pointer' style={Box1 && colors ? { color: "#ef6b72" } : { color: "#000" }} onClick={changeColor} >480p</p>
                    <p className='black pointer' style={Box2 && colors ? { color: "#ef6b72" } : { color: "#000" }} onClick={changeColor2}>720p</p>
                    <p className='black pointer' style={Box3 && colors ? { color: "#ef6b72" } : { color: "#000" }} onClick={changeColor3}>1080p</p>
                    <p className='black pointer' style={Box4 && colors ? { color: "#ef6b72" } : { color: "#000" }} onClick={changeColor4}>4K+HDR</p>
                </div>
            </div>
            <hr className='black' />

            <div className='three'>
                <p className='black'>Devices you can use to watch</p>
                <div className='box'>

                    <div className='box-1'>
                        <div className='sub-box pointer' style={Box1 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='phone' src={require("./../../assets/mobile-solid.svg").default} />
                            </div>
                            <p className='black'>Phone</p>
                        </div>
                        <div className='sub-box pointer' style={Box1 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/tablet-solid.svg").default} />
                            </div>
                            <p className='black'>Tablet</p>
                        </div>
                    </div>

                    <div className='box-1'>
                        <div className='sub-box pointer' style={Box2 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='phone' src={require("./../../assets/mobile-solid.svg").default} />
                            </div>
                            <p className='black'>Phone</p>
                        </div>
                        <div className='sub-box pointer' style={Box2 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/tablet-solid.svg").default} />
                            </div>
                            <p className='black'>Tablet</p>
                        </div>
                        <div className='sub-box pointer' style={Box2 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/computer-solid.svg").default} />
                            </div>
                            <p className='black'>Computer</p>
                        </div>
                        <div className='sub-box pointer' style={Box2 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/tv-solid.svg").default} />
                            </div>
                            <p className='black'>TV</p>
                        </div>
                    </div>

                    <div className='box-1'>
                        <div className='sub-box pointer' style={Box3 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='phone' src={require("./../../assets/mobile-solid.svg").default} />
                            </div>
                            <p className='black'>Phone</p>
                        </div>
                        <div className='sub-box pointer' style={Box3 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/tablet-solid.svg").default} />
                            </div>
                            <p className='black'>Tablet</p>
                        </div>
                        <div className='sub-box pointer' style={Box3 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/computer-solid.svg").default} />
                            </div>
                            <p className='black'>Computer</p>
                        </div>
                        <div className='sub-box pointer' style={Box3 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/tv-solid.svg").default} />
                            </div>
                            <p className='black'>TV</p>
                        </div>
                    </div>

                    <div className='box-1'>
                        <div className='sub-box pointer' style={Box4 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='phone' src={require("./../../assets/mobile-solid.svg").default} />
                            </div>
                            <p className='black'>Phone</p>
                        </div>
                        <div className='sub-box pointer' style={Box4 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/tablet-solid.svg").default} />
                            </div>
                            <p className='black'>Tablet</p>
                        </div>
                        <div className='sub-box pointer' style={Box4 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/computer-solid.svg").default} />
                            </div>
                            <p className='black'>Computer</p>
                        </div>
                        <div className='sub-box pointer' style={Box4 && colors ? {border:"2px solid red"} : {border:"none"}}>
                            <div className='logo'>
                                <img alt='tab' src={require("./../../assets/tv-solid.svg").default} />
                            </div>
                            <p className='black'>TV</p>
                        </div>
                    </div>

                </div>
            </div>
            <hr className='black' />

            <div className='more'>
                <p className='grey'>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all<br />resolutions. See our <Link className='terms' to="/unavailable">Terms of Use</Link> for more details.</p>
                <p className='grey'>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and<br />Mobile.</p>
            </div>

            <div className='button'>
                <Link to="/home">
                    <button className='btn'>Next</button>
                </Link>
            </div>
        </div>
    )
}
