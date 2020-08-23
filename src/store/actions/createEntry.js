// This function is fired when we want to add an entry to the store or when we dispatch an action for adding an entry to the store.

export const createEntryAction = (entry) => {
    entry.id = Math.random()*100000000000;

    return {
        type: 'CREATE_ENTRY',
        entry
    }
}