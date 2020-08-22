export const createEntryAction = (entry) => {
    entry.id = Math.random()*100000000000;

    return {
        type: 'CREATE_ENTRY',
        entry
    }
}