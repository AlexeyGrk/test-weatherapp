import React, { useContext } from "react";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { AcceptGeolocationContext } from "../../contexts/AcceptGeolocationContext";

export const Backdrop = () => {
  const [accept, setAccept] = useContext(AcceptGeolocationContext);
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleAccept = () => {
    setShow(false);
    setAccept(true);
  };
  return (
    <>
      <Modal
        centered
        animation
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Accept geolocation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAccept}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
