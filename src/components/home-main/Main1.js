import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import axios from 'axios';
import { RecommendedList } from './URLS';
import Slider from 'react-slick'


export default function Main1() {

	const NavId = 'nav';

	const [changeRecomended, setChangeRecomended] = useState(null);
	const [recomendedList,setrecomendedList] = useState();
	const [background, setBackground] = useState();
	const [Error, setError] = useState(null);

	const newRecomends = () => {
		const randomNumber = Math.floor(Math.random() * 5) + 1;
		setChangeRecomended(randomNumber);

		if (changeRecomended == 1) {
			setrecomendedList('https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=5')
			console.log(1);
		}
		else if (changeRecomended == 2) {
			setrecomendedList('https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=2')
			console.log(2);
		}
		else if (changeRecomended == 3) {
			setrecomendedList('https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=1')
			console.log(3);
		}
		else if (changeRecomended == 4) {
			setrecomendedList('https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=4')
			console.log(4);
		}
		else {
			setrecomendedList('https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=5')
			console.log(5);
		}
		
	}

	useEffect(() => {
		changeRecomended ? axios.get(recomendedList).then((response) => {
			console.log(response.data.results);
			setBackground(response.data.results);
		}).catch((error) => { 
			console.log("Error happened", error);
			setError(error.message)
		}) : 
		axios.get(RecommendedList).then((response) => {
			console.log(response.data.results);
			setBackground(response.data.results);
		}).catch((error) => { 
			console.log("Error happened", error);
			setError(error.message)
		})
	}, [])

	
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		fade: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};
	return (
		<>
			<Nav Error={Error} NavId={NavId} />

			<div id='Slider'>
				<Slider {...settings} className='slide'>

					{background && background.map((bg) => (
						<div id='Main1' key={bg.id}>
							<div className='highlighted' style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w500${bg.backdrop_path})`}}>
								<h1>{bg.title}</h1>
								<p>{bg.release_date}</p>
								<div className='buttons'>
									<button className='btn'>Play Trailer</button>
									<button className='btn' onClick={newRecomends}>Click for New Reccomendations</button>
								</div>
								<p>{bg.overview}</p>
							</div>
						</div>
					))}
				</Slider>

			</div>
		</>
	)
}
