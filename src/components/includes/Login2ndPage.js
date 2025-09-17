import React from 'react'
import Video1 from './../../assets/video1.mp4'
import Video2 from './../../assets/video2.mp4'



export default function Login2ndPage() {
    return (
        <div id='Login2'>
            <div className='subpage'>
                <div className='container wrapper'>
                    <div className='left'>
                        <h1>Enjoy on your TV</h1>
                        <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast,Apple TV, Blu-ray players and more.</h3>
                    </div>
                    <div className='right'>
                        <div className='img-container video'>
                            <video src={Video1} autoPlay loop muted  type='video/mp4' alt="video1" >
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subpage'>
                <div className='container wrapper'>
                    <div className='left'>
                        <div className='img-container'>
                            <img src={require("./../../assets/stranger-things.png")} alt='stranger' />
                        </div>
                    </div>
                    <div className='right left'>
                    <h1>Download your shows to watch offline</h1>
                    <h3>Save your favourites easily and always have something to watch.</h3>
                    </div>
                </div>
            </div>
            <div className='subpage'>
                <div className='container wrapper'>
                    <div className='left'>
                        <h1>Watch everywhere</h1>
                        <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                    </div>
                    <div className='right'>
                    <div className='img-container video'>
                            <video src={Video2} autoPlay loop muted type='video/mp4' alt="video1" >
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className='subpage'>
                <div className='container wrapper'>
                    <div className='left'>
                    <div className='img-container'>
                            <img src={require("./../../assets/children.png")} alt='stranger' />
                        </div>
                    </div>
                    <div className='right left'>
                    <h1>Create profiles for kids</h1>
                    <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}
