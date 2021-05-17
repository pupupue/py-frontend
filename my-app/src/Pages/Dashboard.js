import React, { useState, useEffect } from "react";
import { Row } from "../UI/Row";
import { NotesList } from "../components/Notes/NoteList";
import { ChangesList } from "../components/Notes/ChangesList";
import { CardBasic } from "../components/CardBasic";
import { useCookies } from "react-cookie";
import APIService from "../APIService";

export const Dashboard = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [alarmChanges, setAlarmsChanges] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [username, setUsername] = useCookies(["myusername"]);
  const [editNote, setEditNote] = useState(null);
  const [date, setDate] = useState(new Date());
  const [sortType, setSortType] = useState("date");

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
  }, [newNote]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/AlarmChanges/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setAlarmsChanges(resp))
      .catch((error) => console.log(error));
  }, []);

  const editBtn = (note) => {
    setEditNote(note);
  };
  const handleChange = (e) => {
    setNewNote(e.target.value);
  };
  const handleChangeTitle = (e) => {
    setNewNoteTitle(e.target.value);
  };
  const addNote = () => {
    setDate(new Date());
    APIService.InsertNote({
      title: newNoteTitle,
      description: newNote,
      user: username["myusername"],
      date:
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    });
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
          <ChangesList changes={alarmChanges} />
        </CardBasic>
      </Row>
      <Row>
        <CardBasic>
          <div>
            <div>
              <p style={{ fontSize: "2rem", textDecoration: "underline" }}>
                Notes:
              </p>
              <p>
                Sort by:{" "}
                <select onChange={(e) => setSortType(e.target.value)}>
                  <option value="date">date</option>
                  <option value="user">user</option>
                  <option value="title">title</option>
                </select>
              </p>
            </div>
            <input
              style={{ width: "30%" }}
              type="title"
              placeholder="Enter the title"
              onChange={handleChangeTitle}
              value={newNoteTitle}
            />
            <input
              style={{ width: "70%" }}
              type="description"
              placeholder="Enter a new note"
              onChange={handleChange}
              value={newNote}
            />

            <button onClick={addNote} disabled={newNote.length < 1}>
              Add note
            </button>
          </div>
          <br></br>
          <NotesList notes={notes} />
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
