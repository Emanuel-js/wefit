/* eslint-disable import/no-anonymous-default-export */
import { GET_ALL_EXERCISES, GET_ALL_EXERCISES_REQUEST_SUCCESS ,REQUEST_EXERCISES} from '../../../constants/Exercises';

const initialState = {
    items: [],
    item: null,
    loading: false,
}

export default (state = initialState, action) => {

    switch (action.type) {
        case REQUEST_EXERCISES:
            return{
                ...state,
                loading:true
            }
            case GET_ALL_EXERCISES_REQUEST_SUCCESS:
                return {
                    ...state,
                    items: action.payload,
                    loading: false
                }
        default:
            return state
    }

}


