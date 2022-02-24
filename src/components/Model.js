import {Modal} from 'react-bootstrap'
import ReactPlayer from 'react-player'
function ModalModel({setModalShow,show,url}) {
   
    console.log("show",show)
console.log(show)
    return (
        <Modal
        show={show}
        onHide={()=>setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton  >

            </Modal.Header>
            <Modal.Body >

                <ReactPlayer
                    url={url}
                    height='50vh'
                    width='50vw'
                    
                    controls={true}
                    
                />
            </Modal.Body>

        </Modal>
        
    );
}

export default ModalModel;


