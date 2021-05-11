import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardBasic } from "../components/CardBasic";
import { CellData } from "../components/CellData";
import { IstabasAttels, Popup } from "../components/IstabasAttels";
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
import kl1 from "../Restes_bildes/kreisa_leja_2.png";
import kl2 from "../Restes_bildes/kreisa_leja_3.png";
import kl3 from "../Restes_bildes/kreisa_leja_4.png";
import kl4 from "../Restes_bildes/kreisa_leja_5.png";
import kl5 from "../Restes_bildes/3stavs/kreisa_leja_pedejais.png";
import kl6 from "../Restes_bildes/3stavs/kreisa_apaksa_small.png";
import kl1g from "../Restes_bildes/3stavs/kreisa_leja_2g.png";
import kl2g from "../Restes_bildes/3stavs/kreisa_leja_3g.png";
import kl3g from "../Restes_bildes/3stavs/kreisa_leja_4g.png";
import kl4g from "../Restes_bildes/3stavs/kreisa_leja_5g.png";
import kl5g from "../Restes_bildes/3stavs/kreisa_leja_pedejaisg.png";
import kl6g from "../Restes_bildes/3stavs/kreisa_apaksa_smallg.png";
//upper left
import ka1 from "../Restes_bildes/kreisa_augsa_3.png";
import ka2 from "../Restes_bildes/kreisa_augsa_2.png";
import ka3 from "../Restes_bildes/kreisa_augsa_pedeja.png";
import ka1g from "../Restes_bildes/3stavs/kreisa_augsa_3g.png";
import ka2g from "../Restes_bildes/3stavs/kreisa_augsa_2g.png";
import ka3g from "../Restes_bildes/3stavs/kreisa_augsa_pedejag.png";
//upper middle right
import l1 from "../Restes_bildes/laba_1.png";
import l2 from "../Restes_bildes/laba2.png";
import l1g from "../Restes_bildes/3stavs/laba_1g.png";
import l2g from "../Restes_bildes/3stavs/laba2g.png";
//lower right
import ll1 from "../Restes_bildes/laba_leja_1.png";
import ll2 from "../Restes_bildes/laba_leja_2.png";
import ll3 from "../Restes_bildes/laba_leja_3.png";
import ll4 from "../Restes_bildes/laba_leja_4.png";
import ll5 from "../Restes_bildes/laba_leja_5.png";
import ll6 from "../Restes_bildes/3stavs/laba_apaksa_small.png";
import ll1g from "../Restes_bildes/3stavs/laba_leja_1g.png";
import ll2g from "../Restes_bildes/3stavs/laba_leja_2g.png";
import ll3g from "../Restes_bildes/3stavs/laba_leja_3g.png";
import ll4g from "../Restes_bildes/3stavs/laba_leja_4g.png";
import ll5g from "../Restes_bildes/3stavs/laba_leja_5g.png";
import ll6g from "../Restes_bildes/3stavs/laba_apaksa_smallg.png";
//upper right
import la1 from "../Restes_bildes/laba_augsa_1.png";
import la2 from "../Restes_bildes/laba_augsa_2.png";
import la3 from "../Restes_bildes/laba_augsa_3.png";
import la1g from "../Restes_bildes/3stavs/laba_augsa_1g.png";
import la2g from "../Restes_bildes/3stavs/laba_augsa_2g.png";
import la3g from "../Restes_bildes/3stavs/laba_augsa_3g.png";

