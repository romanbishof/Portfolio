import React from 'react';
import "./product.css"
const Product = ({img,linkGit,desc, link}) => {
    return (
        <div className="product">
            
            <a href={linkGit} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="product-img" />
            </a>
           
        </div>
    );
};

export default Product;