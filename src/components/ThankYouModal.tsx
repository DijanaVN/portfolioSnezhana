import React from "react";
import { Modal, Button } from "react-bootstrap";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal className="custom-modal " show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thank You!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Thank you for contacting me! I appreciate your message. I will get back
        to you as soon as possible.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ThankYouModal;
