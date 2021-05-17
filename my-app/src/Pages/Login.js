import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pasWrong, setPasWrong] = useState(false);
  const [token, setToken] = useCookies(["mytoken"]);
  const [logedUser, setLogedUser] = useCookies(["myusername"]);
  const [securityLevel, setSecurityLevel] = useCookies(["mysecuritylevel"]);
  const [isLogin, setLogin] = useState(true);
  let history = useHistory();

  useEffect(() => {
    if (token["mytoken"]) {
      if (token["mytoken"] === undefined) {
        //console.log("wrong");
        //alert.show("Wrong Password!");
        setPasWrong(true);
      } else {
        history.push("/App");
        setPasWrong(false);
      }
    } else {
      history.push("/App/Login");
    }
  }, [token]);

  const loginBtn = () => {
    APIService.LoginUser({ username, password })
      .then((resp) => setToken("mytoken", resp.token))
      .then((resp) => setLogedUser("myusername", username))
      .catch((error) => console.log(error));
  };

  return (
    <div
      style={{
        width: "50rem",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#254204",
        alignItems: "center",
        marginTop: "10rem",
        marginLeft: "35rem",
      }}
    >
      <br />
      <br />
      <h1>Please Login </h1>
      <br />
      <br />
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Please Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Please Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={loginBtn} className="btn btn-primary">
        Login
      </button>

      <div className="mb-3">
        <br />

        <h5>
          If You Don't Have Account, Please{" "}
          <button
            className="btn btn-primary"
            onClick={() => {
              history.push("/App/register");
              setPasWrong(false);
            }}
          >
            Register
          </button>
          Here
        </h5>
      </div>
      {pasWrong && (
        <div style={{ backgroundColor: "red" }}> Wrong Password</div>
      )}
    </div>
  );
};
