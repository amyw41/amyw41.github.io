import { Link, useLocation, useNavigate } from 'react-router-dom';

function Taskbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleWorkClick = (e) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // Already on home page, scroll smoothly to work section
      const workSection = document.getElementById('work');
      if (workSection) {
        const elementPosition = workSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition + 200, behavior: 'smooth' });
      }
    } else {
      // On a different page, navigate to home and scroll
      navigate('/');
      // Use setTimeout to ensure the page loads before scrolling
      setTimeout(() => {
        const workSection = document.getElementById('work');
        if (workSection) {
          const elementPosition = workSection.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition + 400, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="taskbar">
      <Link to="/" className="nav-left">home</Link>
      <span className="nav-right">
        <a href="#work" onClick={handleWorkClick}>work</a>
        <Link to="/about">about</Link>
        <Link to="/play">play</Link>
      </span>
    </nav>
  );
}

export default Taskbar;
