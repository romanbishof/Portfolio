import React from 'react';
import "./about.css"
import CV from "../../CV/myCV.pdf"
const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                    alt=""
                    className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">
                    My hobby is my profession
                </p>
                <p className="about-desc">
                    I'm Junior Full stack web developer, with passion for creating full stack websites,<br />
                    working on making them responsive, dynamic, intuitive and well design. <br />
                    I met the world of code development during my BSc of electronics engineering and <br />
                    got so passionate about it, that I have decided to switch my career to my hobby. 
                </p>

                <p className="about-cv">
                    Get knowing me better - <a href={CV} className="cv" target="_blank" rel="noopener">My resume</a>
                </p>
                
            </div>
        </div>
    );
};

export default About;