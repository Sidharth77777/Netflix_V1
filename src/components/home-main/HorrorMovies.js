import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MoviePoster } from './URLS'
import { HorrorMovieList, HorrorMovieList2, HorrorMovieList3 } from './URLS'
import LazyLoad from 'react-lazyload';

export default function HorrorMovies({ title }) {

	const [seeMore, setSeeMore] = useState(false);
	const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);

	const [horrorMovie, setHorrorMovie] = useState();
	const [horrorMovie2, setHorrorMovie2] = useState();
	const [horrorMovie3, setHorrorMovie3] = useState();

	useEffect(() => {
		axios.get(HorrorMovieList).then((response) => {
			//console.log(response.data.results);
			setHorrorMovie(response.data.results);
		}).catch((error) => { console.log("Error Happened", error) })
		axios.get(HorrorMovieList2).then((response) => {
			//console.log(response.data.results);
			setHorrorMovie2(response.data.results);
		}).catch((error) => { console.log("Error Happened", error) })
		axios.get(HorrorMovieList3).then((response) => {
			//console.log(response.data.results);
			setHorrorMovie3(response.data.results);
		}).catch((error) => { console.log("Error Happened", error) })
	}, [])

	const LoadMore = () => {
		return (horrorMovie2 && horrorMovie2.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}
	const LoadMore2 = () => {
		return (horrorMovie3 && horrorMovie3.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}

	return (
		<div id='NetflixOriginals' className='horrorMovies'>
			<div className='background'>
				<h2>{title}</h2>
				<div className='slider'>

					{horrorMovie && horrorMovie.map((hor) => (
						<div className='slide' key={hor.id}>
							<LazyLoad><img alt={hor.title} src={MoviePoster + hor.poster_path} /></LazyLoad>
							<div className='vote'>
								<p>{hor.vote_average}</p>
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
