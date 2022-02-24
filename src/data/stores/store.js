import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// const userFromStorage = localStorage.getItem('currentUser')
//   ? JSON.parse(localStorage.getItem('currentUser'))
//   : null
// const accessTokenFromStorage = localStorage.getItem('accessToken') || null


const middleware = [thunk]
// console.log(initialState)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
