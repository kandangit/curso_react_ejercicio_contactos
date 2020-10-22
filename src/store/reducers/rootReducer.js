import { combineReducers } from 'redux';
import contactosReducer from './contactosReducer';

const rootReducer = combineReducers(
    {
        contactosState: contactosReducer
    }
);

export default rootReducer;