import "./StatMachH0.css";
import React from "react";
import {
  Breadcrumbs,
  MerekUpdate,
  RMMAgent,
  UpdateWilayah,
} from "../../../components/components";
import Filter from "../../../components/Mui/Filter/Filter";
import { Link } from "react-router-dom";

function StatusMachineH0() {
  return (
    <main className="stat-mach-0">
      <Breadcrumbs
        title="Status Machine H+0"
        items={[
          {
            title: <Link to={"/"}>Home</Link>,
          },
          {
            title: "Status Mesin H+0",
          },
        ]}
      />
      <Filter />
      <div
        style={{
          display: "flex",
          gap: '1.5rem',
          margin: '1.5rem 0'
        }}
      >
        <RMMAgent />
        <MerekUpdate />
      </div>
      <UpdateWilayah />
    </main>
  );
}

export default StatusMachineH0;
