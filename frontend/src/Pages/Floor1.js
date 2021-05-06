import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardBasic } from "../Components/CardBasic";
import { IstabasAttels } from "../Components/IstabasAttels";
import { Row } from "../UI/Row";
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
  useEffect(() => {
    // api call
    console.log("also i call something to python");
  });

  const styleProps = {
    position: "absolute",
    transition: "all 0.25s",
    transform: "scale(1)",
  }; //te gan jau row vajadzetu aizstat ar kadu kas paliek pa visu ekrānu
  return (
    <>
      <Row>
        <CardBasic>
          <div style={{ textSizeAdjust: "2rem" }}>This is Floor 1 plan</div>
          <div
            style={{ height: 490, width: 1120, backgroundColor: "white" }}
          ></div>
          <IstabasAttels
            alt={"logo1"}/**Done */
            source1={ka1}
            source2={ka1g}
            styleProps={{
              ...styleProps,
              left: 420,
              top: 323,
            }}
          />
          <IstabasAttels
            alt={"logo1"}/**Done */
            source1={kl1}
            source2={kl1g}
            styleProps={{
              ...styleProps,
              left: 420,
              top: 371,
            }}
          />
          <IstabasAttels /*done*/
            alt={"logo1"}
            source1={ll1}
            source2={ll1g}
            styleProps={{
              ...styleProps,
              left: 648,
              top: 265,
            }}
          />
          <IstabasAttels
            alt={"logo1"}/*done*/
            source1={la2}
            source2={la2g}
            styleProps={{
              ...styleProps,
              left: 622,
              top: 190,
            }}
          />
          <IstabasAttels
            alt={"logo1"}/*Done*/
            source1={la1}
            source2={la1g}
            styleProps={{
              ...styleProps,
              left: 622,
              top: 199,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            source1={va1}/**Done */
            source2={va1g}
            styleProps={{
              ...styleProps,
              left: 522,
              top: 270,
            }}
          />
          <IstabasAttels
            alt={"logo1"}/**Done */
            source1={va2}
            source2={va2g}
            styleProps={{
              ...styleProps,
              left: 600,
              top: 265,
            }}
          />
          <IstabasAttels
            alt={"logo1"}
            source1={vl}
            source2={vlg}
            styleProps={{
              ...styleProps,
              left: 487,
              top: 322,
            }}
          />
          <IstabasAttels
            alt={"logo9"}/**Done */
            source1={r9}
            source2={r9g}
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
        <CardBasic>Informacija par celliem zem floor plan</CardBasic>
        <CardBasic>Informacija par celliem zem floor plan</CardBasic>
      </Row>
    </>
  );
};
