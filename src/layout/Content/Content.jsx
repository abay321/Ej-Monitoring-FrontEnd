import React from "react";
import { SideNavigate } from "../../config/Routes/SideNavigate/SideNavigate";
import Footer from "../Footer/Footer";
import { Drawer, Menu, Layout } from "antd";
import { Outlet } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { MandiriBgWhite } from "../../assets/image";
import "./Content.scss";
function Conttent({ onClose, selectedKeys, menuClickHandler, open }) {
  const { Content } = Layout;
  return (
    <>
      <Content className="content_container">
        <main className="route-content">
          <Outlet />
        </main>
      </Content>
      <Footer />
      <Drawer
        headerStyle={{
          padding: "1rem 0.5rem",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
        title={<img className="logo-mandiri-drawer" src={MandiriBgWhite} />}
        closeIcon={<FaIcons.FaBars className="close-button-drawer" />}
        open={open}
        onClose={onClose}
        placement="left"
        width={250}
      >
        <div
          style={{
            background: "white",
            height: "1px",
          }}
        />
        <Menu
          theme="dark"
          // theme="light"
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={selectedKeys}
          onClick={menuClickHandler}
          items={SideNavigate.map((data) => {
            return {
              key: data.path,
              icon: data.icon,
              label: data.label,
              children:
                data.children &&
                data.children.map((child) => {
                  return {
                    key: child.path,
                    label: child.label,
                  };
                }),
            };
          })}
        />
      </Drawer>
    </>
  );
}

export default Conttent;
