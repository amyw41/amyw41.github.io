

import './App.css';

export default function App() {
	return (
		<div className="App">
			<nav className="navbar">
				<div className="nav-left">home</div>
				<div className="nav-right">
					<span>me</span>
					<span style={{ marginLeft: '24px' }}>play</span>
				</div>
			</nav>
			<main className="main-content">
				<div className="name-block">
					<h1 className="name">amy wang</h1>
				</div>
				<div className="desc-block">
					<div className="desc-line">→ a product designer who uses <i>aesthetics</i> and makes it work.</div>
					<div className="desc-line">→ currently @ Waterloo for Management Engineering</div>
					<div className="loading-circle"></div>
				</div>
			</main>
			<div className="see-my-work-curve">
				<span>see my work!&nbsp;&nbsp;&nbsp;see my work!&nbsp;&nbsp;&nbsp;see my work!&nbsp;&nbsp;&nbsp;see my work!&nbsp;&nbsp;&nbsp;see my work!</span>
			</div>
		</div>
	);
}
