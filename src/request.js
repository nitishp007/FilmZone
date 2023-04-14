// require("").config();
// // console.log(`${process.env.API_KEY}`)
// const MY_KEY=process.env.API_KEY;
const MY_KEY="b7c084aee2999fd2d5b1fed7c111ef8f";
const requests ={
    fetchTrending:`/trending/all/day?api_key=${MY_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${MY_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${MY_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${MY_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${MY_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${MY_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${MY_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${MY_KEY}&with_genres=99`,
};

export default requests;