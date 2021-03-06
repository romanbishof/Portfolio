import React from 'react'
import "./intro.css"

export default function Intro() {
    return (
        <div className= "intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="intro-intro">Hi, welcome to my porfolio, my name is </h2>
                    <h2 className="intro-name">Roman Bishof</h2>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="intro-title-item">Full Stack Developer</div>
                            <div className="intro-title-item">Web developer</div>
                        </div>
                    </div>
                    <p className="intro-disc">
                        Junior developer and designer of websites and web services via modern tools and technologies. 
                    </p>
                    
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-bg"></div>
            </div>
        </div>
    )
}
