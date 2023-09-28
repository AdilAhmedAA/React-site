import { Button } from './Button'
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} buttonStyle='btn--primary' buttonSize='btn--medium' text='Show All' />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading <Button onClick={handleClose} buttonStyle='btn--outline' buttonSize='btn--medium' text='X' /></Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    </>
  );
}

export default Example;