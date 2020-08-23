const getEntry =  (state = {}, action) => {

    const { data } = action
    switch(action.type){
        case'GET_ENTRY':
        return {
            ...state,
            data
        }
        default:
            return state
    }
}

export default getEntry;