import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cards = (props) => {
  return (
    <div className="Tarjetas">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>{props.descripcion}</Card.Text>
          <Button variant="primary">Click</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
