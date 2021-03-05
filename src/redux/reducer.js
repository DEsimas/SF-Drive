import { combineReducers } from 'redux';

import { authorization } from './authorization/reducer';
import { registration } from "./registration/reducer";

export default combineReducers({
    registration: registration,
    authorization: authorization
});