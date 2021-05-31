import React, { useEffect, useState }  from "react"
import ApiHelper  from "../helpers/api"

const ProductList = props => {
    const[products, setProducts] = useState([]);

useEffect(() => {
    ApiHelper.CategoryProducts.all().then((prodList) =>{
        setProducts(prodList);
    } );
    ApiHelper.CategoryProducts.getByCategoryId(props.match.params.id).then((prodList) =>{
        setProducts(prodList);
    } );
    ApiHelper.CategoryProducts.createProduct(props.match.params.id).then((prodList) =>{
        setProducts(prodList);
    } );
    ApiHelper.CategoryProducts.updateProduct(props.match.params.id).then((prodList) =>{
        setProducts(prodList);
    } );
    
    ApiHelper.CategoryProducts.deleteProduct(props.match.params.id).then((prodList) =>{
        setProducts(prodList);
    });
}, [props]);


    return (<div>Test</div>);

   
};
export default ProductList;

