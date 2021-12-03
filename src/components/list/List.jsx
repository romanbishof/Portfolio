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
            <div className="list-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
                
            </div>
        </div>
    );
};

export default List;