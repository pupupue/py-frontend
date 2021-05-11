import React, { useState } from "react";
import { Row } from "../UI/Row";
import { CardBasic } from "./CardBasic";

export const CellData = ({ Name, Date, Floor, cellID, Status }) => {
  return (
    <>
      <Row>
        <CardBasic>
          <div>
            <h5>Cell: {Name ?? "undefined"}</h5>
            <h5>Last refresh: {Date ?? "undefined"}</h5>
            <h5>Floor number: {Floor ?? "undefined"}</h5>
            <h5>Cell number: {cellID ?? "undefined"}</h5>
            <h5>Device Status: {Status ?? "undefined"}</h5>
          </div>
        </CardBasic>
      </Row>
    </>
  );
};
