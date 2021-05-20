import React from "react";
import { Row } from "../UI/Row";

import { CardBasic } from "../components/CardBasic";

export const Notes = ({ children }) => {
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
          <p>None</p>
          <p>None</p>
        </CardBasic>
      </Row>
      <Row>
        <CardBasic>
          <h2 style={{ fontSize: "3rem", textDecoration: "underline" }}>
            Notes
          </h2>
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
