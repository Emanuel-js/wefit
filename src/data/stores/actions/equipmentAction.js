import {GET_EQUIPMENT_SUCCESS,REQUEST_EQUIPMENT,REQUEST_FAIL} from '../../../constants/equipment';

import {API_BASE_URL} from '../../../constants/BaseURL';
import axios from 'axios';


const apiKey = process.env.REACT_APP_API_KEY


export const getAllEquipment = () => async (dispatch) => {

dispatch(
    {
        type:REQUEST_EQUIPMENT
    }
)
  try {
    const res = await axios.get(`${API_BASE_URL}equipment?key=${apiKey}`)
    dispatch({
        type: GET_EQUIPMENT_SUCCESS,
        payload: res.data.results,
    });

  } catch (error) {
    
    dispatch(
        {
            type:REQUEST_FAIL
        }
    )
      console.log(error)
  }
   
    


}


