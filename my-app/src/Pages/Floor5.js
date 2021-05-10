import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardBasic } from "../components/CardBasic";
import { IstabasAttels } from "../components/IstabasAttels";
import { Row } from "../UI/Row";
//Middle
import bottom from "../Restes_bildes/balts.png";
import bottom_g from "../Restes_bildes/zals.png";
//Upper middle
import k1 from "../Restes_bildes/kreisa1.png";
import k2 from "../Restes_bildes/kreisa2.png";
import k3 from "../Restes_bildes/kreisa_istaois_3.png";
import k4 from "../Restes_bildes/kreisa3.png";
import k1g from "../Restes_bildes/3stavs/kreisa1g.png";
import k2g from "../Restes_bildes/3stavs/kreisa2g.png";
import k3g from "../Restes_bildes/3stavs/kreisa_istaois_3g.png";
import k4g from "../Restes_bildes/3stavs/kreisa3g.png";
//Lower left
import kl1 from "../Restes_bildes/4stavs/ka1.png";
import kl2 from "../Restes_bildes/4stavs/ka2.png";
import kl3 from "../Restes_bildes/4stavs/ka3.png";
import kl4 from "../Restes_bildes/4stavs/ka.png";
import kl5 from "../Restes_bildes/4stavs/kasmall.png";
import kl1g from "../Restes_bildes/4stavs/ka1g.png";
import kl2g from "../Restes_bildes/4stavs/ka2g.png";
import kl3g from "../Restes_bildes/4stavs/ka3g.png";
import kl4g from "../Restes_bildes/4stavs/kag.png";
import kl5g from "../Restes_bildes/4stavs/kasmallg.png";
//upper left
import ka1 from "../Restes_bildes/4stavs/kaugsa1.png";
import ka2 from "../Restes_bildes/4stavs/kaugsa2.png";
import ka3 from "../Restes_bildes/4stavs/kup.png";
import ka4 from "../Restes_bildes/4stavs/kupamall.png";
import ka1g from "../Restes_bildes/4stavs/kaugsa1g.png";
import ka2g from "../Restes_bildes/4stavs/kaugsa2g.png";
import ka3g from "../Restes_bildes/4stavs/kupg.png";
import ka4g from "../Restes_bildes/4stavs/kupamallg.png";
//upper middle right
import l1 from "../Restes_bildes/laba_1.png";
import l2 from "../Restes_bildes/laba2.png";
import l1g from "../Restes_bildes/3stavs/laba_1g.png";
import l2g from "../Restes_bildes/3stavs/laba2g.png";
//lower right
import ll1 from "../Restes_bildes/4stavs/la1.png";
import ll2 from "../Restes_bildes/4stavs/la2.png";
import ll3 from "../Restes_bildes/4stavs/la3.png";
import ll4 from "../Restes_bildes/4stavs/lalast_small.png";
import ll5 from "../Restes_bildes/4stavs/lalast.png";
import ll1g from "../Restes_bildes/4stavs/la1g.png";
import ll2g from "../Restes_bildes/4stavs/la2g.png";
import ll3g from "../Restes_bildes/4stavs/la3g.png";
import ll4g from "../Restes_bildes/4stavs/lalast_smallg.png";
import ll5g from "../Restes_bildes/4stavs/lalastg.png";
//upper right
import la1 from "../Restes_bildes/laba_augsa_1.png";
import la2 from "../Restes_bildes/laba_augsa_2.png";
import la3 from "../Restes_bildes/laba_augsa_3.png";
import la1g from "../Restes_bildes/3stavs/laba_augsa_1g.png";
import la2g from "../Restes_bildes/3stavs/laba_augsa_2g.png";
import la3g from "../Restes_bildes/3stavs/laba_augsa_3g.png";

