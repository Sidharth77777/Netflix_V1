//import axios from "axios";

export const MoviePoster = 'https://image.tmdb.org/t/p/w500/';

var num = Math.floor(Math.random() * 5) + 1;

if (num == 1){
    var RecommendedList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=10';
    console.log(num);
}
else if (num == 2) {
    var RecommendedList = 'https://api.themoviedb.org/3/trending/movie/day?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=5';
    console.log(num);
}
else if (num == 3) {
    var RecommendedList = 'https://api.themoviedb.org/3/trending/movie/day?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=5';
    console.log(num);
}
else if (num == 4) {
    var RecommendedList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=1';
    console.log(num);
}else{
   var RecommendedList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=16&page=1';
   console.log(num);
}

export var RecommendedList;


//export const RecommendedList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=2' || 'https://api.themoviedb.org/3/trending/movie/day?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=5'

export const NetflixOriginalsMovies = 'https://api.themoviedb.org/3/discover/tv?api_key=c08b85d7666403e67a26b2cfa5580d27&with_networks=213&page=1';
export const NetflixOriginalsMovies2 = 'https://api.themoviedb.org/3/discover/tv?api_key=c08b85d7666403e67a26b2cfa5580d27&with_networks=213&page=2';
export const NetflixOriginalsMovies3 = 'https://api.themoviedb.org/3/discover/tv?api_key=c08b85d7666403e67a26b2cfa5580d27&with_networks=213&page=3';


export const TrendingMovies = 'https://api.themoviedb.org/3/trending/movie/day?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=1';
export const TrendingMovies2 = 'https://api.themoviedb.org/3/trending/movie/day?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=2';
export const TrendingMovies3 = 'https://api.themoviedb.org/3/trending/movie/day?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=3';

export const TopRatedMovies = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=1';
export const TopRatedMovies2 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=2';
export const TopRatedMovies3 = 'https://api.themoviedb.org/3/movie/top_rated?api_key=c08b85d7666403e67a26b2cfa5580d27&language=en-US&page=3';


export const ComedyMovieList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=35&page=1';
export const ComedyMovieList2 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=35&page=2';
export const ComedyMovieList3 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=35&page=3';

export const HorrorMovieList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=27&page=2';
export const HorrorMovieList2 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=27&page=1';
export const HorrorMovieList3 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=27&page=3';

export const ActionMovieList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=1';
export const ActionMovieList2 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=2';
export const ActionMovieList3 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=28&page=3';

export const RomanceMovieList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=10749&page=1';
export const RomanceMovieList2 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=10749&page=2';
export const RomanceMovieList3 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=10749&page=3';


export const DocumanteryList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=99&page=4';
export const DocumanteryList2 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=99&page=5';
export const DocumanteryList3 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=99&page=7';


export const AnimeList = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=16&page=2';
export const AnimeList2 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=16&page=1';
export const AnimeList3 = 'https://api.themoviedb.org/3/discover/movie?api_key=c08b85d7666403e67a26b2cfa5580d27&with_genres=16&page=3';
