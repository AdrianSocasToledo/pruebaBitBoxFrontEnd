import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import { getItemsAction } from "../../redux/actions/itemsActions";
import editItem from "../../services/itemServices/editItem";
import "bootstrap/dist/css/bootstrap.min.css";

const EditItemForm = ({ item, onClose }) => {
  const [editDescription, setEditDescription] = useState(item.description);
  const [editPrice, setEditPrice] = useState(item.Price);
  const [editSuppliers, setEditSuppliers] = useState(item.suppliers);
  const [editPriceReductions, setEditPriceReductions] = useState(
    item.priceReduction
  );

  const user = useSelector((state) => state.userReducer.user);
  const suppliers = useSelector((state) => state.suppliersReducer.suppliers);
  const priceReductions = useSelector(
    (state) => state.priceReductionReducer.priceReductions
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setEditDescription(item.description);
    setEditPrice(item.price);
    setEditSuppliers(item.suppliers);
    setEditPriceReductions(item.priceReduction);
  }, [item]);

  const handleEditItem = () => {
    editItem(
      user,
      item.idItem,
      editDescription,
      editPrice,
      editSuppliers,
      editPriceReductions
    ).then((response) => dispatch(getItemsAction(user)));
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
        <Row>
          <Col>
            <Form.Label>Suppliers</Form.Label>
            <Multiselect
              options={suppliers}
              displayValue="name"
              selectedValues={item.suppliers}
              onSelect={(supplier) => setEditSuppliers(supplier)}
              onRemove={(supplier) => setEditSuppliers(supplier)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Price Reductions</Form.Label>
            <Multiselect
              options={priceReductions}
              displayValue="reducedPrice"
              selectedValues={item.priceReduction}
              onSelect={(element) => setEditPriceReductions(element)}
              onRemove={(element) => setEditPriceReductions(element)}
            />
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
