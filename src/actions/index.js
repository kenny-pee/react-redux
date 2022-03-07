export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const incrementBy = (num) => {
    return {
        type: 'INCREMENT_BY',
        payload: num
    }
}

export const decrementBy = (num) => {
    return {
        type: 'DECREMENT_BY',
        payload: num
    }
}