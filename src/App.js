import "./App.css";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "./components/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/sidebar.css";
import AddCategory from "./components/Admin/AddCategory";
import ProductsList from "./components/Home/ProductsList";
import CategoriesList from "./components/Home/CategoriesList";
import Products from "./components/Products"
import { Link } from 'react-router-dom';
import {Navigation} from "./components/Navigation";

function App() {
  return (
    
    <Container fluid>
       <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center" >
       Magazin Online
     </h3>
     <Navigation/>
     <Sidebar/>
    

     <Switch>
       
       <Route path="/productslist"  component={ProductsList}/>
          
       <Route path='/categoriesList' component={CategoriesList}/>
     </Switch>
    </div>
    </BrowserRouter>
    
      <Row>
       
        <Col lg={10} xs={12} id="page-content-wrapper">
       
          <Switch>
            <Route
              path="/products/:id"
              render={(props) => {
                <Products {...props} />;
              }}
            />
          </Switch>
        </Col>
        </Row>
        <Col xs={50} id="wrapper" className="row justify-content-md-center">
        
        
        <Products/>
      </Col>
        <Col lg={50} id="wrapper" className="row justify-content-md-center">
        
          <CategoriesList/>
          <ProductsList/>
        </Col>
   

    </Container>
  );
}

export default App;