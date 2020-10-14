import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
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
              <div>{item.price}€</div>
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
              <div>{item.creator && item.creator.userName}</div>
            </Col>
            <Col></Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <div>
                <strong>Suppliers</strong>
                <div>
                  {item.suppliers &&
                    item.suppliers.map((supplier) => (
                      <ul>
                        <li>
                          {supplier.name} - {supplier.country}
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col>
              <div>
                <strong>Price Reductions</strong>
                <div>
                  {item.priceReduction &&
                    item.priceReduction.map((pr) => (
                      <ul>
                        <li>
                          <div>
                            <strong>Reduced Price: </strong>
                            <label>{pr.reducedPrice}</label>
                          </div>
                          <div>
                            <strong>Start Date: </strong>
                            <label>{pr.startDate}</label>
                          </div>
                          <div>
                            <strong>End Date Price: </strong>
                            <label>{pr.endDate}</label>
                          </div>
                        </li>
                      </ul>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