export const Floor3 = () => {
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
    fetch("http://127.0.0.1:8000/api/cellAlarms3/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellDataArray(resp))
      .catch((error) => console.log(error));
  }, []);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const styleProps = {
    position: "absolute",
    transition: "all 0.25s",
  }; //te gan jau row vajadzetu aizstat ar kadu kas paliek pa visu ekrānu
  return (
    <>
      <Row>
        <CardBasic>
          <div style={{ textSizeAdjust: "2rem" }}>This is Floor 3 plan</div>
          <div
            style={{ height: 400, width: 1420, backgroundColor: "white" }}
          ></div>
          <IstabasAttels
            alt={"logo1"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "25")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "22")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "20")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "18")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "17")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "16")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "15")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "14")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "13")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "10")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
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
            cellData={cellDataArray.filter((cell) => cell.cellID === "19")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={k1}
            source2={k1g}
            styleProps={{ ...styleProps, left: 645, top: 200 }}
          />
          <IstabasAttels
            alt={"logo12"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "21")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={k2}
            source2={k2g}
            styleProps={{ ...styleProps, left: 615, top: 200 }}
          />
          <IstabasAttels
            alt={"logo13"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "23")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={k3}
            source2={k3g}
            styleProps={{ ...styleProps, left: 542, top: 200 }}
          />
          <IstabasAttels
            alt={"logo14"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "24")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={k4}
            source2={k4g}
            styleProps={{ ...styleProps, left: 440, top: 200 }}
          />
          <IstabasAttels
            alt={"logo15"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "27")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={kl1}
            source2={kl1g}
            styleProps={{ ...styleProps, left: 378, top: 257 }}
          />
          <IstabasAttels
            alt={"logo16"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "28")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={kl2}
            source2={kl2g}
            styleProps={{ ...styleProps, left: 330, top: 262 }}
          />
          <IstabasAttels
            alt={"logo17"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "29")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={kl3}
            source2={kl3g}
            styleProps={{ ...styleProps, left: 293, top: 262 }}
          />
          <IstabasAttels
            alt={"logo18"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "30")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={kl4}
            source2={kl4g}
            styleProps={{ ...styleProps, left: 220, top: 262 }}
          />
          <IstabasAttels
            alt={"logo19"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "34")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={kl5}
            source2={kl5g}
            styleProps={{ ...styleProps, left: 156, top: 250 }}
          />
          <IstabasAttels
            alt={"logo20"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "32")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={kl6}
            source2={kl6g}
            styleProps={{ ...styleProps, left: 194, top: 250 }}
          />
          <IstabasAttels
            alt={"logo21"}
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            cellData={cellDataArray.filter((cell) => cell.cellID === "26")[0]} //7
            source1={ka1}
            source2={ka1g}
            styleProps={{ ...styleProps, left: 303, top: 127 }}
          />
          <IstabasAttels
            alt={"logo22"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "31")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={ka2}
            source2={ka2g}
            styleProps={{ ...styleProps, left: 220, top: 127 }}
          />
          <IstabasAttels
            alt={"logo23"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "33")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={ka3}
            source2={ka3g}
            styleProps={{ ...styleProps, left: 156, top: 127 }}
          />
          <IstabasAttels
            alt={"logo24"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "12")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={l1}
            source2={l1g}
            styleProps={{ ...styleProps, left: 1000, top: 200 }}
          />
          <IstabasAttels
            alt={"logo25"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "11")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={l2}
            source2={l2g}
            styleProps={{ ...styleProps, left: 1049, top: 200 }}
          />
          <IstabasAttels
            alt={"logo26"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "8")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={ll1}
            source2={ll1g}
            styleProps={{ ...styleProps, left: 1143, top: 255 }}
          />
          <IstabasAttels
            alt={"logo27"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "7")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={ll2}
            source2={ll2g}
            styleProps={{ ...styleProps, left: 1205, top: 260 }}
          />
          <IstabasAttels
            alt={"logo28"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "6")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={ll3}
            source2={ll3g}
            styleProps={{ ...styleProps, left: 1259, top: 260 }}
          />
          <IstabasAttels
            alt={"logo29"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "1")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={ll5}
            source2={ll5g}
            styleProps={{ ...styleProps, left: 1355, top: 248 }}
          />
          <IstabasAttels
            alt={"logo30"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "4")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={ll4}
            source2={ll4g}
            styleProps={{ ...styleProps, left: 1293, top: 260 }}
          />

          <IstabasAttels
            alt={"logo31"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "3")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={ll6}
            source2={ll6g}
            styleProps={{ ...styleProps, left: 1355, top: 248 }}
          />
          <IstabasAttels
            alt={"logo32"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "9")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={la1}
            source2={la1g}
            styleProps={{ ...styleProps, left: 1143, top: 127 }}
          />
          <IstabasAttels
            alt={"logo33"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "5")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={la2}
            source2={la2g}
            styleProps={{ ...styleProps, left: 1280, top: 127 }}
          />
          <IstabasAttels
            alt={"logo34"}
            cellData={cellDataArray.filter((cell) => cell.cellID === "2")[0]} //7
            onHover={(cellData) => {
              setCellData(cellData);
            }}
            source1={la3}
            source2={la3g}
            styleProps={{ ...styleProps, left: 1360, top: 127 }}
          />
        </CardBasic>
      </Row>

      <Row>
        <CellData {...cellData} />
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
