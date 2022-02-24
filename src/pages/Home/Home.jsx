import React from "react";
import Banner from "../../components/Banner";

import Endurance from "../../components/workouts/Endurance";

function Home() {

  const q=['daily work out','sport','daily challenge']
  const rand = Math.floor(Math.random() * 2) + 0;
  console.log(rand)

  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        
      </div>
      <div style={{margin:'100px'}} >
        <h4 style={{padding:'20px'}}>Weekly Videos 🏅</h4>
       
        <Endurance  query={q[rand]} />
      
      </div>
    </div>
  );
}

export default Home;
