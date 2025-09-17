import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { RomanceMovieList,RomanceMovieList2,RomanceMovieList3 } from './URLS'
import { MoviePoster } from './URLS';
import LazyLoad from 'react-lazyload';

export default function RomanceMovies({ title }) {

    const [seeMore, setSeeMore] = useState(false);
	const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);

    const [romanceMovie, setRomanceMovie] = useState();
    const [romanceMovie2, setRomanceMovie2] = useState();
    const [romanceMovie3, setRomanceMovie3] = useState();

    useEffect(() => {
        axios.get(RomanceMovieList).then((response) => {
            //console.log(response.data.results);
            setRomanceMovie(response.data.results);
        }).catch((error) => { console.log("Error happened", error) })
        axios.get(RomanceMovieList2).then((response) => {
            //console.log(response.data.results);
            setRomanceMovie2(response.data.results);
        }).catch((error) => { console.log("Error happened", error) })
        axios.get(RomanceMovieList3).then((response) => {
            //console.log(response.data.results);
            setRomanceMovie3(response.data.results);
        }).catch((error) => { console.log("Error happened", error) })
    }, [])

    const LoadMore = () => {
		return (romanceMovie2 && romanceMovie2.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}
	const LoadMore2 = () => {
		return (romanceMovie3 && romanceMovie3.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}

    return (
        <div id='NetflixOriginals' className='romanceMovies'>
            <div className='background'>
                <h2>{title}</h2>
                <div className='slider'>

                    {romanceMovie && romanceMovie.map((rom) => (
                        <div className='slide' key={rom.id}>
                            <LazyLoad><img alt={rom.title} src={MoviePoster + rom.poster_path} /></LazyLoad>
                            <div className='vote'>
                                <p>{rom.vote_average}</p>
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
