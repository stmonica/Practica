import "./App.css";
import Sidebar from "./components/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/sidebar.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} id="sidebar-wrapper" className="d-none d-sm-block">
          <Sidebar />
        </Col>
        <Col lg={10} xs={12} id="page-content-wrapper">
          <Switch>
            <Route
              path="/products/:id"
              render={(props) => {
                <ProductList {...props} />;
              }}
            />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}

export default App;