import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import ApiHelper from "../helpers/api";
import "../style/sidebar.css";
import Product from "../models/product";

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');

    useEffect(() => {
        
         ApiHelper.CategoryProducts.all().then((mappedApiProducts) => {
           setProducts(mappedApiProducts);
            console.log(product);
         });
    
       
      }, [props]);
    
  

    return (
        <div className="main_content">
            <h1>Products</h1>
            {products.map((p) =>
         <div className="card" key={p.productId}>
                <div className="card_img">
                    <img src={p.fileName} />
                </div>
                <div className="card_header">
                    <h2>{p.name}</h2>
                    <p>{p.description}</p>
                    <p className="price">{p.price}<span>{p.basePrice}</span></p>
                <div className="btn">Add to cart</div>
            </div>
        </div>
            )}
     </div>
        );
    };

export default Products;