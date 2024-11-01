import React from "react";
import { Card,Button } from "react-bootstrap";

const Cards = ({list}) => {
  return <div className="container">
  <div className="row">
    {list.map((item) => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mt-5" key={item.id}>
          <Card className="card h-100" style={{ width: "100%" }}>
            <Card.Img variant="top" src={item.image}  style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      );
    })}
  </div>
</div>

};

export default Cards;
