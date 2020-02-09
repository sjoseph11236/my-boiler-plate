import { createStore, applyMiddleware, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import  reduce  from './reducers/reduce'


const reducer = combineReducers({reduce})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store;