import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardBasic } from "../components/CardBasic";
import { IstabasAttels, Popup } from "../components/IstabasAttels";
import { Row } from "../UI/Row";
import { CellData } from "../components/CellData";
//Middle
import ka1 from "../Restes_bildes/1stavs/ka1.png";
import kl1 from "../Restes_bildes/1stavs/kl1.png";
//######################################################################
import ll1 from "../Restes_bildes/1stavs/ll1.png";
import la2 from "../Restes_bildes/1stavs/la1.png";
import la1 from "../Restes_bildes/1stavs/la2.png";
//######################################################################
import va1 from "../Restes_bildes/1stavs/va1.png";
import va2 from "../Restes_bildes/1stavs/va2.png";
import vl from "../Restes_bildes/1stavs/vl.png";
//######################################################################
import r9 from "../Restes_bildes/1stavs/talaisk.png";
//######################################################################
import ka1g from "../Restes_bildes/1stavs/ka1g.png";
import kl1g from "../Restes_bildes/1stavs/kl1g.png";
//######################################################################
import ll1g from "../Restes_bildes/1stavs/ll1g.png";
import la2g from "../Restes_bildes/1stavs/la1g.png";
import la1g from "../Restes_bildes/1stavs/la2g.png";
//######################################################################
import va1g from "../Restes_bildes/1stavs/va1g.png";
import va2g from "../Restes_bildes/1stavs/va2g.png";
import vlg from "../Restes_bildes/1stavs/vlg.png";
//######################################################################
import r9g from "../Restes_bildes/1stavs/talaiskg.png";
//Background images to fill space
import nod1 from "../Restes_bildes/1stavs/nodrightdown.png";
import nod2 from "../Restes_bildes/1stavs/nodupright.png";
import nod3 from "../Restes_bildes/1stavs/nodup.png";
import nod4 from "../Restes_bildes/1stavs/nodk.png";
import nod5 from "../Restes_bildes/1stavs/logi.png";

export const Floor1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [HoveredNameState, setHoveredNameState] = useState("");
  const [CellState, setCellState] = useState("");
  const [CellStatus, setCellStatus] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cellAlarms1/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellStatus(resp))
      .catch((error) => console.log(error));
  }, []);
  const styleProps = {
    position: "absolute",
    transition: "all 0.25s",
    transform: "scale(1)",
  }; //te gan jau row vajadzetu aizstat ar kadu kas paliek pa visu ekrānu

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Row>
        <CardBasic>
          <div style={{ textSizeAdjust: "2rem" }}>This is Floor 1 plan</div>
          <div
            style={{ height: 490, width: 1120, backgroundColor: "white" }}
          ></div>
          <CellData>Data</CellData>
          <IstabasAttels
            cellID="7"
            alt={"logo1"} /**Done */
            source1={ka1}
            source2={ka1g}
            onHover={(ID) => setHoveredNameState(ID)}
            clicked={togglePopup}
            styleProps={{
              ...styleProps,
              left: 420,
              top: 323,
            }}
          />
          <IstabasAttels
            alt={"logo1"} /**Done */
            cellID="8"
            source1={kl1}
            source2={kl1g}
            onHover={(ID) => setHoveredNameState(ID)}
            clicked={togglePopup}
            styleProps={{
              ...styleProps,
              left: 420,
              top: 371,
            }}
          />
          <IstabasAttels /*done*/
            alt={"logo1"}
            cellID="2"
            source1={ll1}
            source2={ll1g}
            clicked={togglePopup}
            onHover={(ID) => setHoveredNameState(ID)}
            styleProps={{
              ...styleProps,
              left: 648,
              top: 265,
            }}
          />
          <IstabasAttels
            alt={"logo1"} /*done*/
            cellID="1"
            source1={la2}
            source2={la2g}
            clicked={togglePopup}
            onHover={(ID) => setHoveredNameState(ID)}
            styleProps={{
              ...styleProps,
              left: 622,
              top: 190,
            }}
          />
          <IstabasAttels
            alt={"logo1"} /*Done*/
            cellID="3"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={la1}
            source2={la1g}
            clicked={togglePopup}
            styleProps={{
              ...styleProps,
              left: 622,
              top: 199,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            cellID="5"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={va1} /**Done */
            source2={va1g}
            clicked={togglePopup}
            styleProps={{
              ...styleProps,
              left: 522,
              top: 270,
            }}
          />
          <IstabasAttels
            alt={"logo1"} /**Done */
            cellID="4"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={va2}
            source2={va2g}
            clicked={togglePopup}
            styleProps={{
              ...styleProps,
              left: 600,
              top: 265,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            cellID="6"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={vl}
            source2={vlg}
            clicked={togglePopup}
            styleProps={{
              ...styleProps,
              left: 487,
              top: 322,
            }}
          />
          <IstabasAttels
            alt={"logo9"} /**Done */
            cellID="9"
            source1={r9}
            source2={r9g}
            onHover={(ID) => setHoveredNameState(ID)}
            clicked={togglePopup}
            styleProps={{
              ...styleProps,
              left: 150,
              top: 100,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            source1={nod1}
            source2={nod1}
            styleProps={{
              ...styleProps,
              left: 762,
              top: 195,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            source1={nod2}
            source2={nod2}
            styleProps={{
              ...styleProps,
              left: 622,
              top: 82,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            source1={nod3}
            source2={nod3}
            styleProps={{
              ...styleProps,
              left: 341,
              top: 101,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            source1={nod4}
            source2={nod4}
            styleProps={{
              ...styleProps,
              left: 150,
              top: 276,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            source1={nod5}
            source2={nod5}
            styleProps={{
              ...styleProps,
              left: 315,
              top: 475,
            }}
          />
        </CardBasic>
      </Row>
      <Row>
        <CardBasic>
          <h4>Room number: {HoveredNameState}</h4>
          <h4>
            Room Status:
            {CellStatus.map((CellState) => (
              <div>{CellState.ID}</div>
            ))}
          </h4>
        </CardBasic>
        <CardBasic>Informacija par celliem zem floor plan</CardBasic>
      </Row>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Design your Popup</b>
              <p>as</p>
              <button>Test button</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
};
