import { Link } from 'react-router-dom';

function Taskbar() {
  return (
    <nav className="taskbar">
      <Link to="/" className="nav-left">home</Link>
      <span className="nav-right">
        <a href="#work">work</a>
        <Link to="/me">about</Link>
        <Link to="/play">play</Link>
      </span>
    </nav>
  );
}

export default Taskbar;
