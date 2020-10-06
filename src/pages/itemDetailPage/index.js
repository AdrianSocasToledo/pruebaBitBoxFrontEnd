import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getItemById from "../../services/itemServices/getItemById";
import ItemDetail from "../../components/itemDetail";
import { Container } from "react-bootstrap";

const ItemDetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getItemById(id).then((response) => setItem(response));
  }, [id]);
  console.log(item);
  return (
    <Container fluid>
      <ItemDetail item={item}></ItemDetail>
    </Container>
  );
};

export default ItemDetailPage;
