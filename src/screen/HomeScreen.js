import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../request'

function HomeScreen() {
  return (
    <div className='homescreen'>
        <Nav/>
        <Banner/>
        
        <Row title="Trending Today" fetchUrl={requests.fetchTrending} isLargeRow/>
        <Row title="Popular on Netflix" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Romance/Teen" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen