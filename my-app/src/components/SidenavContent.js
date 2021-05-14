import React, { useEffect, useState } from "react";
import { Sidenav } from "../UI/Sidenav";
import { SidenavButton } from "../components/SidenavButton";
import { useHistory } from "react-router-dom";
import { CardBasic_user } from "../components/CardBasic_user";
import noPhoto from "../Restes_bildes/no_image.png";
import { useCookies } from "react-cookie";
import { AlarmContext } from "../Pages/Floor1";

export const SidenavContent = () => {
  const history = useHistory();
  const [username, setUsername] = useCookies(["myusername"]);
  const [cellDataArray1, setCellDataArray1] = useState([]);
  const [cellDataArray2, setCellDataArray2] = useState([]);
  const [cellDataArray3, setCellDataArray3] = useState([]);
  const [cellDataArray4, setCellDataArray4] = useState([]);
  const [cellDataArray5, setCellDataArray5] = useState([]);
  const [cellDataArray6, setCellDataArray6] = useState([]);
  const [isAlarm1, setIsAlarm1] = useState(false);
  const [isAlarm2, setIsAlarm2] = useState(false);
  const [isAlarm3, setIsAlarm3] = useState(false);
  const [isAlarm4, setIsAlarm4] = useState(false);
  const [isAlarm5, setIsAlarm5] = useState(false);
  const [isAlarm6, setIsAlarm6] = useState(false);

  const [cellData, setCellData] = useState({
    Name: "",
    Date: "",
    Floor: "",
    cellID: "",
    Status: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cellAlarms1/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellDataArray1(resp))
      .then((resp) => checkAlarm())
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cellAlarms2/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellDataArray2(resp))
      .then((resp) => checkAlarm())
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cellAlarms3/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellDataArray3(resp))
      .then((resp) => checkAlarm())
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cellAlarms4/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellDataArray4(resp))
      .then((resp) => checkAlarm())
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cellAlarms5/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellDataArray5(resp))
      .then((resp) => checkAlarm())
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cellAlarms6/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setCellDataArray6(resp))
      .then((resp) => checkAlarm())
      .catch((error) => console.log(error));
  }, []);
  console.log(cellDataArray6.filter((cell) => cell.Status === "DOWN")[0]);
  const checkAlarm = () => {
    {
      cellDataArray1.filter((cell) => cell.Status === "DOWN")[0] !== undefined
        ? setIsAlarm1(true)
        : setIsAlarm1(false);
    }
    {
      cellDataArray2.filter((cell) => cell.Status === "DOWN")[0] !== undefined
        ? setIsAlarm2(true)
        : setIsAlarm2(false);
    }
    {
      cellDataArray3.filter((cell) => cell.Status === "DOWN")[0] !== undefined
        ? setIsAlarm3(true)
        : setIsAlarm3(false);
    }
    {
      cellDataArray4.filter((cell) => cell.Status === "DOWN")[0] !== undefined
        ? setIsAlarm4(true)
        : setIsAlarm4(false);
    }
    {
      cellDataArray5.filter((cell) => cell.Status === "DOWN")[0] !== undefined
        ? setIsAlarm5(true)
        : setIsAlarm5(false);
    }
    {
      cellDataArray6.filter((cell) => cell.Status === "DOWN")[0] !== undefined
        ? setIsAlarm6(true)
        : setIsAlarm6(false);
    }
  };

  return (
    <Sidenav>
      <SidenavButton
        alarm={false}
        text="Dashboard"
        onClick={() => history.push("/App")}
      />
      <SidenavButton
        alarm={isAlarm1}
        text="Floor 1"
        onClick={() => history.push("/App/floor1")}
      />
      <SidenavButton
        alarm={isAlarm2}
        text="Floor 2"
        onClick={() => history.push("/App/floor2")}
      />
      <SidenavButton
        alarm={isAlarm3}
        text="Floor 3"
        onClick={() => history.push("/App/floor3")}
      />
      <SidenavButton
        alarm={isAlarm4}
        text="Floor 4"
        onClick={() => history.push("/App/floor4")}
      />
      <SidenavButton
        alarm={isAlarm5}
        text="Floor 5"
        onClick={() => history.push("/App/floor5")}
      />
      <SidenavButton
        alarm={isAlarm6}
        text="Attic"
        onClick={() => history.push("/App/floor6")}
      />
      <SidenavButton
        alarm={false}
        text="Maintenance "
        onClick={() => history.push("/Maintenance")}
      />
      <CardBasic_user>
        {" "}
        <h4>Username: {username["myusername"]}</h4>
        <h4>Security level: </h4>
        <img style={{ Transform: "scale(0.6)" }} src={noPhoto} />
      </CardBasic_user>
    </Sidenav>
  );
};
