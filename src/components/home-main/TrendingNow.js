import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { TrendingMovies, TrendingMovies2, TrendingMovies3 } from './URLS';
import { MoviePoster } from './URLS';
import LazyLoad from 'react-lazyload';

export default function TrendingNow({ title }) {

	const [seeMore, setSeeMore] = useState(false);
	const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);

	const [trending, setTrending] = useState();
	const [trending2, setTrending2] = useState();
	const [trending3, setTrending3] = useState();

	useEffect(() => {
		axios.get(TrendingMovies).then((response) => {
			//console.log(response.data.results)
			setTrending(response.data.results)
		}).catch((error) => { console.log("Error Happened", error) })
		axios.get(TrendingMovies2).then((response) => {
			//console.log(response.data.results)
			setTrending2(response.data.results)
		}).catch((error) => { console.log("Error Happened", error) })
		axios.get(TrendingMovies3).then((response) => {
			//console.log(response.data.results)
			setTrending3(response.data.results)
		}).catch((error) => { console.log("Error Happened", error) })
	}, [])

	const LoadMore = () => {
		return (trending2 && trending2.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}
	const LoadMore2 = () => {
		return (trending3 && trending3.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}

	return (
		<div id='NetflixOriginals' className='trendingnow'>
			<div className='background'>
				<h2>{title}</h2>
				<div className='slider'>

					{trending && trending.map((trend) => (
						<div className='slide' key={trend.id}>
							<LazyLoad><img alt={trend.title} src={MoviePoster + trend.poster_path} /></LazyLoad>
							<div className='vote'>
								<p>{trend.vote_average}</p>
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
