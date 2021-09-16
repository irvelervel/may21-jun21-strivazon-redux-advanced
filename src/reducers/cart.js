import { initialState } from '../store'

// we want to restore the featureset we had at the end of monday morning:
// - be able to add items to the cart -> 'ADD_ITEM_TO_CART'
// - be able to remove an item from the cart -> 'REMOVE_ITEM_FROM_CART'
// - be able to set the username -> 'SET_USERNAME'

// cartReducer now is just mantaining this slice of the redux store:
// {
//   products: []
// }

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      //   state.cart.products.push(action.payload)
      //   YOU CANNOT CHANGE THE STATE YOU'RE COMING FROM
      return {
        // action.payload now is the book
        // we need to remember that we're not allowed to manipulate our arguments
        ...state,
        products: [...state.products, action.payload],
      }
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        products: state.products.filter((book, i) => i !== action.payload),
        //   products: [
        //     ...state.cart.products.slice(0, action.payload),
        //     ...state.cart.products.slice(action.payload + 1, state.cart.products.length),
        //   ],
      }
    default:
      return state
  }
}

export default cartReducer
