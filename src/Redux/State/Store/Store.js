import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../Reducers'
import { configureStore } from '@reduxjs/toolkit'


export const store = createStore(rootReducer, {}, applyMiddleware(thunk))

// export const store = configureStore({
//     reducer: rootReducer
// })