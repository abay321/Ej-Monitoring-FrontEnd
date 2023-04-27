import { useState } from "react";
import { BuildingsBg, MandiriBgBlue } from "../../assets/image";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import * as MdIcons from "react-icons/md";
import "./Login.scss";

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const alertInput = (message, warning) => {
      messageApi.open({
        type: warning,
        content: message,
      });
    };
    if (username.trim().length === 0 && password.trim().length === 0) {
      // alert("Username & Pasword must be filled in");
      alertInput("Username & Pasword must be filled in", "warning");
    } else if (username.trim().length === 0) {
      alertInput("Username invalid", "warning");
    } else if (password.trim().length === 0) {
      alertInput("Password invalid", "warning");
    } else if (username === "admin" && password === "Admin_123") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "0");
      navigate('/')
    } else {
      alertInput("Username atau password salah.", "error");
    }
  };

  return (
    <>
      <div className="main-page">
        {contextHolder}
        <div className="left">
          <img src={BuildingsBg} className="bg-image" alt="imageBg" />
          <div className="text">
            <h2>Welcome</h2>
            <h4>
              Dear Colleague,For further information <br /> please contact us
              <br />
              <MdIcons.MdEmail />
              nanang.suhada@bankmandiri.co.id
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="logo-login">
            <img src={MandiriBgBlue} alt="mandiri" />
          </div>
          <div className="login-header">
            <h1>Login</h1>
            <h4>Please enter your credential.</h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-controls">
              <div className="login-control">
                <label htmlFor="username">Username</label>
                <input
                  autoComplete="false"
                  autoSave="none"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="login-control">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="login-actions">
              <button type="submit">Sign in</button>
            </div>
          </form>
          <footer>
            <h5>
              Copyright © 2023{" "}
              <a
                href="http://hbm.co.id/"
                target="blank"
                style={{
                  color: "rgb(22, 119, 254)",
                }}
              >
                HBM
              </a>{" "}
              | All right reserved
            </h5>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Login;
