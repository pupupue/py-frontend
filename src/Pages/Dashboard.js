import React from "react";
import { Row } from "../UI/Row";

import { CardBasic } from "../Components/CardBasic";

export const Dashboard = ({ children }) => {
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
            Apartments
          </h2>
        </CardBasic>
      </Row>
      <Row>
        <CardBasic>
          <h2 style={{ fontSize: "3rem", textDecoration: "underline" }}>
            Apartments
          </h2>
        </CardBasic>
        <CardBasic>
          <h2 style={{ fontSize: "3rem", textDecoration: "underline" }}>
            Apartments
          </h2>
        </CardBasic>
      </Row>
      {/* Alerts */}
      {/* When looged in */}
      {/* graphics about incomming data */}
    </>
  );
};
