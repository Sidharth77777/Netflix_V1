import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MoviePoster } from './URLS'
import { DocumanteryList, DocumanteryList2, DocumanteryList3 } from './URLS'
import LazyLoad from 'react-lazyload';

export default function Documentaries({ title }) {

	const [seeMore, setSeeMore] = useState(false);
	const [seeMore2, setSeeMore2] = useState(false);
	const [notLoaded, setNotLoaded] = useState(true);

	const [documantery, setDocumentary] = useState();
	const [documantery2, setDocumentary2] = useState();
	const [documantery3, setDocumentary3] = useState();

	useEffect(() => {
		axios.get(DocumanteryList).then((response) => {
			//console.log(response.data.results);
			setDocumentary(response.data.results);
		}).catch((error) => { console.log("Error Happened", error) })
		axios.get(DocumanteryList2).then((response) => {
			//console.log(response.data.results);
			setDocumentary2(response.data.results);
		}).catch((error) => { console.log("Error Happened", error) })
		axios.get(DocumanteryList3).then((response) => {
			//console.log(response.data.results);
			setDocumentary3(response.data.results);
		}).catch((error) => { console.log("Error Happened", error) })

	}, [])

	const LoadMore = () => {
		return (documantery2 && documantery2.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}
	const LoadMore2 = () => {
		return (documantery3 && documantery3.map((act) => (
			<div className='slide' key={act.id}>
				<LazyLoad><img alt={act.title} src={MoviePoster + act.poster_path} /></LazyLoad>
				<div className='vote'>
					<p>{act.vote_average}</p>
				</div>
			</div>)
		))
	}

	return (
		<div id='NetflixOriginals' className='documantaries'>
			<div className='background'>
				<h2>{title}</h2>
				<div className='slider'>

					{documantery && documantery.map((doc) => (
						<div className='slide' key={doc.id}>
							<LazyLoad><img alt={doc.title} src={MoviePoster + doc.poster_path} /></LazyLoad>
							<div className='vote'>
								<p>{doc.vote_average}</p>
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
