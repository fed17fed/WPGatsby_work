import React from "react"
import Modal from 'react-bootstrap/Modal'
import "./popapp.css"
import ContactForm from '../contactform'

export default function Popapp(props) {   
        const [show, setShow] = React.useState(false);      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <button className="popapp-but" variant="primary" onClick={handleShow}>
              {props.namebutton}
            </button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Make an order</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ContactForm />
              </Modal.Body>              
            </Modal>
          </>
        );
           
}

