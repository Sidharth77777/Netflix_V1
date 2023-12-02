import React from 'react'
import { Helmet } from 'react-helmet'
import Main1 from './home-main/Main1'
import NetflixOriginals from './home-main/NetflixOriginals'
import TrendingNow from './home-main/TrendingNow'
import TopRated from './home-main/TopRated'
import ActionMovies from './home-main/ActionMovies'
import ComedyMovies from './home-main/ComedyMovies'
import HorrorMovies from './home-main/HorrorMovies'
import RomanceMovies from './home-main/RomanceMovies'
import Documentaries from './home-main/Documentaries'
import Anime from './home-main/Anime'


export default function MainPage() {

    return (
        <div id='MainPage'>
            <div className='wrapper'>
            <Helmet>
                <title>Home Page | Stream Now!</title>
            </Helmet>
            
            <Main1 />
            <NetflixOriginals title="NETFLIX ORIGINALS" />
            <TrendingNow title="Trending Now" />
            <TopRated title="Top Rated" />
            <ActionMovies title="Action Movies" />
            <ComedyMovies title="Comedy Movies" />
            <HorrorMovies title="Horror Movies" />
            <RomanceMovies title="Romance Movies" />
            <Documentaries title="Documentaries" />
            <Anime title="Animated" />

            </div>
        </div>
    )
}
