export const Withdraw = amount => {
    return dispatch => dispatch({
        type: 'WITHDRAW',
        payload: amount
    })
}

export const Deposit = amount => {
    return dispatch => dispatch({
        type: 'DEPOSIT',
        payload: amount
    })
}