import React from "react";
import { Pie } from "@ant-design/plots";
import { Card, Divider, Table } from "antd";

import style from "./RMMAgent.module.css";
import "./RMMAgent.scss";

const RMMAgent = () => {
  const data = [
    {
      type: "Update",
      value: 12838,
    },
    {
      type: "Tidak Update",
      value: 317,
    },
  ];
  const configChart = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
        color: "white",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  const dataSourceTable = [
    {
      key: "1",
      status: "Update",
      jumlah: 12838,
      persentase: 12,
    },
    {
      key: "2",
      status: "Tidak Update",
      jumlah: 317,
      persentase: 12,
    },
    {
      key: "3",
      status: "Total",
      jumlah: 13.115,
      persentase: "100%",
    },
  ];

  const columnsTable = [
    {
      title: "Status EJ",
      dataIndex: "status",
      key: "status",
      align: "center",
      className: "table_a",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      align: "center",
    },
    {
      title: "Persentase",
      dataIndex: "persentase",
      key: "persentase",
      align: "center",
    },
  ];

  return (
    <Card
      className={style.card}
      size="small"
      // title="Status RMM Agent"
      hoverable
      // headStyle={{ textAlign: "left", fontSize: '20px',}}
      bodyStyle={{
        padding: "0 1rem 1rem 1rem ",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{
        fontSize: '12px',
        padding:'10px',
       
      }}>
        <h2 style={{
          fontWeight: '500'
        }}>Status RMM Agent</h2>
      </div>
      <Pie {...configChart} className={style.piechart} />
      {/* <Divider /> */}
      <Table
        className={style.table}
        // bordered="true"
        pagination={false}
        dataSource={dataSourceTable}
        columns={columnsTable}
        size="small"
      />
    </Card>
  );
};

export default RMMAgent;
