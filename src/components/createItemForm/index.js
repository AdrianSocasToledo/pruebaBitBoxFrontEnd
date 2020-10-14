import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import createItem from "../../services/itemServices/createItem";
import { getItemsAction } from "../../redux/actions/itemsActions";

const CreateItemForm = ({ close }) => {
  const [itemCode, setItemCode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [suppliersForm, setSuppliersForm] = useState([]);
  const [priceReductionsForm, setPriceReductionsForm] = useState([]);

  const user = useSelector((state) => state.userReducer.user);
  const suppliers = useSelector((state) => state.suppliersReducer.suppliers);
  const priceReductions = useSelector(
    (state) => state.priceReductionReducer.priceReductions
  );

  const dispatch = useDispatch();
  const handleClose = () => {
    close();
  };

  const createNewItem = () => {
    createItem(
      user,
      itemCode,
      description,
      price,
      suppliersForm,
      priceReductionsForm
    ).then((response) => dispatch(getItemsAction(user)));

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
        <Row>
          <Col>
            <Form.Label>Suppliers</Form.Label>
            <Multiselect
              options={suppliers}
              displayValue="name"
              onSelect={(selectedItem) => setSuppliersForm(selectedItem)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Price Reductions</Form.Label>
            <Multiselect
              options={priceReductions}
              displayValue="reducedPrice"
              onSelect={(selectedItem) => setPriceReductionsForm(selectedItem)}
            />
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
