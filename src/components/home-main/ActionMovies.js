import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MoviePoster } from './URLS'
import { ActionMovieList, ActionMovieList2, ActionMovieList3 } from './URLS'
import LazyLoad from 'react-lazyload';

export default function ActionMovies({ title }) {

    const [seeMore, setSeeMore] = useState(false);
    const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);

    const [actionMovie, setActionMovie] = useState();
    const [actionMovie2, setActionMovie2] = useState();
    const [actionMovie3, setActionMovie3] = useState();
    useEffect(() => {
        axios.get(ActionMovieList).then((response) => {
            //console.log(response.data.results);
            setActionMovie(response.data.results);
        }).catch((error) => { console.log("Error Happened", error) });

        axios.get(ActionMovieList2).then((response) => {
            //console.log(response.data.results);
            //console.log("NEW ACTION MOVIES")
            setActionMovie2(response.data.results);
        }).catch((error) => { console.log("Error Happened getting new ones", error) });

        axios.get(ActionMovieList3).then((response) => {
            //console.log(response.data.results);
            setActionMovie3(response.data.results);
        }).catch((error) => { console.log("Error Happened getting new ones", error) });
    }, [])

    const LoadMore = () => {
        return (actionMovie2 && actionMovie2.map((act) => (
            <div className='slide' key={act.id}>
                <LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
                <div className='vote'>
                    <p>{act.vote_average}</p>
                </div>
            </div>)
        ))
    }
    const LoadMore2 = () => {
        return (actionMovie3 && actionMovie3.map((act) => (
            <div className='slide' key={act.id}>
                <LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
                <div className='vote'>
                    <p>{act.vote_average}</p>
                </div>
            </div>)
        ))
    }

    return (
        <div id='NetflixOriginals' className='actionMovies'>
            <div className='background'>
                <h2>{title}</h2>
                <div className='slider'>

                    {actionMovie && actionMovie.map((act) => (
                        <div className='slide' key={act.id}>
                            <LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
                            <div className='vote'>
                                <p>{act.vote_average}</p>
                            </div>
                        </div>
                    ))}

                    {seeMore == false &&
                        <div className='slide' onClick={() => setSeeMore(true)}>
                            <h3>Load More</h3>
                        </div>
                    }
                    {seeMore && LoadMore()}
                    {seeMore && notLoaded && <div className='slide' onClick={() => {setSeeMore2(true);setNotLoaded(false)}}>
                        <h3>Load More</h3>
                    </div>}
                    {seeMore2 && LoadMore2()}

                </div>
            </div>
        </div>
    )
}
