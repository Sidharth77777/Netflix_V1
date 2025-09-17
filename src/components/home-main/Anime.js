import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MoviePoster } from './URLS'
import { AnimeList, AnimeList2, AnimeList3 } from './URLS'
import LazyLoad from 'react-lazyload';

export default function Anime({ title }) {

	const [seeMore, setSeeMore] = useState(false);
	const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);

	const [anime, setAnime] = useState();
	const [anime2, setAnime2] = useState();
	const [anime3, setAnime3] = useState();

	useEffect(() => {
		axios.get(AnimeList).then((response) => {
			//console.log(response.data.results);
			setAnime(response.data.results);
		}).catch((error) => { console.log("Error happened", error) })
		axios.get(AnimeList2).then((response) => {
			//console.log(response.data.results);
			setAnime2(response.data.results);
		}).catch((error) => { console.log("Error happened", error) })
		axios.get(AnimeList3).then((response) => {
			//console.log(response.data.results);
			setAnime3(response.data.results);
		}).catch((error) => { console.log("Error happened", error) })
	}, [])

	const LoadMore = () => {
		return (anime2 && anime2.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}
	const LoadMore2 = () => {
		return (anime3 && anime3.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}

	return (
		<div id='NetflixOriginals' className='anime'>
			<div className='background'>
				<h2>{title}</h2>
				<div className='slider'>

					{anime && anime.map((anm) => (
						<div className='slide' key={anm.id}>
							<LazyLoad><img alt={anm.title} src={MoviePoster + anm.poster_path} /></LazyLoad>
							<div className='vote'>
								<p>{anm.vote_average}</p>
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
