import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { setUsernameAction } from "../actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

// how do you connect a component to the store? using the connect function from 'react-redux'
// connect can take up to two parameters, and these parameters are functions:
// they are usually called mapStateToProps and mapDispatchToProps
// mapStateToProps is a function taking the whole redux store and returning an object,
// each key of this object will then became a prop of this react component

const CartIndicator = ({ history, location, match }) => {
  const [name, setName] = useState('')

  const firstName = useSelector(state => state.user.firstName)
  const cartLength = useSelector(state => state.cart.products.length)

  const dispatch = useDispatch()

  return (
    <div className="ml-auto mt-2">
      {
        firstName
          ? (
            <Button color="primary" onClick={() => history.push("/cart")}>
              <FaShoppingCart />
              <span className="ml-2">{cartLength}</span>
            </Button>
          )
          : (
            <FormControl
              placeholder="Insert your name"
              aria-label="Username"
              value={name}
              onChange={e => {
                setName(e.target.value)
              }}
              onKeyDown={e => {
                // console.log(e)
                if (e.key === 'Enter') {
                  // let's send the name value to the redux store!
                  dispatch(setUsernameAction(name))
                }
              }}
            />
          )
      }
    </div>
  )
}

export default withRouter(CartIndicator);
