let list = [
    {id:1, entry: "Go to the grocery store"},
    {id:2, entry: "Become a master at React"}
]


const createEntry = (state = list, action) => {

    const { entry } = action

    switch(action.type){
        case 'CREATE_ENTRY':
            return [
                ...state,
                entry
            ]
            default: 
            return state
    }
}

export default createEntry;
// This function takes in the two arguments; the first is the state, and second is the action. The state was also set or assigned to a goals object. When creating a reducer, the first argument which is the state in this instance needs to have an initial state or data. The action argument, on the other hand, is the type of action we have dispatched from a component which has access or is connected to the store. In this instance, we dispatched a “CREATE_ENTRY” action type.