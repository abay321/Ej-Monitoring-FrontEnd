import React from "react";
import { RMMAgent, MerekUpdate, UpdateWilayah } from "../../components";
// import { Breadcrumbs } from "../components";
import style from "./Chart.module.css";

function Chart() {
  return (
    <main className={style.chart_container}>
      <div className={style.section_1}>
        <RMMAgent />
        <MerekUpdate />
      </div>
      <UpdateWilayah />
    </main>
  );
}

export default Chart;
