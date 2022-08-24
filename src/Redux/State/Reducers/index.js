import {combineReducers} from 'redux';
import depositWithdrawReducer from './depositWithdrawReducer';
import cartAddRemove from './cartAddRemove'

const rootReducer = combineReducers({
    amount: depositWithdrawReducer,
    count: cartAddRemove
})

export default rootReducer;