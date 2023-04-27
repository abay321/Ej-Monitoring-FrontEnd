import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Layout from "antd/es/layout/layout";
import { Header, Conttent } from "../../../layout/Layout";

function MainApp({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const menuClickHandler = (item) => {
    navigate(item.key);
    setSelectedKeys(item.key);
    setOpen(false);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Header showDrawer={showDrawer} setIsAuthenticated={setIsAuthenticated} />

      <Conttent
        onClose={onClose}
        selectedKeys={selectedKeys}
        open={open}
        menuClickHandler={menuClickHandler}
      />
    </Layout>
  );
}

export default MainApp;
