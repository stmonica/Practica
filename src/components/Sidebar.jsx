import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import ApiHelper from "../helpers/api";
import "../style/sidebar.css";


const Sidebar = (props) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
 

  useEffect(() => {
    ApiHelper.ProductCategories.getById(props.match.params.category).then((mappedApiCategories) => {
      setCategory(mappedApiCategories);
      // console.log(categories);
    });
    ApiHelper.ProductCategories.all().then((mappedApiCategories) => {
      setCategories(mappedApiCategories);
      // console.log(category);
    });
    ApiHelper.ProductCategories.create(props.match.params.category).then((mappedApiCategories) => {
      setCategory(mappedApiCategories);
      //  console.log(category);
    });
    ApiHelper.ProductCategories.update(props.match.params.category).then((mappedApiCategories) => {
      setCategory(mappedApiCategories);
      // console.log(categories);
    });
    ApiHelper.ProductCategories.delete(props.match.params.category).then((mappedApiCategories) => {
      setCategory(mappedApiCategories);
      // console.log(categories);
    });
  }, [props]);

 

  return (
    <Nav className="d-md-block bg-light sidebar">
      {categories.map((c) => (
        <Nav.Item key={c.categoryId}>
          <Nav.Link as={Link} to={`/products/${c.categoryId}`}>
            Name: {c.name} 
          </Nav.Link>
        </Nav.Item>
      ))}
     
    </Nav>
    
  );
};

export default Sidebar;
