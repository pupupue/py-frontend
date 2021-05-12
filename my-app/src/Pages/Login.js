import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [logedUser, setLogedUser] = useCookies(["myusername"]);
  const [isLogin, setLogin] = useState(true);
  let history = useHistory();

  useEffect(() => {
    if (token["mytoken"]) {
      if (token["mytoken"] == "undefined") {
        console.log("wrong");
      } else {
        history.push("/App");
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

  const RegisterBtn = () => {
    APIService.RegisterUser({ username, password })
      .then(() => loginBtn())
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <br />
      <br />
      {isLogin ? <h1>Please Login </h1> : <h1>Please Register </h1>}

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

      {isLogin ? (
        <button onClick={loginBtn} className="btn btn-primary">
          Login
        </button>
      ) : (
        <button onClick={RegisterBtn} className="btn btn-primary">
          Register
        </button>
      )}

      <div className="mb-3">
        <br />
        {isLogin ? (
          <h5>
            If You Don't Have Account, Please{" "}
            <button
              className="btn btn-primary"
              onClick={() => history.push("/App/register")}
            >
              Register
            </button>
            Here
          </h5>
        ) : (
          <h5>
            If You Have Account, Please{" "}
            <button className="btn btn-primary" onClick={() => setLogin(true)}>
              Login
            </button>
            Here
          </h5>
        )}
      </div>
    </div>
  );
};
