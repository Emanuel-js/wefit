import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

import Walking from '../assets/endurance/Walking briskly.jpg' 

export function bannerImag(img) {

    return <div style={{background:'#111 !important' }}>
        <img
        style={{ width:'100%',height:'95vh', objectFit:'cover',background:'#222' }}
        src={img} alt="banner" 
        />
    </div>
}

export function Logo(img){
    return <img
    style={{ width:'100px',height:'100px', objectFit:'cover' }}
    src={img} alt="logo" 
    />
}



export {
    banner1,
    banner2,
    Walking
}