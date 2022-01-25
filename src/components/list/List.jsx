import React from 'react';
import Product from '../product/Product';
import "./list.css"
import {products} from "../../data"

const List = () => {
    return (
        <div className="list">
            <div className="list-text">
                <h1 className="list-title">Projects</h1>
                <p className="list-desc">
                    Here are a few of my projects I've worked on recently.
                </p>
            </div>
                <span>Click on image to go to Git repository {/* or the link below to go directly to the web page */}</span>
            <div className="list-list">
                {products.map((item, index) => (
                    <div key={index}>
                        <Product key={item.id} img={item.img} linkGit={item.linkGit} desc={item.desc} link={item.link}/>
                    </div>

                ))}
                
            </div>
        </div>
    );
};

export default List;