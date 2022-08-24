const initialState = 0;
const cartAddRemove = (state = initialState, {type, payload}) => {
    if(type === 'addToCart'){
        return state + payload
    }else if(type === 'removeFromCart'){
        if(state === 0){
            return state
        }
        return state - payload
    }else{
        return state
    }
};

export default cartAddRemove;
