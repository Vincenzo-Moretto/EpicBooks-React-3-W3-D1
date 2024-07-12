import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

/* import CommentArea from "./CommentArea"; */

function SingleBook(props) {
  return (
    <Card
      className="libri"
      style={{
        width: "15rem",
        transform: props.libro.asin === props.id ? "scale(1.1)" : "",
        borderColor: props.libro.asin === props.id ? "red" : "",
      }}
    >
      <Card.Img
        /* style={{ height: "400px" }} */
        variant="top"
        src={props.libro.img}
        onClick={() => props.idBook(props.libro.asin)}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title>{props.libro.title}</Card.Title>
        <Button variant="primary">{props.libro.price} € </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
