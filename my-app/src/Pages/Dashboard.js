import React, { useState, useEffect } from "react";
import { Row } from "../UI/Row";
import { NotesList } from "../components/Notes/NoteList";
import { CardBasic } from "../components/CardBasic";
import { InsertNote } from "../APIService";

export const Dashboard = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/notes/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setNotes(resp))
      .catch((error) => console.log(error));
  }, []);
  const deleteBtn = (note) => {
    const new_notes = note.filter((mynote) => {
      if (mynote.id === note.id) {
        return false;
      }
      return true;
    });

    setNotes(new_notes);
  };
  const editBtn = (note) => {
    setEditNote(note);
  };
  return (
    <>
      <Row>
        <CardBasic>
          <h2 style={{ fontSize: "3rem", textDecoration: "underline" }}>
            Apartments
          </h2>
        </CardBasic>
        <CardBasic>
          <h2 style={{ fontSize: "3rem", textDecoration: "underline" }}>
            Alerts
          </h2>
          <br></br>
          <p>None</p>
        </CardBasic>
      </Row>
      <Row>
        <CardBasic>
          <h2 style={{ fontSize: "2rem", textDecoration: "underline" }}>
            Notes:
          </h2>
          <div>
            <input
              style={{ width: "70%" }}
              type="text"
              placeholder="Enter a new note"
            />
            <button>Add note</button>
          </div>
          <br></br>
          <NotesList notes={notes} editBtn={editBtn} deleteBtn={deleteBtn} />
        </CardBasic>
        <CardBasic>
          <h2 style={{ fontSize: "3rem" }}>
            <h3 style={{ fontSize: "3rem", textDecoration: "underline" }}>
              SYSTEM Information:
            </h3>
            <br></br>
            <ul style={{ fontSize: "2rem", listStyle: "square" }}>
              <li>Working devices: 150/150</li>
              <br></br>
              <li>Maintnace devices: 0</li>
              <br></br>
              <li>Disabled devices: 0</li>
              <br></br>
              <li>Server status: Working</li>
            </ul>
          </h2>
        </CardBasic>
      </Row>
      {/* Alerts */}
      {/* When looged in */}
      {/* graphics about incomming data */}
    </>
  );
};
