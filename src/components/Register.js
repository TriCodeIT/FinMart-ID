import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [Name, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [PasswordHash, setPassword] = useState("");

  const changeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const clickRegister = () => {
    const data = {
      name: Name,
      email: Email,
      password: PasswordHash
    };
    axios.post('http://0.tcp.ap.ngrok.io:13656/api/v1/users', data)
    .then(result => {
      console.log(result);
    })
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    value={Name}
                    onChange={changeUsername}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    value={Email}
                    onChange={changeEmail}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    value={PasswordHash}
                    onChange={changePassword}
                  />
                </div>
                <button className="btn btn-primary" onClick={clickRegister}>
                  Register
                </button>{" "}
                <Link to="/" className="btn btn-warning">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
