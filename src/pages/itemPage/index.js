import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ItemsList from "../../components/itemsList";
import {
  Container,
  Col,
  Row,
  Button,
  Modal,
  ButtonGroup,
} from "react-bootstrap";
import CreateItemForm from "../../components/createItemForm";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemPage = () => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("all");

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
            <Row>
              <ButtonGroup aria-label="Filter">
                <Button variant="secondary" onClick={() => setFilter("all")}>
                  All
                </Button>
                <Button variant="secondary" onClick={() => setFilter("Active")}>
                  Active
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setFilter("Discontinued")}
                >
                  Discontinued
                </Button>
              </ButtonGroup>
            </Row>
            <ItemsList
              items={
                filter === "all"
                  ? items
                  : items.filter((item) => item.state === filter)
              }
            ></ItemsList>
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
