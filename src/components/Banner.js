import {useState} from 'react'

import {Carousel} from 'react-bootstrap';
import {banner1,bannerImag,banner2} from '../utility/image'

function Banner() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} fade >
        <Carousel.Item>
           {bannerImag(banner1)}
         
          <Carousel.Caption>
          <div style={{marginTop:'-300px'}}>
           <h3>Workout at your home </h3>
            <p>get to work now!</p>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
           {bannerImag(banner2)}
       
          <Carousel.Caption>
           <div style={{marginTop:'-300px'}}>
           <h3>Build your health</h3>
            <p>be strong and helathy</p>
           </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default Banner;