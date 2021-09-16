import { createStore, combineReducers } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'

// 3 arguments for createStore:
// 1) primary reducer
// 2) initial state of the app
// 3) middlewares/plugins

export const initialState = {
  cart: {
    products: [],
  },
  user: {
    firstName: '',
  },
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

const configureStore = createStore(
  bigReducer,
  initialState,
  process.env.REACT_APP_DEVELOPMENT && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
