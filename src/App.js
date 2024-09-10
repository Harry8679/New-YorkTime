import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';

const App = () => {
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    // Utilisation de la clé API depuis le fichier .env
    const apiKey = process.env.REACT_APP_NYT_API_KEY;
    
    fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data.results);
        setResults(data.results);
      });
  }, []);

  return (
    <div className="App">
      <div className="col-md-6 offset-3 card text-center mt-5">
        <Nav />
        <br />
        {results.map((result, index) => {
          return <div key={index}><Card {...result} /><br /></div>;
        })}
      </div>
    </div>
  );
}

export default App;
