import Button from "react-bootstrap/Button";
import { FaTrash } from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
import { connect } from 'react-redux'
import { removeFromCartAction } from "../actions";
import { useEffect } from "react";

const mapStateToProps = state => ({
  cart: state.cart.products,
  firstName: state.user.firstName
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: (index) => dispatch(removeFromCartAction(index))
})

const Cart = ({ cart, firstName, removeFromCart, history }) => {

  useEffect(() => {
    if (!firstName) {
      // I want to go back!
      history.push('/')
    }
  }, [])

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {cart.map((book, i) => (
            <li key={i} className="my-4">
              <Button variant="danger" onClick={() => removeFromCart(i)}>
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold">
          TOTAL:{" "}
          {cart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
        </Col>
      </Row>
    </Row>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
