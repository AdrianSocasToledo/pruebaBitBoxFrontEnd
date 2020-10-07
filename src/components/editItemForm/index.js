import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import editItem from "../../services/itemServices/editItem";
import "bootstrap/dist/css/bootstrap.min.css";

const EditItemForm = ({ item, onClose }) => {
  const [editDescription, setEditDescription] = useState(item.description);
  const [editPrice, setEditPrice] = useState(item.Price);

  useEffect(() => {
    setEditDescription(item.description);
    setEditPrice(item.price);
  }, [item]);

  const handleEditItem = () => {
    let supplier;
    let priceReduction;
    editItem(item.idItem, editDescription, editPrice, supplier, priceReduction);
    onClose();
  };

  const handleClose = () => onClose();

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item: {item.itemCode}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col lg="6">
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditItem}>
          Save changes
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default EditItemForm;
