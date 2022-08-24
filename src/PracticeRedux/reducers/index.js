import { combineReducers } from "redux";
import Reducers from './Reducers'

const rootReducer = combineReducers({
    amount: Reducers
})
console.log(rootReducer)
export default rootReducer;