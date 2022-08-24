const initialState = 0;

const depositWithdrawReducer = (state = initialState, {type, payload}) => {
    // const {type, payload} = action
    if(type === 'deposit'){
        return state + payload 
    }else if(type === 'withdraw'){
        if(state === 0){
            return state
        }
        return state - payload
    }else{
        return state;
    }
}

export default depositWithdrawReducer;