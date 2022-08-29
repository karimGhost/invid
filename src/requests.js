const API_KEY = "c3dc3fbcc6cdb0f78497bb23ceda5a7c";

const requests = {

  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedymovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorormovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticmovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;
