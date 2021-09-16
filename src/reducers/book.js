// what are we going to do with the book reducer?
// primarily fill up the stock array into the books sub-object of the store
// and log any error in the process

import { initialState } from '../store'

// FILL_BOOKS
// FILL_BOOKS_LOADING
// FILL_BOOKS_ERROR

// {
//     stock: [],
//     loading: true,
//     error: false,
// }

const bookReducer = (state = initialState.book, action) => {
  switch (action.type) {
    case 'FILL_BOOKS':
      return {
        ...state,
        stock: action.payload,
      }

    case 'FILL_BOOKS_LOADING':
      return {
        ...state,
        loading: action.payload,
      }

    case 'FILL_BOOKS_ERROR':
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default bookReducer
