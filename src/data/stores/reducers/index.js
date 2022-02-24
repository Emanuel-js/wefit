import {combineReducers} from 'redux';

import exercisesReducers from './exercisesReducers';
import equipmentReducers from './equipment';
export default combineReducers({

    exercises:exercisesReducers,
    equipments:equipmentReducers
})