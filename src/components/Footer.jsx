import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">let's build something together !</div>
            <div className="footer-right">
                <a href="mailto:amy.wang1@uwaterloo.ca">
                    <span className="footer-symbol">✿⋆.˚</span> <span className="footer-text">email</span>
                </a>
                <a href="https://www.linkedin.com/in/amyw41" target="_blank" rel="noopener noreferrer">
                    <span className="footer-symbol">𝜗𝜚⋆₊˚</span> <span className="footer-text">linkedin</span>
                </a>
                <a href="https://x.com/apriberri" target="_blank" rel="noopener noreferrer">
                    <span className="footer-symbol">𐙚⋆.˚</span> <span className="footer-text">x/twitter</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
