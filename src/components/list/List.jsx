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
                    Lorem, ipsum dolor sit amet consectetur 
                    adipisicing elit. Natus totam laudantium.
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