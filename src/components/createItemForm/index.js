import React, { useState } from "react";

import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import createItem from "../../services/itemServices/createItem";

const CreateItemForm = ({ close }) => {
  const [itemCode, setItemCode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const handleClose = () => {
    close();
  };

  const createNewItem = () => {
    createItem(itemCode, description, price);
    handleClose();
  };

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Create a new item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg="4">
            <Form.Group>
              <Form.Label>Item Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item code"
                onChange={(e) => setItemCode(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Form.Group lg="4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Col>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={createNewItem}>
          Create
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default CreateItemForm;
