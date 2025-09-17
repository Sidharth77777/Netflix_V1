import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MoviePoster } from './URLS'
import { ComedyMovieList, ComedyMovieList2, ComedyMovieList3 } from './URLS'
import LazyLoad from 'react-lazyload';

export default function ComedyMovies({ title }) {

	const [seeMore, setSeeMore] = useState(false);
	const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);

	const [comedyMovie, setComedyMovie] = useState();
	const [comedyMovie2, setComedyMovie2] = useState();
	const [comedyMovie3, setComedyMovie3] = useState();

	useEffect(() => {
		axios.get(ComedyMovieList).then((response) => {
			//console.log(response.data.results);
			setComedyMovie(response.data.results);
		}).catch((error) => { console.log("Error happened", error) })
		axios.get(ComedyMovieList2).then((response) => {
			//console.log(response.data.results);
			setComedyMovie2(response.data.results);
		}).catch((error) => { console.log("Error happened", error) })
		axios.get(ComedyMovieList3).then((response) => {
			//console.log(response.data.results);
			setComedyMovie3(response.data.results);
		}).catch((error) => { console.log("Error happened", error) })
	}, [])

	const LoadMore = () => {
		return (comedyMovie2 && comedyMovie2.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}
	const LoadMore2 = () => {
		return (comedyMovie3 && comedyMovie3.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}

	return (
		<div id='NetflixOriginals' className='comedyMovies'>
			<div className='background'>
				<h2>{title}</h2>
				<div className='slider'>

					{comedyMovie && comedyMovie.map((com) => (
						<div className='slide' key={com.id}>
							<LazyLoad><img alt={com.title} src={MoviePoster + com.poster_path} /></LazyLoad>
							<div className='vote'>
								<p>{com.vote_average}</p>
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
