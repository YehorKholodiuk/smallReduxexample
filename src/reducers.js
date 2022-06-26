export const reducers = (state, action) => {

    if (action.type === 'PLUS') {
        return {
            ...state,
            count: state.count + 1
        }
    }

    if (action.type === 'MINUS') {
        return {
            ...state,
            count: state.count - 1
        }
    }


    console.log(state, action);
    return {
        count: 2,
        version: '33.55.66'
    }
}
