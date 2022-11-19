import { useState, useEffect, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import beerImg from "../../assets/beer.png";

const BeerModal = (props) => {
  const [show, setShow] = useState(false);
  const form = useRef();
  const [beer, setBeer] = useState({
    name: "",
    genre: "",
    description: "",
    imageUrl: "",
  });

  useEffect(() => {
    setShow(props.show);
  }, [props]);

  const handleSubmit = () => {
    props.handleSubmit(beer);
  };

  return (
    <>
      <Modal show={show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New beer</Modal.Title>
        </Modal.Header>
        <Image
          src={beerImg}
          width="100"
          style={{
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            borderColor: "#dedede",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        />
        <Modal.Body>
          <Form ref={form}>
            <Form.Group className="mb-3" controlId="formBeerName">
              <Form.Control
                type="text"
                placeholder="Beer name*"
                required
                onChange={(e) => setBeer({ ...beer, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGenre">
              <Form.Control
                type="text"
                placeholder="Genre*"
                required
                onChange={(e) => setBeer({ ...beer, genre: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Control
                as="textarea"
                placeholder="Description*"
                style={{ height: "100px" }}
                required
                onChange={(e) =>
                  setBeer({ ...beer, description: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BeerModal;
