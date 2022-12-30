import Row from "./Components/Row";
import './App.css';
import Banner from "./Components/Banner";
import requests from "./request";
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      
      <Row
      isLargeRow={true} 
      title="Netflix OG" 
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
