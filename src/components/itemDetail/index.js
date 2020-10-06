import React from "react";
import { Container, Row, Col, Modal, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <Container>
      <Card>
        <Card.Header>
          <strong>{item.itemCode}</strong>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <div>
                <strong>Description:</strong>
              </div>
              <div>{item.description}</div>
            </Col>
            <Col>
              <div>
                <strong>Price:</strong>
              </div>
              <div>{item.price}</div>
            </Col>
            <Col>
              <div>
                <strong>State:</strong>
              </div>
              <div>{item.state}</div>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <div>
                <strong>Creation Date:</strong>
              </div>
              <div>{item.creationDate}</div>
            </Col>
            <Col>
              <div>
                <strong>Creator:</strong>
              </div>
              <div></div>
            </Col>
            <Col></Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
