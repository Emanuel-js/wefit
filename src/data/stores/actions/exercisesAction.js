import { GET_ALL_EXERCISES,GET_ALL_EXERCISES_REQUEST_SUCCESS, REQUEST_EXERCISES,} from '../../../constants/Exercises';

import axios from 'axios';


// const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const API_KEY = 'AIzaSyD1dXXvOIhJfBEyiT65VIHtlDyvy-U6Uyg'
export const getAllExercises = (query) => async (dispatch) => {

dispatch(
    {
        type:REQUEST_EXERCISES
    }
)
  try {
    const res =await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&key=${API_KEY}`)
    // const res =await axios.get(` https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${API_KEY}`)

    dispatch({
        type: GET_ALL_EXERCISES_REQUEST_SUCCESS,
        payload:res.data.items,
    });
  console.log(res)

  } catch (error) {
    
      console.log(error)
  }
   
    


}



export const  getAllSportVideos=()=>async (dispatch)=>{

 const res = await axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/videos",
    params:{
      part:'snippet',
      maxRes:'5',
      key:'AIzaSyCT4cpQ-Y2FNPLHCp_mRgEvbLoiqNxM8is'
    }
  })
  console.log(res);
}
