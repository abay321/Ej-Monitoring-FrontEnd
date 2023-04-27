import React from "react";
import { Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import "./Header.scss";
import { MandiriBgWhite } from "../../assets/image";
function Header({ showDrawer, setIsAuthenticated }) {
  const { Header } = Layout;
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <Header>
      <div className="toggle-bar" onClick={showDrawer}>
        <FaIcons.FaBars />
      </div>
      <div className="header-left">
        <img className="logo-mandiri-header" src={MandiriBgWhite} />
        <div className="divider" />
        <div className="title-header">
          <h4>EJ MONITORING</h4>
          <h6>Electronic Channel Operations Group</h6>
        </div>
      </div>

      <div className="admin-logo">
        <BiIcons.BiUser className="user-icon-header" />
        <span>Admin01</span>
        <Tooltip placement="bottom" title="logout">
          <MdIcons.MdLogout
            className="logout-icon-header"
            // onClick={() => navigate("/")}
            onClick={handleLogout}
          />
        </Tooltip>
      </div>
    </Header>
  );
}

export default Header;
