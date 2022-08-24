import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function CardRB() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setDetails(res))
      .catch((err) => console.log(err));
  }, []);
  console.log(details);
  return (
    <>
      {details && details.map((item) => (
        <Card style={{ width: "18rem" }} key={item.id}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.company.catchPhrase}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default CardRB;
