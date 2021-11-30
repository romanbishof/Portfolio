import React from 'react';
import "./about.css"
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
                    sub tittle - somthing somthing somthing somthing somthing 
                </p>
                <p className="about-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, beatae nostrum voluptate deleniti ut, nulla eaque, quia natus vero mollitia incidunt accusamus voluptates itaque veniam! Aspernatur numquam nostrum consequuntur aliquam?
                </p>
                
            </div>
        </div>
    );
};

export default About;