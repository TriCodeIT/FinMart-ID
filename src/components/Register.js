import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [Name, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [alert, setAlert] = useState("")
  const [error, setError] = useState("")

  const changeUsername = (e) => {
    const value = e.target.value;
    setUsername(value)
    setError('')
  };

  const changeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError('')
  };

  const changePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setError('')
  };

  const clickRegister = () => {
    const data = {
      name: Name,
      email: Email,
      password: Password
    };
    axios.post('http://0.tcp.ap.ngrok.io:18952/api/v1/users', data)
    .then(result => {
      if(result) {
        if(result.data) {
          setUsername('')
          setEmail('')
          setPassword('')
          setAlert(result.data.meta.message)
          setTimeout(() => {
            setAlert('')
          },3000)
        }
      }
    })
    .catch(e => {
      setError(e.response.data.meta.message); //Untuk Validasi Register Form Return dari BackEnd
    })
  };

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                
                {
                  error && (
                    <div className="alert alert-danger">
                      <p>{error}</p>
                    </div>
                  )
                }


                {
                  alert && (
                    <div className="alert alert-primary">
                      <p>{alert}</p>
                    </div>
                  )
                }
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
                    value={Password}
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
