const initialState = 0

const depositAndWithdraw = (state=initialState, action)=>{
    const {type, payload} = action
    console.log(action)
    if(type === 'WITHDRAW'){
        if(state <= 0){
            return state
        }
        return state - payload
    }else if(type === 'DEPOSIT'){
        return state + payload
    }else{
        return state
    }
}

export default depositAndWithdraw;