export const Floor5 = () => {
  const param = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [HoveredNameState, setHoveredNameState] = useState("");

  useEffect(() => {
    // api call
    console.log("also i call something to python");
    console.log();
  }, []);

  const styleProps = {
    position: "absolute",
    transition: "all 0.25s",
  }; //te gan jau row vajadzetu aizstat ar kadu kas paliek pa visu ekrānu
  return (
    <>
      <Row>
        <CardBasic>
          <div style={{ textSizeAdjust: "2rem" }}>This is Floor 5 plan</div>
          <div
            style={{ height: 400, width: 1420, backgroundColor: "white" }}
          ></div>
          <IstabasAttels
            alt={"logo1"}
            cellID="24"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 425,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo2"}
            cellID="21"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 495,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo3"}
            cellID="19"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 565,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo4"}
            cellID="17"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 635,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo5"}
            cellID="16"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 705,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo6"}
            cellID="15"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 775,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo7"}
            cellID="14"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 845,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo8"}
            cellID="13"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 915,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo9"}
            cellID="12"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 985,
              top: 300,
            }}
          />
          <IstabasAttels
            alt={"logo10"}
            cellID="9"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={bottom}
            source2={bottom_g}
            styleProps={{
              ...styleProps,
              transform: "scale(0.7)",
              left: 1055,
              top: 300,
            }}
          />

          <IstabasAttels
            alt={"logo11"}
            cellID="18"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={k1}
            source2={k1g}
            styleProps={{ ...styleProps, left: 645, top: 200 }}
          />
          <IstabasAttels
            alt={"logo12"}
            cellID="20"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={k2}
            source2={k2g}
            styleProps={{ ...styleProps, left: 615, top: 200 }}
          />
          <IstabasAttels
            alt={"logo13"}
            cellID="22"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={k3}
            source2={k3g}
            styleProps={{ ...styleProps, left: 542, top: 200 }}
          />
          <IstabasAttels
            alt={"logo14"}
            cellID="23"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={k4}
            source2={k4g}
            styleProps={{ ...styleProps, left: 440, top: 200 }}
          />
          <IstabasAttels
            alt={"logo15"}
            cellID="28"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={kl1}
            source2={kl1g}
            styleProps={{ ...styleProps, left: 230, top: 262 }}
          />
          <IstabasAttels
            alt={"logo16"}
            cellID="27"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={kl2}
            source2={kl2g}
            styleProps={{ ...styleProps, left: 338, top: 262 }}
          />
          <IstabasAttels
            alt={"logo17"}
            cellID="26"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={kl3}
            source2={kl3g}
            styleProps={{ ...styleProps, left: 383, top: 262 }}
          />
          <IstabasAttels
            alt={"logo18"}
            cellID="32"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={kl4}
            source2={kl4g}
            styleProps={{ ...styleProps, left: 156, top: 262 }}
          />
          <IstabasAttels
            alt={"logo19"}
            cellID="30"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={kl5}
            source2={kl5g}
            styleProps={{ ...styleProps, left: 190, top: 262 }}
          />
          <IstabasAttels
            alt={"logo21"}
            cellID="29"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ka1}
            source2={ka1g}
            styleProps={{ ...styleProps, left: 225, top: 127 }}
          />
          <IstabasAttels
            alt={"logo22"}
            cellID="25"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ka2}
            source2={ka2g}
            styleProps={{ ...styleProps, left: 305, top: 127 }}
          />
          <IstabasAttels
            alt={"logo23"}
            cellID="31"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ka3}
            source2={ka3g}
            styleProps={{ ...styleProps, left: 156, top: 127 }}
          />
          <IstabasAttels
            alt={"logo23"}
            cellID="33"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ka4}
            source2={ka4g}
            styleProps={{ ...styleProps, left: 156, top: 180 }}
          />
          <IstabasAttels
            alt={"logo24"}
            cellID="11"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={l1}
            source2={l1g}
            styleProps={{ ...styleProps, left: 1000, top: 200 }}
          />
          <IstabasAttels
            alt={"logo25"}
            cellID="10"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={l2}
            source2={l2g}
            styleProps={{ ...styleProps, left: 1049, top: 200 }}
          />
          <IstabasAttels
            alt={"logo26"}
            cellID="7"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ll1}
            source2={ll1g}
            styleProps={{ ...styleProps, left: 1143, top: 255 }}
          />
          <IstabasAttels
            alt={"logo27"}
            cellID="6"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ll2}
            source2={ll2g}
            styleProps={{ ...styleProps, left: 1214, top: 260 }}
          />
          <IstabasAttels
            alt={"logo28"}
            cellID="4"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ll3}
            source2={ll3g}
            styleProps={{ ...styleProps, left: 1263, top: 246 }}
          />
          <IstabasAttels
            alt={"logo29"}
            cellID="1"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ll5}
            source2={ll5g}
            styleProps={{ ...styleProps, left: 1374, top: 260 }}
          />
          <IstabasAttels
            alt={"logo30"}
            cellID="3"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={ll4}
            source2={ll4g}
            styleProps={{ ...styleProps, left: 1374, top: 260 }}
          />

          <IstabasAttels
            alt={"logo32"}
            cellID="8"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={la1}
            source2={la1g}
            styleProps={{ ...styleProps, left: 1143, top: 127 }}
          />
          <IstabasAttels
            alt={"logo33"}
            cellID="5"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={la2}
            source2={la2g}
            styleProps={{ ...styleProps, left: 1290, top: 130 }}
          />
          <IstabasAttels
            alt={"logo34"}
            cellID="2"
            onHover={(ID) => setHoveredNameState(ID)}
            source1={la3}
            source2={la3g}
            styleProps={{ ...styleProps, left: 1377, top: 130 }}
          />
        </CardBasic>
      </Row>
      <Row>
        <CardBasic>
          <h4>Room number: {HoveredNameState}</h4>
        </CardBasic>{" "}
      </Row>
    </>
  );
};
