import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemsList from "../../components/itemsList";
import getItems from "../../services/itemServices/getItems";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import CreateItemForm from "../../components/createItemForm";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemPage = () => {
  const [show, setShow] = useState(false);

  const items = useSelector((state) => state.itemsReducer.items);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1>ITEMS</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="outline-success" onClick={handleShow}>
              Create Item
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Col lg="10">
            <ItemsList items={items}></ItemsList>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} size="lg">
        <CreateItemForm close={handleClose}></CreateItemForm>
      </Modal>
    </div>
  );
};

export default ItemPage;
