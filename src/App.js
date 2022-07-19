import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import requests from './Components/Requests';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row className="trending" trending="true" title = "Trending" fetchUrl = {requests.fetchTrending} />
       <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} />
     
       <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
       <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies} />
       <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
       <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
       <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
       <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
