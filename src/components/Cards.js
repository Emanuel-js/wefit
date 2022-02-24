import React from 'react'
import { Card, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import YouTubePlayer from 'react-player/youtube';
import ModalModel from './Model';

function Cards({description,title,img,video}) {
    const [modalShow, setModalShow] = React.useState(false);

    return ( <Card style={{ width: '18rem'}}>
          <div onClick={() => setModalShow(true)}>
             
          <img src={img} alt="img" 
           style={{cursor:'pointer'}}
            width={288} height={200}
           />
          </div>
          <ModalModel 
              url={`https://www.youtube.com/watch?v=${video}`}
              show={modalShow}
              setModalShow={setModalShow}
              />
        
          
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  <div style={{height:'100px',overflow:'hidden'}}> {description}</div>
                </Card.Text>
              
            </Card.Body>
        </Card>
    )
}

export default Cards;


const styles ={
    playerWrapper:{
        position:' relative',
        paddingTop: '10px'
    },
    reactPlayer:{
        position: "absolute",
        top: 0,
        left: 0,
    }
}