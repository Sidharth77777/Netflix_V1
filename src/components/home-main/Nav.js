import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ Error,NavId }) {

	return (
		<div className='header' id={NavId}>
			<header>
				<div className='logo'>
					<Link to="/"><img title="Sign Out from Site!" alt='logo' src={require("./../../assets/netflix-removebg-preview.png")} /></Link>
				</div>
				{Error && <h2 className='error'>{Error} ! Please Check you internet connection....</h2>}

				<div className='bar' title='Click to go to top'>
					<a href={`#${NavId}`}><img alt='navbar' src={require("./../../assets/nav-bar.png")} /></a>
				</div>
			</header>
		</div>
	)
}
