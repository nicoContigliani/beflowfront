import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import productsReducer from './ProductDucks'

const rootReducer = combineReducers({
    product:productsReducer,

})




export default function generateStore() {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}