import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardBasic } from "../components/CardBasic";
import { IstabasAttels } from "../components/IstabasAttels";
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
  const { id } = param;
  useEffect(() => {
    // api call
    console.log("also i call something to python");
    console.log(id);
  }, [id]);

  const styleProps = {
    position: "absolute",
    transition: "all 0.25s",
    transform: "scale(0.9)",
  }; //te gan jau row vajadzetu aizstat ar kadu kas paliek pa visu ekrānu
  return (
    <>
      <Row>
        <CardBasic>
          <div style={{ textSizeAdjust: "2rem" }}>This is Floor {id} plan</div>
        </CardBasic>
      </Row>
      <Row>
        <CardBasic>
          <div
            style={{ height: 400, width: 1420, backgroundColor: "white" }}
          ></div>
          <IstabasAttels
            alt={"logo1"}
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

      <Row><CardBasic>Informacija par celliem zem floor plan</CardBasic></Row>
    </>
  );
};
