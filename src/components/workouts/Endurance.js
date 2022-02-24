import React, { useEffect, useState } from 'react'
import Card from '../Cards';
import { endurance } from '../../data/workout';
import { getAllExercises } from '../../data/stores/actions/exercisesAction';
import { useDispatch, useSelector } from 'react-redux';




function Endurance({query}) {
  const exercises = useSelector((state) => state.exercises.items);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllExercises(query));
  }, [dispatch, query])

  

  console.log(query)
  return (

    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', padding: '30px' }}>
      {
        exercises.map((ex => {
          return <Card
          key={ex.id.videoId}
            img={ex.snippet.thumbnails.high.url || ex.snippet.thumbnails.default.url}
            title={ex.snippet.title}
            description={ex.snippet.description}
            video = {ex.id.videoId}
          />

       
        }))
      }

    </div>
  )
}
export default Endurance;