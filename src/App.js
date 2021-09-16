import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import CartIndicator from "./components/CartIndicator";
import BookStore from "./components/BookStore";
import Cart from "./components/Cart";
import { Route, Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const App = () => (
  <Router>
    <Container>
      <Row>
        <Col sm={12} className="text-center background-div">
          <Link to="/">
            <h1>Strivazon Book Store</h1>
          </Link>
        </Col>
        <CartIndicator />
      </Row>
      <hr />
      <Route path="/" exact component={BookStore} />
      <Route path="/cart" exact component={Cart} />
    </Container>
  </Router>
);

export default App;
