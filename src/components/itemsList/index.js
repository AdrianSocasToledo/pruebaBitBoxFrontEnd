import React, { useState } from "react";
import {
  Table,
  Badge,
  Button,
  Row,
  Col,
  Card,
  Modal,
  Form,
  ButtonGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateDesactivationForm from "../createDesactivationForm";
import EditItemForm from "../editItemForm";
import activateItem from "../../services/itemServices/activateItem";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemsList = ({ items }) => {
  const [show, setShow] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const [desactivateItem, setDesactivateItem] = useState({});
  const [editItem, setEditItem] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEditForm = () => setShowEditForm(false);
  const handleShowEditForm = () => setShowEditForm(true);

  const handleDesactivate = (item) => {
    setDesactivateItem(item);
    handleShow();
  };

  const handleActivate = (item) => {
    activateItem(item.idItem);
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    handleShowEditForm();
  };

  return (
    <Card>
      <Card.Header>Items List</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Item code</th>
              <th>Description</th>
              <th>State</th>
              <th>Price</th>
              <th>Creation date</th>
              <th>Creator</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {items.length &&
              items.map((item, index) => (
                <tr>
                  <td>{index}</td>
                  <td>{item.itemCode}</td>
                  <td>{item.description}</td>
                  <td>
                    <Badge
                      pill
                      variant={item.state === "Active" ? "success" : "danger"}
                    >
                      {item.state}
                    </Badge>{" "}
                  </td>
                  <td>{item.price}€</td>
                  <td>{item.creationDate}</td>
                  <td>{item.creator.userName}</td>
                  <td>
                    <Row>
                      <ButtonGroup>
                        <Col lg="3">
                          <div>
                            <Button variant="primary">
                              <Link to={`/itemsDetails/${item.idItem}`}>
                                Details
                              </Link>
                            </Button>
                          </div>
                        </Col>
                        <Col lg="6">
                          <div>
                            {item.state === "Active" ? (
                              <Button
                                variant="danger"
                                onClick={() => {
                                  handleDesactivate(item);
                                }}
                              >
                                Desactivate
                              </Button>
                            ) : (
                              <Button
                                variant="success"
                                onClick={() => handleActivate(item)}
                              >
                                Activate{" "}
                              </Button>
                            )}
                          </div>
                        </Col>
                        <Col lg="3">
                          <div>
                            <Button
                              variant="warning"
                              onClick={() => handleEditItem(item)}
                            >
                              Edit
                            </Button>
                          </div>
                        </Col>
                      </ButtonGroup>
                    </Row>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card.Body>
      <Modal show={show} onHide={handleClose} size="lg">
        <CreateDesactivationForm
          close={handleClose}
          item={desactivateItem}
        ></CreateDesactivationForm>
      </Modal>
      <Modal show={showEditForm} onHide={handleCloseEditForm} size="lg">
        <EditItemForm
          onClose={handleCloseEditForm}
          item={editItem}
        ></EditItemForm>
      </Modal>
    </Card>
  );
};

export default ItemsList;
