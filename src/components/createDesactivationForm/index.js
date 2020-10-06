import React, { useState } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import desactivateItem from "../../services/desactivationsService/desactivateItem";
import "bootstrap/dist/css/bootstrap.min.css";

const CreateDesactivationForm = ({ close, item }) => {
  const [reason, setReason] = useState("");

  const handleClose = () => {
    close();
  };

  const desactivate = () => {
    desactivateItem(item, reason);
  };
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>
          Desactivate item:<strong>{item.itemCode}</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>Reason:</Col>
        </Row>
        <Row>
          <Col>
            <Form.Control
              type="textarea"
              required
              onChange={(e) => setReason(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={desactivate}>
          desactivate
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default CreateDesactivationForm;
