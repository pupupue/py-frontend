import React, { useEffect, useState } from "react";
import { Sidenav } from "../UI/Sidenav";
import { SidenavButton } from "../components/SidenavButton";
import { useHistory } from "react-router-dom";
import { CardBasic_user } from "../components/CardBasic_user";
import noPhoto from "../Restes_bildes/no_image.png";
import { useCookies } from "react-cookie";
import APIService from "../APIService";
import { AlarmContext } from "../Pages/Floor1";

export const SidenavContent = () => {
  const history = useHistory();
  const [username, setUsername] = useCookies(["myusername"]);
  const [userArray, setUserArray] = useState([]);
  // const [cellDataArray2, setCellDataArray2] = useState([]);
  // const [cellDataArray3, setCellDataArray3] = useState([]);
  // const [cellDataArray4, setCellDataArray4] = useState([]);
  // const [cellDataArray5, setCellDataArray5] = useState([]);
  // const [cellDataArray6, setCellDataArray6] = useState([]);
  // const [isAlarm1, setIsAlarm1] = useState(false);
  // const [isAlarm2, setIsAlarm2] = useState(false);
  // const [isAlarm3, setIsAlarm3] = useState(false);
  // const [isAlarm4, setIsAlarm4] = useState(false);
  // const [isAlarm5, setIsAlarm5] = useState(false);
  // const [isAlarm6, setIsAlarm6] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    groups: [],
  });

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setUserArray(resp))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    setUserData(
      userArray.filter((user) => user.username === username["myusername"])[0]
    );
  }, [setUserArray]);

  return (
    <Sidenav>
      <SidenavButton
        alarm={false}
        text="Dashboard"
        onClick={() => history.push("/App")}
      />
      <SidenavButton
        text="Floor 1"
        onClick={() => history.push("/App/floor1")}
      />
      <SidenavButton
        text="Floor 2"
        onClick={() => history.push("/App/floor2")}
      />
      <SidenavButton
        text="Floor 3"
        onClick={() => history.push("/App/floor3")}
      />
      <SidenavButton
        text="Floor 4"
        onClick={() => history.push("/App/floor4")}
      />
      <SidenavButton
        text="Floor 5"
        onClick={() => history.push("/App/floor5")}
      />
      <SidenavButton text="Attic" onClick={() => history.push("/App/floor6")} />
      <SidenavButton
        alarm={false}
        text="Maintenance "
        onClick={() => history.push("/App/Maintenance")}
      />
      <CardBasic_user>
        <h4>Username: {username["myusername"]}</h4>
        {/* <h4>Security level: {userData.groups} </h4> */}
        <img
          style={{ Transform: "scale(0.6)" }}
          src={noPhoto}
          alt="user_photo"
        />
      </CardBasic_user>
    </Sidenav>
  );
};
