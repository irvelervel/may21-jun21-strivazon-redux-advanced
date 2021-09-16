import { initialState } from '../store'

// we want to restore the featureset we had at the end of monday morning:
// - be able to add items to the cart -> 'ADD_ITEM_TO_CART'
// - be able to remove an item from the cart -> 'REMOVE_ITEM_FROM_CART'
// - be able to set the username -> 'SET_USERNAME'

// userReducer now is just mantaining this slice of the redux store:
// {
//   firstName: '',
// }

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        firstName: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
