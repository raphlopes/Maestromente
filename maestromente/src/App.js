import logo from './logo.svg';
import './bootstrap/css/bootstrap-grid.min.css';
import './App.css';
import Plateau from './Plateau';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maestromende</h1>
          <p>Placez vos pions ici !</p>
      </header>
      <Plateau />
    </div>
  );
}
export default App;
