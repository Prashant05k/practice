import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function DropdownButtonExample() {
  return (
    <>
      {/* <DropdownButton id="dropdown-basic-button" title="Background">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
      <DropdownButton id="dropdown-basic-button" title="Variant">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('hi')}>Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton> */}

      <>
        {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
          (variant) => (
            <DropdownButton
              as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          )
        )}
      </>
    </>
  );
}

export default DropdownButtonExample;
