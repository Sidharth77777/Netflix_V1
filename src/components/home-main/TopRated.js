import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MoviePoster } from './URLS';
import { TopRatedMovies, TopRatedMovies2, TopRatedMovies3 } from './URLS';
import LazyLoad from 'react-lazyload';

export default function TopRated({ title }) {

    const [seeMore, setSeeMore] = useState(false);
    const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);

    const [topRated, setTopRated] = useState();
    const [topRated2, setTopRated2] = useState();
    const [topRated3, setTopRated3] = useState();

    useEffect(() => {
        axios.get(TopRatedMovies).then((response) => {
            //console.log(response.data.results);
            setTopRated(response.data.results);
        }).catch((error) => { console.log("Error Fetching Data", error) })
        axios.get(TopRatedMovies2).then((response) => {
            //console.log(response.data.results);
            setTopRated2(response.data.results);
        }).catch((error) => { console.log("Error Fetching Data", error) })
        axios.get(TopRatedMovies3).then((response) => {
            //console.log(response.data.results);
            setTopRated3(response.data.results);
        }).catch((error) => { console.log("Error Fetching Data", error) })
    }, [])

    const LoadMore = () => {
        return (topRated2 && topRated2.map((act) => (
            <div className='slide' key={act.id}>
                <LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
                <div className='vote'>
                    <p>{act.vote_average}</p>
                </div>
            </div>)
        ))
    }
    const LoadMore2 = () => {
        return (topRated3 && topRated3.map((act) => (
            <div className='slide' key={act.id}>
                <LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
                <div className='vote'>
                    <p>{act.vote_average}</p>
                </div>
            </div>)
        ))
    }

    return (
        <div id='NetflixOriginals' className='topRated'>
            <div className='background'>
                <h2>{title}</h2>
                <div className='slider'>

                    {topRated && topRated.map((top) => (
                        <div className='slide' key={top.id}>
                            <LazyLoad><img src={MoviePoster + top.poster_path} alt={top.title} /></LazyLoad>
                            <div className='vote'>
                                <p>{top.vote_average}</p>
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
