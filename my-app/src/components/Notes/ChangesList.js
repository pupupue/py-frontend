import React from "react";

export const ChangesList = (props) => {
  return (
    <div>
      {props.changes &&
        props.changes
          .sort((a, b) => b["id"] - a["id"])
          .slice(0, 3)
          .map((changes) => {
            return (
              <div key={changes.id}>
                <ul>
                  <li>
                    By {changes.User} on {changes.Date} :
                  </li>
                  <p>
                    {changes.ResetReason}, Fllor:{changes.Floor},Cell:
                    {changes.cellID}
                  </p>
                </ul>
                {props.edit && (
                  <div className="row">
                    <div></div>
                  </div>
                )}
              </div>
            );
          })}
    </div>
  );
};
