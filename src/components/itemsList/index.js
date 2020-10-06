import React, { useState } from "react";
import { Table, Badge, Button, Row, Col, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateDesactivationForm from "../createDesactivationForm";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemsList = ({ items }) => {
  const [show, setShow] = useState(false);
  const [desactivateItem, setDesactivateItem] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDesactivate = (item) => {
    setDesactivateItem(item);
    handleShow();
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
                      <Col>
                        <Button variant="warning">
                          <Link to={`/itemsDetails/${item.idItem}`}>
                            Details
                          </Link>
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            handleDesactivate(item);
                          }}
                        >
                          Desactivate
                        </Button>
                      </Col>
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
    </Card>
  );
};

export default ItemsList;
