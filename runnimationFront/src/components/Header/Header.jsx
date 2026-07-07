import "./Header.css";
import { Col, Row, Nav, Button, Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function Header() {
  return (
    <div className="header">
      <Row className="g-2 align-items-center" style={{ width: "100%" }}>
        <Col xs={2}>
          <a href="#">
            <img
              src="/logoSinFondo.png"
              className="img-fluid"
              style={{ maxHeight: "50px", marginTop: "5px" }}
            />
          </a>
        </Col>
        <Col xs={4}>
          <Nav>
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="">Series</Nav.Link>
            <Nav.Link href="">Listas</Nav.Link>
            <Nav.Link href="">Estrenos</Nav.Link>
          </Nav>
        </Col>
        <Col
          className="d-flex justify-content-end align-items-center"
          style={{ gap: "8px" }}
        >
          <InputGroup size="sm" style={{ width: "200px" }}>
            <Form.Control type="text" />
            <InputGroup.Text>
              <Search />
            </InputGroup.Text>
          </InputGroup>
          <Form.Select size="sm" style={{ width: "70px" }}>
          </Form.Select>
          <Button size="sm">Iniciar sesión</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
