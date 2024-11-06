import React from "react";
import { Card,Button } from "react-bootstrap";

const Cards = ({list}) => {
  return <div className="container">
  <div className="row">
    {list.map((item) => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mt-5" key={item.id}>
        <Card className="card h-100" style={{ width: "100%",border:"1px solid black",borderRadius:"5px",boxShadow:"2px 3px 4px grey" }}>
        <Card.Img variant="top" src={item.image}  style={{ height: "200px", objectFit: "cover",border:"1px solid black",borderRadius:"10px" }} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
             <center> <Button variant="primary" href={item.source}>Know about...</Button></center>
            </Card.Body>
          </Card>
        </div>
        
      );
    })}
  </div>
</div>

};

export default Cards;
