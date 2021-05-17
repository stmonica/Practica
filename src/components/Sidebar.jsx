import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import ApiHelper from "../helpers/api";
import "../style/sidebar.css";

const Sidebar = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    ApiHelper.ProductCategories.all().then((mappedApiCategories) => {
      setCategories(mappedApiCategories);
    });
  }, [props]);

  return (
    <Nav className="d-md-block bg-light sidebar">
      {categories.map((c) => (
        <Nav.Item key={c.categoryId}>
          <Nav.Link as={Link} to={`/products/${c.categoryId}`}>
            {c.name}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};
export default Sidebar;
