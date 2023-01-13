
export const depositMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload: amount
        })
    }
}

export const withdrawllMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:'withdrwa',
            payload: amount
        })
    }
}