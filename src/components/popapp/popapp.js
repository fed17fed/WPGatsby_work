import React from "react"
import Modal from 'react-bootstrap/Modal'
import "./popapp.css"

export default function Popapp() {   
        const [show, setShow] = React.useState(false);      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <button className="popapp-but" variant="primary" onClick={handleShow}>
              Заказать сайт
            </button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                  Close
                </button>
                <button variant="primary" onClick={handleClose}>
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
          </>
        );
           
}

