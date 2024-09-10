import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';

const App = () => {
  return (
    <div className="App">
      <div class="col-md-6 offset-3 card text-center mt-5">
        <Nav />
        <br />
        <Card />
        <br />
        <Card />
      </div>
    </div>
  );
}

export default App;
