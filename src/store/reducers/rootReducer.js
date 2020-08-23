import { combineReducers } from 'redux';
import createEntry from './createEntry';

const rootReducer = combineReducers({
    list: createEntry
})

export default rootReducer;
// This function takes in an object as a parameter. In this object, we created a "list" key which we use to access the state or our data from the library. 