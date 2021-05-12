import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardBasic } from "../components/CardBasic";
import { CellData } from "../components/CellData";
import { IstabasAttels } from "../components/IstabasAttels";
import { Popup } from "../components/Popup/Popup";
import { Row } from "../UI/Row";

//Upper middle
import r1 from "../Restes_bildes/roof/r1.png";
import r2 from "../Restes_bildes/roof/r2.png";
import r3 from "../Restes_bildes/roof/r3.png";
import r4 from "../Restes_bildes/roof/r4.png";
import plan from "../Restes_bildes/roof/plan.png";
//######################################################################
import r1g from "../Restes_bildes/roof/r1g.png";
import r2g from "../Restes_bildes/roof/r2g.png";
import r3g from "../Restes_bildes/roof/r3g.png";
import r4g from "../Restes_bildes/roof/r4g.png";

export const Floor6 = () => {
  const param = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [cellDataArray, setCellDataArray] = useState([]);
  const [cellData, setCellData] = useState({
    Name: "",
    Date: "",
    Floor: "",
    cellID: "",
    Status: "",
  });
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cellAlarms6/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellDataArray(resp))
      .catch((error) => console.log(error));
  }, []);

  const styleProps = {
    position: "absolute",
    transition: "all 0.25s",
    transform: "scale(0.9)",
  }; //te gan jau row vajadzetu aizstat ar kadu kas paliek pa visu ekrānu
  return (
    <>
      <Row>
        <CardBasic>
          <div style={{ textSizeAdjust: "2rem" }}>
            This is the Attic plan, hover on a room to get more information, or
            click to change
          </div>
        </CardBasic>
      </Row>
      <Row>
        <CardBasic>
          <div
            style={{ height: 400, width: 1420, backgroundColor: "white" }}
          ></div>
          <IstabasAttels
            alt={"logo1"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "4")[0]}
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={plan}
            source2={plan}
            styleProps={{
              ...styleProps,
              left: 10,
              top: 70,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "1")[0]}
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={r1}
            source2={r1g}
            styleProps={{
              ...styleProps,
              left: 1201,
              top: 153,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "2")[0]}
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={r2}
            source2={r2g}
            styleProps={{
              ...styleProps,
              left: 872,
              top: 223,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "3")[0]}
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={r3}
            source2={r3g}
            styleProps={{
              ...styleProps,
              left: 454,
              top: 223,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            source1={r4}
            source2={r4g}
            styleProps={{
              ...styleProps,
              left: 148,
              top: 155,
            }}
          />
        </CardBasic>
      </Row>

      <CellData {...cellData} />
    </>
  );
};
