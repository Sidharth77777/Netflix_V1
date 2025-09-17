import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NetflixOriginalsMovies, NetflixOriginalsMovies2, NetflixOriginalsMovies3 } from './URLS'
import { MoviePoster } from './URLS'
import LazyLoad from 'react-lazyload'

export default function NetflixOriginals({ title }) {

	const [seeMore, setSeeMore] = useState(false);
	const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);
	
	const [originals, setOriginals] = useState();
	const [originals2, setOriginals2] = useState();
	const [originals3, setOriginals3] = useState();

	useEffect(() => {
		axios.get(NetflixOriginalsMovies).then((response) => {
			//console.log(response.data.results);
			setOriginals(response.data.results)
		}).catch((error) => { console.log("Error Happened", error) });

		axios.get(NetflixOriginalsMovies2).then((response) => {
			//console.log(response.data.results);
			setOriginals2(response.data.results);
		}).catch((error) => { console.log("Error Happened getting new ones", error) });

		axios.get(NetflixOriginalsMovies3).then((response) => {
			//console.log(response.data.results);
			setOriginals3(response.data.results);
		}).catch((error) => { console.log("Error Happened getting new ones", error) });
	}, [])

	const LoadMore = () => {
		return (originals2 && originals2.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}
	const LoadMore2 = () => {
		return (originals3 && originals3.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}

	return (
		<div id='NetflixOriginals'>
			<div className='background'>
				<h2>{title}</h2>
				<div className='slider'>

					{originals && originals.map((org) => (
						<div className='slide' key={org.id}>
							<LazyLoad><img alt={org.title} src={MoviePoster + org.poster_path} /></LazyLoad>
							<div className='vote'>
								<p>{org.vote_average}</p>
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
