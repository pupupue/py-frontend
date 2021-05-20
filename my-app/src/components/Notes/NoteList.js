import React, { useEffect, useState } from "react";
import APIService from "../../APIService";
import { useCookies } from "react-cookie";

export const NotesList = (props) => {
  const [token] = useCookies(["mytoken"]);
  // const [sortList, setSortList] = useState([]);

  const editBtn = (note) => {
    props.editBtn(note);
  };

  const deleteBtn = (note) => {
    APIService.DeleteArticle(note.id, token["mytoken"])
      .then(() => props.deleteBtn(note))
      .catch((error) => console.log(error));
  };

  // useEffect(() => {
  //   const sortArray = (type) => {
  //     const types = {
  //       date: "date",
  //       user: "user",
  //       title: "title",
  //     };
  //     const sortProperty = types[type];
  //     const sorted = [...props.notes].sort(
  //       (a, b) => b[sortProperty] - a[sortProperty]
  //     );
  //     setSortList(sorted);
  //   };

  //   sortArray(props.sort);
  // }, [props.sort]);

  return (
    <div>
      {props.notes &&
        props.notes
          .sort((a, b) => b["id"] - a["id"])
          .slice(0, 3)
          .map((note) => {
            return (
              <div key={note.id}>
                <ul>
                  <li>
                    By {note.user} on {note.date} - {note.title}:
                  </li>
                  <p>{note.description}</p>
                </ul>
                {props.edit && (
                  <div className="row">
                    <div>
                      <button
                        className="btn btn-primary"
                        onClick={() => editBtn(note)}
                      >
                        Update
                      </button>
                    </div>

                    <div>
                      <button
                        onClick={() => deleteBtn(note)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
    </div>
  );
};
