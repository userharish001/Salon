import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Navbars() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="secondary"
        className="fixed-top"
        style={{ border: "2px solid black", borderRadius: "8px" }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{
              color: "white",
              backgroundColor: "orangered",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "3px 4px 3px black",
            }}
          >
            Unisex Hair Salon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px",gap:"20px", }}
              navbarScroll
            >
              <NavLink className="text-decoration-none text-white" to="/">Home</NavLink>
              <NavLink className="text-decoration-none text-white" to="/contact">Contact</NavLink>
            </Nav>
            <Form className="d-flex">
              <input
                type="text"
                list="service"
                style={{ borderRadius: "10px" }}
              />
              <datalist id="service">
                <option>Madicure</option>
                <option>Hair Cutting</option>
                <option>Padicure</option>
                <option>Hair Color</option>
                <option>Facial</option>
                <option>Hair Wash</option>
                <option>Hair dryer</option>
              </datalist>
              <Button
                variant="outline-success"
                style={{ color: "white", backgroundColor: "red" }}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
