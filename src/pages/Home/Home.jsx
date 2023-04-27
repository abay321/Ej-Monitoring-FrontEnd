import React from "react";
import { Link } from "react-router-dom";
import { MerekUpdate, RMMAgent, UpdateWilayah } from "./index";
// import { Divider } from "antd";
import style from "./Home.module.css";
import { Breadcrumbs } from "../../components/components";

const Home = () => {
  return (
    <main className={style.home_container}>
      <Breadcrumbs
        title="Home"
        items={[
          {
            title: <Link to={"/"}>Home</Link>,
          },
          {
            title: "Home",
          },
        ]}
      />
      <div className={style.section_1}>
        <RMMAgent />
        <MerekUpdate />
      </div>
      <UpdateWilayah />
    </main>
  );
};
export default Home;
