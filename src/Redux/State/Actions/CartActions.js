export const addToCart = count => {
    return dispatch => {dispatch({
        type: 'addToCart',
        payload: count
    })}
}

export const removeFromCart = count => {
    return dispatch => {dispatch({
        type: 'removeFromCart',
        payload: count
    })}
}