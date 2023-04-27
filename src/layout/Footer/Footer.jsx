import React from "react";
import { Layout } from "antd";
import "./Footer.scss";

function Footer() {
  const { Footer } = Layout;
  return (
    <Footer>
      <span>

      <b>Copyright © 2019</b>{" "}
      <b>
        <a>HBM</a>
      </b>{" "}
      | All rights reserved.
      </span>
    </Footer>
  );
}

export default Footer;
