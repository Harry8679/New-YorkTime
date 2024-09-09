import './App.css';

const App = () => {
  return (
    <div className="App">
      <div class="col-md-6 offset-3 card text-center mt-5">
        <div class="card-header">
          <ul class="nav nav-pills card-header-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#">Top Stories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Most Popular</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default App;
