import React, { useState, useEffect } from "react";
import APIService from "../../APIService";
import { useCookies } from "react-cookie";
import { Row } from "../../UI/Row";
import { NotesList } from "../Notes/NoteList";

export const Popup = (props) => {
  const [notes, setNotes] = useState([]);
  const [isDisabled, setIsDisabled] = useState("");
  const [username, setUsername] = useCookies(["myusername"]);
  const [date, setDate] = useState(new Date());
  const [newNote, setNewNote] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const handleChange = (e) => {
    setIsDisabled(e.target.value);
  };
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
  const onClick = () => {
    setDate(new Date());
    props.handleClose();
    APIService.UpdateCell(props.cellID, props.Floor, {
      Name: props.Name,
      Date:
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
      Floor: props.Floor,
      cellID: props.cellID,
      Status: "Working",
    });
    APIService.LogChange({
      User: username["myusername"],
      Date:
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
      ResetReason: isDisabled,
      Floor: props.Floor,
      cellID: props.cellID,
    });
  };
  const addNote = () => {
    setDate(new Date());
    APIService.InsertNote({
      title: props.cellID,
      description: newNote,
      user: username["myusername"],
      date:
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    });
  };
  const handleChangeTitle = (e) => {
    setNewNoteTitle(e.target.value);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <div>Detailed information about cell {props.cellID}</div>
        <Row>
          <div
            style={{
              width: 400,
              display: "flex",
              flexDirection: "row",
              border: " 1px solid #5eac1e",
            }}
          >
            <div>PICTURE?</div>
          </div>
          <div
            style={{
              width: 400,
              display: "flex",
              flexDirection: "row",
              border: " 1px solid #5eac1e",
            }}
          >
            <div>
              <div>
                <h5> {props.Name ?? "undefined"}</h5>
                <h5>Last refresh: {props.Date ?? "undefined"}</h5>
                <h5>Floor number: {props.Floor ?? "undefined"}</h5>
                <h5>Cell number: {props.cellID ?? "undefined"}</h5>
                <h5>Device Status: {props.Status ?? "undefined"}</h5>
              </div>
              <h5>Vibration sensor: ON</h5>
              <h5>Door open sensor: ON</h5>
              <h5>Microcontroller status: ON</h5>
            </div>
          </div>
          <div
            style={{
              width: 400,
              border: " 1px solid #5eac1e",
            }}
          >
            <div>
              <div>
                <p style={{ fontSize: "2rem", textDecoration: "underline" }}>
                  Notes about cell {props.cellID}:
                </p>
              </div>
              <div>
                {/* <input
                  style={{ width: "30%" }}
                  type="title"
                  placeholder="Enter the title"
                  onChange={handleChangeTitle}
                  value={newNoteTitle}
                /> */}
                <input
                  style={{ width: "100%" }}
                  type="description"
                  placeholder="Enter a new note"
                  onChange={handleChange}
                  value={newNote}
                />
              </div>

              <button onClick={addNote} disabled={newNote.length < 1}>
                Add note
              </button>
            </div>
            <br></br>
            <NotesList notes={notes} />
          </div>
        </Row>

        {props.Status === "DOWN" && (
          <div>
            <h5>Reset the Alarm </h5>
            <input
              type="AlarmReset"
              className="form-control"
              id="AlarmsReset"
              placeholder="Please Enter Reset reason"
              value={isDisabled}
              onChange={handleChange}
            />

            <button disabled={isDisabled.length < 5} onClick={onClick}>
              {" "}
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
