/* eslint-disable import/no-anonymous-default-export */
import {GET_EQUIPMENT_SUCCESS,REQUEST_EQUIPMENT,REQUEST_FAIL} from '../../../constants/equipment';

const initialState = {
    items: [],
    item: null,
    loading: false,
}

export default (state = initialState, action) => {

    switch (action.type) {
        case REQUEST_EQUIPMENT:
            return{
                ...state,
                loading:true
            }
            case GET_EQUIPMENT_SUCCESS:
                return {
                    ...state,
                    items: action.payload,
                    loading: false
                }
            case REQUEST_FAIL:
             return {
                 ...state,
                 loading:true
             } 
        default:
            return state
    }

}


