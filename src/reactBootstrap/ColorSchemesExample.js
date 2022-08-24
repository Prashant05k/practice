import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";

function ColorSchemesExample() {
  const [bgColor, setBgColor] = useState("dark");
  const arr = [
    "dark",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
  ];
  function handleDropDownSelection(e) {
    // console.log(e.target.name);
    setBgColor(e.target.name);
  }
  return (
    <>
      <Navbar bg={bgColor} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>
          <DropdownButton id="dropdown-basic-button" title="Background" variant={bgColor.toLowerCase()}>
            {arr.map((item, index) => (
              <Dropdown.Item
                name={item}
                onClick={handleDropDownSelection}
                key={index}
              >
                {item}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default ColorSchemesExample;
