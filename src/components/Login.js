import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Naves } from "../starships";

export const Login = () => {
  const [emaillog, setemaillog] = useState("");
  const [passwordlog, setpasswordlog] = useState("");
  const [flag, setflag] = useState(false);
  const [home, sethome] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    const mail = localStorage.getItem("Email").replace(/"/g, "");
    const pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setflag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setflag(true);
    } else {
      sethome(!home);
      setflag(false);
    }
  };

  return (
    <div>
      {home ? (
        <form onSubmit={handleLogin}>
          <h3>Login</h3>
          <div className="form-group">
            <label>Email:</label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter Your Email"
              onChange={(event) => setemaillog(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type={"password"}
              className="form-control"
              placeholder="Enter Password"
              onChange={(event) => setpasswordlog(event.target.value)}
            />
          </div>
          <button type="submit" className="text-white btn btn-info">
            Login
          </button>
          {flag && (
            <Alert color="primary" variant="danger">
              Please Fill Every Field
            </Alert>
          )}
        </form>
      ) : (
        <Naves />
      )}
    </div>
  );
};
