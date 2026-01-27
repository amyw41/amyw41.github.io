import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <nav className="top-nav">
        <a href="#" className="nav-home">Home</a>
        <div className="nav-center">
          <a href="#work">Work</a>
          <a href="#playground">Playground</a>
          <a href="#about">About</a>
        </div>
        <a href="#contact" className="nav-contact">Contact</a>
      </nav>
      <div className="content">
        <h1>amy&nbsp;&nbsp;&nbsp;&nbsp;wang</h1>
        <p>a product designer with a creative heart and engineer's mind</p>
      </div>
    </div>
  );
}

export default App;
