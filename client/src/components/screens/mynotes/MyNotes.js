import React, { useEffect } from "react";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
import { Badge, Button, Card, Accordion } from "react-bootstrap";
import axios from "axios";

export default function MyNotes() {
  const [notes, setNotes] = React.useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const {data} = await axios.get("http://localhost:5000/api/notes");
    // .then((response) => {
    //   setPost(response.data);
    // });
    setNotes(data);
  };

  return (
    <MainScreen title={"Welcome User"}>
      <Link to="/createnotes">
        <Button variant="outline-success">Create New Notes</Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id} defaultActiveKey="0">
          <Card className="mt-3">
            <Card.Header className="d-flex align-items-center p-0">
              <span
                style={{
                  color: "#000",
                  textDecoration: "none",
                  flex: 1,
                  fontSize: "20px",
                  cursor: "pointer",
                  alignSelf: "center",
                  background: "transparent",
                }}>
                <Accordion.Header
                  style={{
                    background: "transparent",
                  }}>
                  {note.title}
                </Accordion.Header>
              </span>
              <div>
                <Button variant="warning">Edit</Button>
                <Button className="mx-3" variant="danger">
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventkey="0">
              <Card.Body>
                <h6>
                  <Badge pill bg="success">
                    Category - {note.category}
                  </Badge>
                </h6>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created at <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}
