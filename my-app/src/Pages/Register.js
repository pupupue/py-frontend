import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [token, setToken] = useCookies(["mytoken"]);
  const [logedUser, setLogedUser] = useCookies(["myusername"]);
  const [isLogin, setLogin] = useState(true);
  let history = useHistory();

  const RegisterBtn = () => {
    APIService.RegisterUser({
      username,
      password,
      email,
      first_name,
      last_name,
    })
      .then(() => history.push("/App/login"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <br />
      <br />
      <h1>Please Register </h1>

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

      <div className="mb-3">
        <label htmlFor="E-mail" className="form-label">
          E-mail
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Please Enter E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="FirstName" className="form-label">
          First name
        </label>
        <input
          type="first_name"
          className="form-control"
          id="first_name"
          placeholder="Please Enter Password"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="FirstName" className="form-label">
          Last Name
        </label>
        <input
          type="last_name"
          className="form-control"
          id="last_name"
          placeholder="Please Enter Password"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <button onClick={RegisterBtn} className="btn btn-primary">
        Register
      </button>

      <div className="mb-3">
        <br />

        <h5>
          If You Have Account, Please{" "}
          <button
            className="btn btn-primary"
            onClick={() => history.push("/App/login")}
          >
            Login
          </button>
          Here
        </h5>
      </div>
    </div>
  );
};
