import { combineReducers } from 'redux';

import { registration } from "./registration/reducer";
import { authorization } from './authorization/reducer';
import { recovery } from './recovery/reducer';
import { ChooseAvto } from './chooseAvto/reducer';

export default combineReducers({
    registration: registration,
    authorization: authorization,
    recovery: recovery,
    ChooseAvto: ChooseAvto,
});